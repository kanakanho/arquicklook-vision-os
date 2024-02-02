import React, { ChangeEvent, FC, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { Alert, TypeQuestion } from './types/upload';

type Props = {
  // eslint-disable-next-line no-unused-vars
  setItem: (item: string) => void;
  question: TypeQuestion;
  alert: Alert;
  inputFileType: 'usdz' | 'image';
};

const Title = styled.h1`
  margin: 30px 0;
`;

const HiddenInput = styled.input`
  display: none;
`;

const InputContainer = styled.div`
  margin: 0 auto;
  width: fit-content;

  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  /* border: 4px solid #999; */
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 12px #aaa;
  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 12px orange;
  }
`;

const InpuText = styled.p`
  font-weight: 600;
  font-size: 24px;
`;

const Image = styled.img`
  width: 500px;
  opacity: 0.6;
  overflow: hidden;
  z-index: -1;
  @media screen and (max-width: 1100px) {
    width: 300px;
    height: 200px;
  }
`;

const Text = styled.p`
  margin: 0;
  padding: 20px 0;
  font-size: 24px;
`;
const InputFile: FC<Props> = ({ setItem, question, alert, inputFileType }) => {
  const [url, setUrl] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileDropRef = useRef<HTMLDivElement>(null);

  const fileCheck = (file: File) => {
    if (
      (inputFileType === 'usdz' && file?.type === 'model/vnd.usdz+zip') ||
      (inputFileType === 'image' && file?.type.includes('image'))
    ) {
      // eslint-disable-next-line no-console
      console.log(`File name: ${file.name}, type: ${file.type}`);
      setUrl(file.name);
      setItem(url);
      setIsComplete(true);
    } else {
      window.alert(alert.filetype);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) fileCheck(file);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!event.dataTransfer) return;
    if (event.dataTransfer.files.length === 1) {
      const file = event.dataTransfer.files[0];
      fileCheck(file);
    } else {
      window.alert(alert.onedrop);
    }
    event.dataTransfer.clearData();
  };

  return (
    <>
      <Title>{question.title}</Title>
      <HiddenInput
        ref={fileInputRef}
        type='file'
        accept={inputFileType === 'usdz' ? '.usdz' : 'image/*'}
        onChange={handleFileChange}
      />
      <InputContainer
        // ファイルを選択してインポートする用
        onClick={handleClick}
        // ドラッグアンドドロップ用
        ref={fileDropRef}
        onDragOver={(event) => event.preventDefault()}
        onDrop={onDrop}
      >
        <Image src={`/${question.img}`} alt={question.text} />
        <InpuText>{isComplete ? question.complete : question.guide}</InpuText>
      </InputContainer>
      <Text>{question.text}</Text>
    </>
  );
};

export default InputFile;
