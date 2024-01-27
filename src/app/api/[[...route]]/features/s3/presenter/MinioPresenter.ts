export interface MinioPresenter {
    uploadFile(file: File): Promise<string>;
    getListBuckets(): Promise<void>;
    getListObjects(): Promise<void>;
    createBucket(bucketName: string): Promise<void>;
}