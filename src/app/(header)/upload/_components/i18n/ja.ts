import { TypeUpload } from '../types/upload';

const ja: TypeUpload = {
  questions: [
    {
      title: '1. 3Dモデルをアップロード',
      guide: '+ usdzファイルをアップロード',
      large: {
        img: 'send.png',
        text: '3Dモデルをアップロードしてください。対応ファイル形式は「.usdz」です。',
      },
    },
    {
      title: '2. モデルのキャプチャーをアップロード',
      guide: '+ pngファイルをアップロード',
      large: {
        img: 'send.png',
        text: '3Dモデルのプレビュー画像をアップロードしてください。対応ファイル形式は「.png」です。',
      },
    },
  ],
  input: {
    title: '3. フォームを入力',
    cards: [
      {
        name: '3Dモデルの名前',
        text: '3Dモデルの名前を入力してください。',
      },
      {
        name: '3Dモデルの説明',
        text: '3Dモデルの説明を入力してください。',
      },
    ],
  },
  send: 'データを送信',
};

export default ja;
