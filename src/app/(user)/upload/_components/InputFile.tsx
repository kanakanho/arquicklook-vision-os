import React, { ChangeEvent, FC, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { TypeQuestion } from './types/upload';

type Props = {
  setItem: (item: string) => void;
  question: TypeQuestion;
  inputFileType: string;
};

const HiddenInput = styled.input`
  display: none;
`;

const InputContainer = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const InpuText = styled.p`
  margin: 0;
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

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
`;

const Text = styled.p`
  margin: 0;
  padding: 20px 0;
  font-size: 24px;
`;
``;
const InputFile: FC<Props> = ({ setItem, question, inputFileType }) => {
  const [url, setUrl] = useState<string>('');

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
      {inputFileType === 'usdz' ? (
        <HiddenInput
          ref={usdzInputRef}
          type='file'
          name='example1'
          accept='.usdz'
          onChange={handleUsdzFileChange}
        />
      ) : (
        <HiddenInput
          ref={usdzInputRef}
          type='file'
          name='example'
          accept='image/*'
          onChange={handleUsdzFileChange}
        />
      )}
      <InputContainer onClick={handleUsdzClick}>
        <InpuText>{question.guide}</InpuText>
        <ImageContainer>
          <Image src={`/${question.large.img}`} alt={question.large.text} />
        </ImageContainer>
      </InputContainer>
      <Text>{question.large.text}</Text>
    </>
  );
};

export default InputFile;
