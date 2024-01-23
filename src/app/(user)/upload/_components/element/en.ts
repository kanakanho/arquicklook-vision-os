import { TypeUpload } from '../types/upload';

const en: TypeUpload = {
  questions: [
    {
      title: '1. Upload 3D model',
      large: {
        img: 'send.png',
        text: 'Upload 3D model. Supported file format is "usdz".',
      },
      small: {
        img: '',
        text: 'Upload completed!',
      },
    },
    {
      title: '2. Upload model capture',
      large: {
        img: 'send.png',
        text: 'Upload 3D model. Supported file format is "usdz".',
      },
      small: {
        img: '',
        text: 'Upload completed!',
      },
    },
  ],
  input: {
    title: '3. Input form',
    card: [
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
  send: 'Send'
};

export default en;
