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
import { Timestamp } from 'firebase-admin/firestore';
import {
  SolidObjectCreateStatus,
  SolidObjectDeleteStatus,
  SolidObjectGetStatus,
  SolidObjectGetsStatus,
  SolidObjectUpdateStatus,
} from '../types/SolidObjectStatus';
import { SolidObject } from '@/src/types/SolidObject';
import { app } from '@/src/utils/firebase';

export class SolidObjectFirestoreApi {
  private db: Firestore;
  private collectionName = 'solidObjects';

  constructor() {
    this.db = getFirestore(app);
  }

  async createSolidObject(solidObject: SolidObject): Promise<SolidObjectCreateStatus> {
    return await addDoc(collection(this.db, this.collectionName), solidObject)
      .then((docRef) => {
        return {
          isSuccess: true,
          data: docRef,
        } as SolidObjectCreateStatus;
      })
      .catch(() => {
        return {
          isSuccess: false,
          data: null,
        } as SolidObjectCreateStatus;
      });
  }

  async getSolidObjects(): Promise<SolidObjectGetsStatus> {
    const solidObjects: SolidObject[] = [];
    return await getDocs(collection(this.db, this.collectionName))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // timestamp型をDate型に変換
          const solidObject = doc.data() as SolidObject;
          solidObject.date = (solidObject.date as unknown as Timestamp).toDate();
          solidObjects.push(solidObject);
        });
        return {
          isSuccess: true,
          data: solidObjects,
        } as SolidObjectGetsStatus;
      })
      .catch(() => {
        return {
          isSuccess: false,
          data: null,
        } as SolidObjectGetsStatus;
      });
  }

  async getSolidObject(id: string): Promise<SolidObjectGetStatus> {
    return await getDocs(collection(this.db, this.collectionName))
      .then((querySnapshot) => {
        let solidObject: SolidObject | undefined;
        let docId: string = '';
        querySnapshot.forEach((doc) => {
          if (doc.id === id) {
            solidObject = doc.data() as SolidObject;
            docId = doc.id;
          }
        });

        return {
          isSuccess: true,
          docId: docId,
          data: solidObject,
        } as SolidObjectGetStatus;
      })
      .catch(() => {
        return {
          isSuccess: false,
          docId: '',
          data: null,
        } as SolidObjectGetStatus;
      });
  }

  // ここはTry-Catchでエラー処理を行う方がコードが短くなってよさそう
  async updateSolidObject(solidObject: SolidObject, id: string): Promise<SolidObjectUpdateStatus> {
    try {
      const oldSolidObject = await this.getSolidObject(id);
      const docId = oldSolidObject?.docId;

      if (!docId) {
        // docIdが存在しない場合は何もせずに終了
        return {
          isSuccess: false,
        } as SolidObjectUpdateStatus;
      }

      const washingtonRef = doc(this.db, this.collectionName, docId);
      await updateDoc(washingtonRef, solidObject);
      return {
        isSuccess: true,
      } as SolidObjectUpdateStatus;
    } catch (error) {
      console.error('Failed to update solid object:', error);
      return {
        isSuccess: false,
      } as SolidObjectUpdateStatus;
    }
  }

  async deleteSolidObject(id: string): Promise<SolidObjectDeleteStatus> {
    try {
      const oldSolidObject = await this.getSolidObject(id);
      const docId = oldSolidObject?.docId;

      if (!docId) {
        // docIdが存在しない場合は何もせずに終了
        return {
          isSuccess: false,
        } as SolidObjectDeleteStatus;
      }

      await deleteDoc(doc(this.db, this.collectionName, docId));

      return {
        isSuccess: true,
      } as SolidObjectDeleteStatus;
    } catch (error) {
      // エラーが発生した場合は適切に処理する（ログ出力など）
      console.error('Failed to delete solid object:', error);
      return {
        isSuccess: false,
      } as SolidObjectDeleteStatus;
    }
  }
}
