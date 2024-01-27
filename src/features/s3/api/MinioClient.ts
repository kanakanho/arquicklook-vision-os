import {
  S3Client,
  PutObjectCommand,
  CreateBucketCommand,
  ListBucketsCommand,
  ListObjectsCommand,
  Bucket,
  ListObjectsCommandOutput,
} from '@aws-sdk/client-s3';

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
    const data: Bucket[] = await this.client.send(new ListBucketsCommand({}))
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

    const data: ListObjectsCommandOutput = await this.client.send(new ListObjectsCommand(params))
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

  async uploadFile(bucketName: string, fileName: string, file: File): Promise<void> {
    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: file,
    };

    await this.client.send(new PutObjectCommand(params))
      .then((data) => data)
      .catch((error) => {
        console.error('Error uploading file', error);
        return;
      });
  }
}
