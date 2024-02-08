import { ChangeEvent, FC, useState } from 'react';
import { styled } from 'styled-components';
import { TypeCard } from './types/upload';

type Props = {
  // eslint-disable-next-line no-unused-vars
  setItem: (item: string) => void;
  card: TypeCard;
};

const Text = styled.div`
  padding: 20px 0;
  font-size: 24px;
`;

const InputText = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 0 10px;
  margin-bottom: 20px;

  font-size: 18px;
  &:focus {
    outline: none;
    border: 1px solid orange;
  }
`;

const Input: FC<Props> = ({ setItem, card }) => {
  
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState<string>('');

  const changeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    setItem(event.target.value);
  };

  return (
    <>
      <Text>{card.text}</Text>
      <InputText type='text' onChange={changeText} />
    </>
  );
};

export default Input;
