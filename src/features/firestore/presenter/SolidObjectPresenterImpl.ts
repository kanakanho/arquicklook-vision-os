import { v4 as uuidv4 } from 'uuid';
import { SolidObjectFirestoreApi } from '../api/SolidObjectFirestoreApi';
import { SolidObjectSortList } from '../types/SolidObjectSortList';
import { SolidObjectPresenter } from './SolidObjectPresenter';
import { SolidObject } from '@/src/types/SolidObject';
import { UploadSolidObject } from '@/src/types/UploadSolidObject';

export class SolidObjectPresenterImpl implements SolidObjectPresenter {
  private solidObjectFirestoreApi: SolidObjectFirestoreApi;

  constructor() {
    this.solidObjectFirestoreApi = new SolidObjectFirestoreApi();
  }

  fetchSolidObjects(solidObjectSortList: SolidObjectSortList): Promise<SolidObject[]> {
    return new Promise((resolve) => {
      const solidObjects = this.solidObjectFirestoreApi.getSolidObjects();
      solidObjects.then((value) => {
        switch (solidObjectSortList) {
          case SolidObjectSortList.DATE_NEWEST:
            return resolve(
              value.sort((a, b) => {
                let aFromDate = new Date(a.date);
                let bFromDate = new Date(b.date);
                return aFromDate < bFromDate ? 1 : -1;
              }),
            );
          case SolidObjectSortList.DATE_OLDEST:
            return resolve(
              value.sort((a, b) => {
                let aFromDate = new Date(a.date);
                let bFromDate = new Date(b.date);
                return aFromDate > bFromDate ? 1 : -1;
              }),
            );
          case SolidObjectSortList.NAME_A_Z:
            return resolve(
              value.sort((a, b) => {
                return a.modelName.localeCompare(b.modelName);
              }),
            );
          case SolidObjectSortList.NAME_Z_A:
            return resolve(
              value.sort((a, b) => {
                return b.modelName.localeCompare(a.modelName);
              }),
            );
          case SolidObjectSortList.USER_A_Z:
            return resolve(
              value.sort((a, b) => {
                return a.user.localeCompare(b.user);
              }),
            );
          case SolidObjectSortList.USER_Z_A:
            return resolve(
              value.sort((a, b) => {
                return b.user.localeCompare(a.user);
              }),
            );
          case SolidObjectSortList.COUNT_LARGEST:
            return resolve(
              value.sort((a, b) => {
                return b.count - a.count;
              }),
            );
          case SolidObjectSortList.COUNT_SMALLEST:
            return resolve(
              value.sort((a, b) => {
                return a.count - b.count;
              }),
            );
          default:
            return resolve(value);
        }
      });
    });
  }

  fetchSolidObject(id: string): Promise<SolidObject | undefined> {
    return new Promise((resolve, reject) => {
      this.solidObjectFirestoreApi.getSolidObject(id).then((value) => {
        if (value && value.length > 0) {
          return resolve(value[0]);
        }
        return reject(new Error('SolidObject not found.'));
      });
    });
  }

  createSolidObject(uploadSolidObject: UploadSolidObject): Promise<void> {
    // TODO: ユーザー名を取得する
    const userName = 'user1';

    const solidObject: SolidObject = {
      id: uuidv4(),
      image: uploadSolidObject.image,
      usdz: uploadSolidObject.usdz,
      modelName: uploadSolidObject.modelName,
      user: userName,
      description: uploadSolidObject.description,
      date: new Date(),
      count: 0,
    };

    return new Promise((resolve) => {
      this.solidObjectFirestoreApi.createSolidObject(solidObject).then(() => {
        return resolve();
      });
    });
  }

  updateSolidObject(solidObject: SolidObject): Promise<void> {
    return new Promise((resolve) => {
      this.solidObjectFirestoreApi.updateSolidObject(solidObject, solidObject.id).then(() => {
        return resolve();
      });
    });
  }

  deleteSolidObject(id: string): Promise<void> {
    return new Promise((resolve) => {
      this.solidObjectFirestoreApi.deleteSolidObject(id).then(() => {
        return resolve();
      });
    });
  }
}
