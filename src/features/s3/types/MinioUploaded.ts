import { PutObjectCommandOutput } from '@aws-sdk/client-s3';

export type MinioUploaded = {
  isSuccess: boolean;
  data: PutObjectCommandOutput;
};
