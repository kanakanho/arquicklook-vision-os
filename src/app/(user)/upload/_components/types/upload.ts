export type TypeQuestion = {
  title: string;
  guide: string;
  img: string;
  text: string;
  complete: string;
  failed: string;
};

export type TypeCard = {
  name: string;
  text: string;
};

export type TypeInput = {
  title: string;
  cards: TypeCard[];
};

export type Alert = {
  filetype: string;
  onedrop: string;
};

export type SmartPhone = {
  title: string;
  text: string;
  togallery: string;
};

export type TypeUpload = {
  questions: TypeQuestion[];
  input: TypeInput;
  alert: Alert;
  send: string;
  smartphone: SmartPhone;
};
