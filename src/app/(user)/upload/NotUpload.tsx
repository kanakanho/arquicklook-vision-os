'use client';

import Link from 'next/link';
import { FC } from 'react';
import { styled } from 'styled-components';
import { SmartPhone } from './_components/types/upload';

type Props = {
  message: SmartPhone;
};

const NotUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  gap: 40px;
`;

const Title = styled.h1`
  margin: 0;
  word-break: break-word;
  word-break: auto-phrase;
  text-align: center;
`;

const LinkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 24px;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px orange;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;

const NotUpload: FC<Props> = ({ message }) => {
  return (
    <NotUploadContainer>
      <Title>{message.title}</Title>
      <p>{message.text}</p>
      <Link href='/gallery'>
        <LinkButton>
          <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16'>
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='m8.75 3.25l4.5 4.5l-4.5 4.5m-6-4.5h10.5'
            />
          </svg>
          &nbsp;{message.togallery}
        </LinkButton>
      </Link>
    </NotUploadContainer>
  );
};

export default NotUpload;
