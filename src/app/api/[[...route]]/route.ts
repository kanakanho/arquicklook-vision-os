import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { MyS3Client } from './myS3Client'

export const runtime = 'edge';

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
    const s3Client = new MyS3Client();
    s3Client.getListObjects();

    return c.json({
        message: 'Hello Next.js!',
    })
})

export const GET = handle(app)