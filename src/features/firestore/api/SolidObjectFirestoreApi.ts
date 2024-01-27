import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from 'firebase/firestore';
import { SolidObject } from '@/src/types/SolidObject';
import { app } from '@/src/utils/firebase';

export class SolidObjectFirestoreApi {
  private db: Firestore;
  private collectionName = 'solidObjects';

  constructor() {
    this.db = getFirestore(app);
  }

  async createSolidObject(solidObject: SolidObject): Promise<void> {
    try {
      await addDoc(collection(this.db, this.collectionName), solidObject);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async getSolidObjects(): Promise<SolidObject[]> {
    const solidObjects: SolidObject[] = [];
    const querySnapshot = await getDocs(collection(this.db, this.collectionName));
    querySnapshot.forEach((doc) => {
      solidObjects.push(doc.data() as SolidObject);
    });
    return solidObjects;
  }

  async getSolidObject(id: string): Promise<[SolidObject | undefined, string]> {
    const querySnapshot = await getDocs(collection(this.db, this.collectionName));
    let solidObject: SolidObject | undefined;
    let docId: string = '';
    querySnapshot.forEach((doc) => {
      if (doc.id === id) {
        solidObject = doc.data() as SolidObject;
        docId = doc.id;
      }
    });
    return new Promise<[SolidObject | undefined, string]>((resolve) =>
      resolve([solidObject, docId]),
    );
  }

  async updateSolidObject(solidObject: SolidObject, id: string): Promise<void> {
    const oldSolidObject = this.getSolidObject(id);
    oldSolidObject.then((value) => {
      const docId = value[1];

      const washingtonRef = doc(this.db, this.collectionName, docId);
      updateDoc(washingtonRef, solidObject);
    });
  }

  async deleteSolidObject(id: string): Promise<void> {
    const oldSolidObject = this.getSolidObject(id);
    oldSolidObject.then((value) => {
      const docId = value[1];

      deleteDoc(doc(this.db, this.collectionName, docId));
    });
  }
}
