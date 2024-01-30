import { v4 as uuidv4 } from 'uuid';
import { MinioClient } from '../api/MinioClient';
import { MinioPresenter } from './MinioPresenter';

export class MinioPresenterImpl implements MinioPresenter {
  private client: MinioClient;

  // 依存性の逆転をするために、MinioClientを引数で受け取るようにする
  constructor(client = new MinioClient()) {
    this.client = client;
  }

  async getListBuckets() {
    const listBucketsPromise = this.client.getListBuckets();

    listBucketsPromise.then((data) => {
      data.forEach((bucket) => {
        console.log('Bucket: ', bucket.Name, ' : ', bucket.CreationDate);
      });
    });
  }

  async getListObjects() {
    const getListObjectPromise = this.client.getListObjects('develop', 1000);

    getListObjectPromise.then((data) => {
      data.Contents?.forEach((content) => {
        const url = this.changeToServerURL(
          process.env.NEXT_PUBLIC_BUCKET_NAME ?? '',
          content.Key ?? '',
        );
        console.log('url', url);
      });
    });
  }

  async createBucket(bucketName: string) {
    const createBucketPromise = this.client.createBucket(bucketName);

    createBucketPromise.then((data) => {
      console.log('Success create bucket', data);
    });
  }

  async uploadFile(file: File): Promise<string> {
    const fileName = `${uuidv4().toString()}${this.getExtensionFromName(file.name)}`;
    const bucketName = process.env.NEXT_PUBLIC_BUCKET_NAME ?? '';

    const uploadFilePromise = this.client.uploadFile(bucketName, fileName, file);

    return uploadFilePromise
      .then((minioUploaded) => {
        if (minioUploaded.isSuccess) {
          return this.changeToServerURL(bucketName, fileName);
        }
        return '';
      })
      .catch((error) => {
        throw new Error('Error uploading file', error);
      });
  }

  private changeToServerURL(bucketName: string, contentKey: string): string {
    return `${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}${bucketName}/${contentKey}`;
  }

  private getExtensionFromName(fileName: string): string {
    return fileName.replace(/.*(\..*)/, '$1');
  }
}
