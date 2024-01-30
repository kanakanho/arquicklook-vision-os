import {
  S3Client,
  PutObjectCommand,
  CreateBucketCommand,
  ListBucketsCommand,
  ListObjectsCommand,
  Bucket,
  ListObjectsCommandOutput,
  PutObjectCommandOutput,
} from '@aws-sdk/client-s3';
import { MinioUploaded } from '../types/MinioUploaded';

export class MinioClient {
  private client: S3Client;

  constructor() {
    this.client = new S3Client({
      region: process.env.NEXT_PUBLIC_REGION,
      endpoint: process.env.NEXT_PUBLIC_MINIO_ENDPOINT ?? '',
      forcePathStyle: true,
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID ?? '',
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY ?? '',
      },
    });
  }

  async getListBuckets(): Promise<Bucket[]> {
    const data: Bucket[] = await this.client
      .send(new ListBucketsCommand({}))
      .then((data) => data.Buckets ?? [])
      .catch((error) => {
        console.error('Error listing buckets', error);
        return [];
      });
    return data;
  }

  async getListObjects(bucketName: string, maxKeys: number): Promise<ListObjectsCommandOutput> {
    const params = {
      Bucket: bucketName,
      MaxKeys: maxKeys,
    };

    const data: ListObjectsCommandOutput = await this.client
      .send(new ListObjectsCommand(params))
      .then((data) => data)
      .catch((error) => {
        console.error('Error listing objects', error);
        return {} as ListObjectsCommandOutput;
      });

    return data;
  }

  async createBucket(bucketName: string) {
    await this.client.send(
      new CreateBucketCommand({
        Bucket: bucketName,
      }),
    );
  }

  async uploadFile(bucketName: string, fileName: string, file: File): Promise<MinioUploaded> {
    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: file,
    };

    return this.client
      .send(new PutObjectCommand(params))
      .then((data) => {
        return {
          isSuccess: true,
          data: data,
        } as MinioUploaded;
      })
      .catch(() => {
        return {
          isSuccess: false,
          data: {} as PutObjectCommandOutput,
        } as MinioUploaded;
      });
  }
}
