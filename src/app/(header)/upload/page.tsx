'use client';

import { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Input from './_components/Input';
import Inputimage from './_components/Inputimage';
import Inputusdz from './_components/Inputusdz';
import { getLang, en } from './_components/i18n/';
import { TypeUpload } from './_components/types/upload';

const FormContainer = styled.div`
  text-align: center;
`;

const Send = styled.div`
  padding: 20px 0;
  font-size: 24px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: orange;
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
      <Inputusdz question={lang.questions[0]} setItem={setUsdzUrl} />
      <Inputimage question={lang.questions[1]} setItem={setPngUrl} />
      <h1>{lang.input.title}</h1>
      <Input card={lang.input.cards[0]} setItem={setName} />
      <Input card={lang.input.cards[1]} setItem={setDescription} />
      <Send onClick={() => sendData()}>{lang.send}</Send>
    </FormContainer>
  );
};

export default Upload;
