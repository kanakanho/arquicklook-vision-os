import { TypeUpload } from '../types/upload';
import en from './en';
import ja from './ja';

export function getLang(): TypeUpload {
  let lang = 'en';
  if (typeof window !== 'undefined') {
    lang = window.navigator.language;
  }
  return lang === 'en' ? en : ja;
}

export { en };
