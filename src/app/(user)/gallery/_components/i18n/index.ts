import { TypeFilter } from '../types/gallery';
import en from './en';
import ja from './ja';

export function getLang(): TypeFilter {
  let lang = 'en';
  if (typeof window !== 'undefined') {
    lang = window.navigator.language;
  }
  return lang === 'en' ? en : ja;
}

export { en };
