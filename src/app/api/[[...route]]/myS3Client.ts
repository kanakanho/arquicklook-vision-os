import { S3Client, PutObjectCommand , CreateBucketCommand, ListBucketsCommand , ListObjectsCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from 'uuid';

export class MyS3Client {
    private client: S3Client;

    constructor() {
        console.log("MyS3Client constructor");

        this.client = new S3Client({
            region: process.env.REGION,
            endpoint: process.env.MINIO_ENDPOINT ?? '',
            forcePathStyle: true,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
            },
        });
    }

    async listBuckets() {
        console.log("Listing buckets");
        try {
            const data = await this.client.send(new ListBucketsCommand({}));
            console.log("Success", data.Buckets);
        } catch (error) {
            console.error("Error listing buckets", error);
        }
    }

    async getListObjects() {
        const params = {
            Bucket: "develop",
            MaxKeys: 100,
        };

        try {
            const data = await this.client.send(new ListObjectsCommand(params));
            console.log("Success", data);

            data.Contents?.forEach((content) => {
                const url = `${process.env.MINIO_ENDPOINT}${params.Bucket}/${content.Key}`;
                console.log("url", url);
            });
        } catch (err) {
            console.log("Error", err);
        }
    }

    async createBuckets() {
        const data = await this.client.send(new CreateBucketCommand({
            Bucket: 'my-bucket-hoge'
        }));
        console.log("Success", data);
    }

    async putObject(bucketName: string, file: File) {
        const params = {
            Bucket: bucketName,
            Key: uuidv4().toString(),
            Body: file, // Buffer オブジェクトが Body パラメーターに指定されます
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

