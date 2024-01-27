export type SolidObject = {
  id: string;
  image: string;
  usdz: string;
  modelName: string;
  user: string;
  description: string;
  date: Date;
  count: number;
};

export const demoData: SolidObject = {
  id: 'e8cfddd2-8d60-4153-8c51-16526dda8118',
  image: 'https://github.com/kanakanho/ar_quick_look/blob/main/usdz/bridge.png?raw=true',
  usdz: 'https://github.com/kanakanho/ar_quick_look/raw/main/usdz/bridge.usdz',
  modelName: 'name1',
  user: 'user1',
  description: 'caption1',
  date: new Date(2024, 1, 23),
  count: 1,
};
