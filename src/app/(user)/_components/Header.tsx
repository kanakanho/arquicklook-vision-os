'use client';

import Link from 'next/link';
import { FC } from 'react';
import { styled } from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  background-color: #000;
  color: #eee;
  font-weight: 600;
  font-size: 32px;
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 2;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Link href='/'>ARQuickLook for VisionOS</Link>
    </HeaderContainer>
  );
};

export default Header;
