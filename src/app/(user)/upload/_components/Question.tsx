import Image from 'next/image';
import { FC } from 'react';
import { styled } from 'styled-components';
import { TypeQuestion } from './types/upload';

const Input = styled.div``;

const InpuText = styled.div`
  z-index: 1000;
  position: relative;
  top: 240px;
  font-weight: 600;
  font-size: 24px;
`;

const ImageContainer = styled.div`
  position: relative;
  left: calc(50% - 300px);
  width: 600px;
  height: 400px;
  @media screen and (max-width: 1100px) {
    width: 300px;
    height: 200px;
  }

  img {
    z-index: 1;
    opacity: 0.5;
  }
`;

const Text = styled.div`
  padding: 20px 0;
  font-size: 24px;
`;

const Question: FC<TypeQuestion> = (question) => {
  let { text } = question.large;
  let imgUrl = require(`../../../../public/send.png`);

  return (
    <>
      <h1>{question.title}</h1>
      <Input>
        <InpuText>+ usdzファイルをアップロード</InpuText>
        <ImageContainer>
          <Image src={imgUrl} alt={text} layout='fill' objectFit='cover' />
        </ImageContainer>
      </Input>
      <Text>{text}</Text>
    </>
  );
};

export default Question;
