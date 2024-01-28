'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { styled } from 'styled-components';
import { googleLogin } from '@/src/features/auth';

const LoginWrapper = styled.div`
  height: calc(100vh - 68px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  padding: 16px 32px;
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;

  background-color: #eee;
  border-radius: 20px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 32px;
`;

const IconWrapper = styled.div`
  height: 48px;
  margin-left: 24px;
  display: inline;

  border-radius: 32px;
  background-color: #fafafa;
`;

const Page: FC = () => {
  const router = useRouter();
  const login = async () => {
    googleLogin()
      .then(() => router.push('/upload'))
      .catch(() => router.push('/'));
  };

  return (
    <LoginWrapper>
      <LoginContainer onClick={login}>
        <Text>Login With Google</Text>
        <IconWrapper>
          <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 16 16'>
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='m8.75 3.25l4.5 4.5l-4.5 4.5m-6-4.5h10.5'
            />
          </svg>
        </IconWrapper>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default Page;
