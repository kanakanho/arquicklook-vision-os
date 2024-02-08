'use client';

import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import NotUpload from './NotUpload';
import Input from './_components/Input';
import InputFile from './_components/InputFile';
import { getLang, en } from './_components/i18n';
import { TypeUpload } from './_components/types/upload';
import { SolidObjectPresenterImpl } from '@/src/features/firestore/presenter/SolidObjectPresenterImpl';
import { useLoginMutators, useLoginState } from '@/src/state/login';
import { UploadSolidObject } from '@/src/types/UploadSolidObject';
import { auth } from '@/src/utils/firebase';

const FormContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin: 30px 0;
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
  const [isSmartphone, setIsSmartphone] = useState<boolean>(false);
  const { setLoginPermissionState } = useLoginMutators();
  const isLogin = useLoginState();
  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setLoginPermissionState(true);
      } else {
        setLoginPermissionState(false);
        router.push('/login');
      }
    });
    setLang(getLang());
  }, [router, isLogin, setLoginPermissionState]);

  useEffect(() => {
    if (navigator.userAgent.match(/(iPhone|iPod|Android)/i)) {
      setIsSmartphone(true);
    }
  }, []);

  // 送信するデータの作成
  const [usdzUrl, setUsdzUrl] = useState<string>('');
  const [pngUrl, setPngUrl] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const sendData = () => {
    const solidObjectPresenter = new SolidObjectPresenterImpl();

    const uploadSolidObject = {
      usdz: usdzUrl,
      image: pngUrl,
      modelName: name,
      description: description,
    } as UploadSolidObject;
    
    solidObjectPresenter.createSolidObject(uploadSolidObject);
  };

  if (isSmartphone) {
    return <NotUpload message={lang.smartphone} />;
  }

  return (
    <>
      <FormContainer>
        <InputFile
          question={lang.questions[0]}
          alert={lang.alert}
          setItem={setUsdzUrl}
          inputFileType='usdz'
        />
        <InputFile
          question={lang.questions[1]}
          alert={lang.alert}
          setItem={setPngUrl}
          inputFileType='image'
        />
        <Title>{lang.input.title}</Title>
        <Input card={lang.input.cards[0]} setItem={setName} />
        <Input card={lang.input.cards[1]} setItem={setDescription} />
        <Send onClick={() => sendData()}>{lang.send}</Send>
      </FormContainer>
    </>
  );
};

export default Upload;
