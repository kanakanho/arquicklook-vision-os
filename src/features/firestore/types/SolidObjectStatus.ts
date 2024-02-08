import { DocumentData, DocumentReference } from 'firebase/firestore';
import { SolidObject } from '@/src/types/SolidObject';

export type SolidObjectCreateStatus = {
  isSuccess: boolean;
  data: DocumentReference<SolidObject, DocumentData> | null;
};

export type SolidObjectGetStatus = {
  isSuccess: boolean;
  docId: string;
  data: SolidObject | null;
};

export type SolidObjectGetsStatus = {
  isSuccess: boolean;
  data: SolidObject[] | null;
};

export type SolidObjectUpdateStatus = {
  isSuccess: boolean;
};

export type SolidObjectDeleteStatus = {
  isSuccess: boolean;
};
