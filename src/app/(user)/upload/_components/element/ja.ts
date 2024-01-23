import { TypeUpload } from '../types/upload';

const ja: TypeUpload = {
  questions: [
    {
      title: '1. 3Dモデルをアップロード',
      large: {
        img: 'send.png',
        text: '3Dモデルをアップロードしてください。対応ファイル形式は「usdz」です。',
      },
      small: {
        img: '',
        text: 'アップロードが完了しました！',
      },
    },
    {
      title: '2. モデルのキャプチャーをアップロード',
      large: {
        img: 'send.png',
        text: '3Dモデルをアップロードしてください。対応ファイル形式は「usdz」です。',
      },
      small: {
        img: '',
        text: 'アップロードが完了しました！',
      },
    },
  ],
  input: {
    title: '3. フォームを入力',
    card: [
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
  send: 'データを送信'
};

export default ja;
