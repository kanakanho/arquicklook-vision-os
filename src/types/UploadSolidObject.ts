export type UploadSolidObject = {
  image: string;
  usdz: string;
  modelName: string;
  description: string;
};

export const uploadSolidObjectDemoData: UploadSolidObject = {
  image: 'https://github.com/kanakanho/ar_quick_look/blob/main/usdz/bridge.png?raw=true',
  usdz: 'https://github.com/kanakanho/ar_quick_look/raw/main/usdz/bridge.usdz',
  modelName: 'name1',
  description: 'caption1',
};
