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

export type TypeUpload = {
  questions: TypeQuestion[];
  input: TypeInput;
  send: string;
};
