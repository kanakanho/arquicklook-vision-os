import Image from 'next/image';
import React, { ChangeEvent, FC, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { TypeQuestion } from './types/upload';

type Props = {
  setItem: (item: string) => void;
  question: TypeQuestion;
};

const HiddenInput = styled.input`
  display: none;
`;

const Input = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

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

const Inputusdz: FC<Props> = ({ setItem, question }) => {
  const [url, setUrl] = useState<string>('');
  let { text } = question.large;
  let imgUrl = require(`../../../../public/${question.large.img}`);

  const usdzInputRef = useRef<HTMLInputElement>(null);

  const handleUsdzClick = () => {
    if (usdzInputRef.current) {
      usdzInputRef.current.click();
    }
  };

  const handleUsdzFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // eslint-disable-next-line no-console
      console.log(`File name: ${file.name}, type: ${file.type}`);
      setUrl(file.name);
      setItem(url);
    }
  };

  return (
    <>
      <h1>{question.title}</h1>
      <HiddenInput
        ref={usdzInputRef}
        type='file'
        name='example1'
        accept='.usdz'
        onChange={handleUsdzFileChange}
      />
      <Input onClick={handleUsdzClick}>
        <InpuText>{question.guide}</InpuText>
        <ImageContainer>
          <Image src={imgUrl} alt={text} layout='fill' objectFit='cover' />
        </ImageContainer>
      </Input>
      <Text>{text}</Text>
    </>
  );
};

export default Inputusdz;
