'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Header = styled.div`
  text-align: center;
  background-color: #000;
  color: #eee;
  font-weight: 600;
  font-size: 32px;
  padding: 10px 0;
`;

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <RecoilRoot>
          <Header>ARQuickLook for VisionOS</Header>
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
