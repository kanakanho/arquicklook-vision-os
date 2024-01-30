import { TypeUpload } from '../types/upload';

const en: TypeUpload = {
  questions: [
    {
      title: '1. Upload 3D model',
      guide: '+ Upload usdz file',
      img: 'send.png',
      text: 'Upload 3D model. Supported file format is ".usdz".',
      complete: 'Upload complete',
      failed: 'Upload failed',
    },
    {
      title: '2. Upload model capture',
      guide: '+ Upload image',
      img: 'send.png',
      text: 'Upload the preview image of the 3D model.',
      complete: 'Upload complete',
      failed: 'Upload failed',
    },
  ],
  input: {
    title: '3. Input form',
    cards: [
      {
        name: '3D model name',
        text: 'Enter the name of the 3D model.',
      },
      {
        name: '3D model description',
        text: 'Enter the description of the 3D model.',
      },
    ],
  },
  send: 'Send',
};

export default en;
