'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { styled } from 'styled-components';
import { googleLogin } from '@/src/features/auth';

const LoginContainer = styled.div`
  margin: 25% auto;
  padding: 16px 32px;
  top: 50%;
  width: fit-content;
  display: flex;
  justify-content: center;
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
  padding: 8px 6px 0px 6px;
  margin: 0 0 0 24px;
  display: inline;

  border-radius: 32px;
  background-color: #fafafa;
`;

const Page: FC = () => {
  const router = useRouter();
  const login = async () => {
    try {
      await googleLogin();
      router.push('/upload');
    } catch {
      router.push('/');
    }
  };

  return (
    <LoginContainer onClick={login}>
      <Text>Login With Google</Text>
      <IconWrapper>
        <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 16 16'>
          <path
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='1.5'
            d='m8.75 3.25l4.5 4.5l-4.5 4.5m-6-4.5h10.5'
          />
        </svg>
      </IconWrapper>
    </LoginContainer>
  );
};

export default Page;