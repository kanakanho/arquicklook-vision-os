import { S3Client, PutObjectCommand , CreateBucketCommand, ListBucketsCommand , ListObjectsCommand, Bucket, ListObjectsCommandOutput } from "@aws-sdk/client-s3";

export class MinioClient {
    private client: S3Client;

    constructor() {
        console.log("MinioClient constructor");

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
        try {
            const data = await this.client.send(new ListBucketsCommand({}));
            return data.Buckets ?? [];
        } catch (error) {
            console.error("Error listing buckets", error);
            throw error;
        }
    }

    async getListObjects(bucketName:string,maxKeys:number):Promise<ListObjectsCommandOutput> {
        const params = {
            Bucket: bucketName,
            MaxKeys: maxKeys,
        };

        try {
            const data = await this.client.send(new ListObjectsCommand(params));
            return data ?? [];
        } catch (err) {
            console.error("Error getListObject", err);
            throw err;
        }
    }

    async createBucket(bucketName: string) {
        const data = await this.client.send(new CreateBucketCommand({
            Bucket: bucketName
        }));
    }

    async uploadFile(bucketName:string ,fileName:string ,file: File): Promise<void>{
        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: file,
        };

        console.log("Uploading object:", params);

        try {
            await this.client.send(new PutObjectCommand(params));
            console.log("Object uploaded successfully");
        } catch (error) {
            console.error("Error uploading object", error);
            throw error;
        }
    }
}

