export type TypeQuestion = {
  title: string;
  large: {
    img: string;
    text: string;
  };
  small: {
    img: string;
    text: string;
  };
};

export type TypeInput = {
  title: string;
  card: {
    name: string;
    text: string;
  }[];
};

export type TypeUpload = {
  questions: TypeQuestion[];
  input: TypeInput;
  send: string;
};
