import { TypeHome } from '../types/home';

const ja: TypeHome = {
  title: 'ARQuickLook for VisionOS',
  text: 'あなたが作った3DモデルをVisionProで見てみませんか？',
  cards: [
    {
      img: 'send.png',
      text: '3Dモデルをアップロード',
      arrow: 'アップロードはこちらから',
      link: '/upload',
    },
    {
      img: 'gallery.png',
      text: 'ギャラリーから見たいモデルを選択',
      arrow: 'ギャラリーはこちらから',
      link: '/gallery',
    },
  ],
};

export default ja;
