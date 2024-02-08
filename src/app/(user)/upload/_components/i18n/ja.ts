import { TypeUpload } from '../types/upload';

const ja: TypeUpload = {
  questions: [
    {
      title: '1. 3Dモデルをアップロード',
      guide: '+ usdzファイルをアップロード',
      complete: 'アップロード完了',
      img: 'send.png',
      text: '.usdz形式の3Dモデルをアップロードしてください。',
      failed: 'アップロードに失敗しました、もう一度お試しください。',
    },
    {
      title: '2. モデルのキャプチャーをアップロード',
      guide: '+ 画像ファイルをアップロード',
      complete: 'アップロード完了',
      img: 'send.png',
      text: '3Dモデルのプレビュー画像をアップロードしてください。',
      failed: 'アップロードに失敗しました、もう一度お試しください。',
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
  alert: {
    filetype: 'ファイル形式が正しくありません',
    onedrop: 'アップロードできるファイルは1つまでです',
    success: 'アップロードに成功しました,ギャラリーに遷移します',
    failed: 'アップロードに失敗しました、もう一度お試しください。',
  },
  send: 'データを送信',
  smartphone: {
    title: 'スマートフォンからはアップロードできません',
    text: 'PC か Vision Pro からアップロードしてください',
    togallery: 'ギャラリーを見る',
  },
};

export default ja;
