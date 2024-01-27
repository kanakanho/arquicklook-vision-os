import { SolidObject } from '../../../types/SolidObject';
import { SolidObjectSortList } from '../types/SolidObjectSortList';
import { demoData } from '@/src/types/SolidObject';

/* eslint-disable no-unused-vars */
export interface SolidObjectPresenter {
  fetchSolidObjects(solidObjectSortList: SolidObjectSortList): Promise<SolidObject[]>;
  fetchSolidObject(id: string): Promise<SolidObject | undefined>;
  createSolidObject(solidObject: typeof demoData): Promise<void>;
  updateSolidObject(solidObject: typeof demoData): Promise<void>;
  deleteSolidObject(id: string): Promise<void>;
}
