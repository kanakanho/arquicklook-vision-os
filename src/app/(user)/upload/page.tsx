'use client';

import { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Input from './_components/Input';
import InputFile from './_components/InputFile';
import { getLang, en } from './_components/i18n';
import { TypeUpload } from './_components/types/upload';

const FormContainer = styled.div`
  text-align: center;
`;

const Send = styled.div`
  padding: 30px 0 25px 0;
  font-size: 24px;
  font-weight: 600;

  margin: 0 auto;
  background-color: #ccc;

  &:hover {
    cursor: pointer;
    color: orange;
    background-color: #333;
  }
`;

const Upload: FC = () => {
  const [lang, setLang] = useState<TypeUpload>(en);
  useEffect(() => {
    setLang(getLang());
  }, []);

  // 送信するデータの作成
  const [usdzUrl, setUsdzUrl] = useState<string>('');
  const [pngUrl, setPngUrl] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const sendData = () => {
    console.log('送信するデータ', usdzUrl, pngUrl, name, description);
  };

  return (
    <FormContainer>
      {lang.questions.map((question, index) => {
        if (index === 0) {
          return (
            <InputFile key={index} question={question} setItem={setUsdzUrl} inputFileType='usdz' />
          );
        } else if (index === 1) {
          return (
            <InputFile key={index} question={question} setItem={setPngUrl} inputFileType='image' />
          );
        }
      })}
      <h1>{lang.input.title}</h1>
      <Input card={lang.input.cards[0]} setItem={setName} />
      <Input card={lang.input.cards[1]} setItem={setDescription} />
      <Send onClick={() => sendData()}>{lang.send}</Send>
    </FormContainer>
  );
};

export default Upload;
