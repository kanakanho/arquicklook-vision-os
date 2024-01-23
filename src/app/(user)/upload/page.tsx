'use client';

import { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Input from './_components/Input';
import Question from './_components/Question';
import en from './_components/element/en';
import ja from './_components/element/ja';
import { TypeUpload } from './_components/types/upload';
import { getLang } from './_components/utils/lang';

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
  const sendData = () => {
    console.log('send data');
  };
  useEffect(() => {
    setLang(getLang(en, ja));
  }, []);
  return (
    <FormContainer>
      {lang.questions.map((question, index) => (
        <Question key={index} {...question} />
      ))}
      <Input {...lang.input} />
      <Send onClick={() => sendData()}>{lang.send}</Send>
    </FormContainer>
  );
};

export default Upload;
