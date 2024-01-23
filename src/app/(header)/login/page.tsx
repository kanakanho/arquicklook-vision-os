'use client';

import { FC } from 'react';
import { styled } from 'styled-components';
import { googleLogin } from '../../../utils/auth';

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

const Text = styled.div`
  font-size: 32px;
`;

const Icon = styled.div`
  padding: 8px 6px 0px 6px;
  margin: 0 0 0 24px;
  display: inline;

  border-radius: 32px;
  background-color: #fafafa;
`;

const page: FC = () => {
  const Login = async () => {
    await googleLogin()
      .then(() => {
        location.href = '/upload';
      })
      .catch(() => {
        location.href = '/';
      });
  };

  return (
    <LoginContainer onClick={Login}>
      <Text>Login With Google</Text>
      <Icon>
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
      </Icon>
    </LoginContainer>
  );
};

export default page;
