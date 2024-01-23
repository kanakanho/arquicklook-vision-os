import { TypeHome } from '../types/home';

export function getLang(en: TypeHome, ja: TypeHome): TypeHome {
  let lang = 'en';
  if (typeof window !== 'undefined') {
    lang = window.navigator.language;
  }
  return lang === 'en' ? en : ja;
}
