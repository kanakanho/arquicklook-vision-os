export type solidObject = {
  id: string;
  date: Date;
  user: string;
  name: string;
  caption: string;
  imageUrl: string;
  usdzUrl: string;
  count: number;
};

export const demoData: solidObject = {
  id: '1',
  date: new Date(2024, 1, 23),
  user: 'user1',
  name: 'name1',
  caption: 'caption1',
  imageUrl: 'https://github.com/kanakanho/ar_quick_look/blob/main/usdz/bridge.png?raw=true',
  usdzUrl: 'https://github.com/kanakanho/ar_quick_look/raw/main/usdz/bridge.usdz',
  count: 1,
};
