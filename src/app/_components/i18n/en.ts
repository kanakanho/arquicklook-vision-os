import { TypeHome } from '../types/home';

const en: TypeHome = {
  title: 'ARQuickLook for VisionOS',
  text: 'Would you like to see your 3D model in Apple VisionPro?',
  cards: [
    {
      img: 'send.png',
      text: 'upload your 3D model',
      arrow: "Let's upload!",
      link: '/upload',
    },
    {
      img: 'gallery.png',
      text: 'select 3D model from gallery',
      arrow: "Let's see gallery!",
      link: '/gallery',
    },
  ],
};

export default en;
