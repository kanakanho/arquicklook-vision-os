import { TypeHome } from '../types/home';
import en from './en';
import ja from './ja';

export function getLang(): TypeHome {
  let lang = 'en';
  if (typeof window !== 'undefined') {
    lang = window.navigator.language;
  }
  return lang === 'en' ? en : ja;
}

export { en };
