import { TypeUpload } from '../types/upload';

export function getLang(en: TypeUpload, ja: TypeUpload): TypeUpload {
  let lang = 'en';
  if (typeof window !== 'undefined') {
    lang = window.navigator.language;
  }
  return lang === 'en' ? en : ja;
}
