import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { MinioClient } from './features/s3/api/MinioClient';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  });
});

export const GET = handle(app);
