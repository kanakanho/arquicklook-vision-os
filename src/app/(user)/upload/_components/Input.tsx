import { FC } from 'react';
import { styled } from 'styled-components';
import { TypeInput } from './types/upload';

const CardContainer = styled.div``;

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
`;

const Input: FC<TypeInput> = (input) => {
  return (
    <>
      <h1>{input.title}</h1>
      <CardContainer>
        {input.card.map((card, index) => (
          <div key={index}>
            <Text>{card.text}</Text>
            <InputText type='text' />
          </div>
        ))}
      </CardContainer>
    </>
  );
};

export default Input;
