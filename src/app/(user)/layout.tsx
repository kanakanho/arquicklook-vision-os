'use client';

import { ReactNode } from 'react';
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

  position: fixed;
  width: 100%;
`;

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <Header>ARQuickLook for VisionOS</Header>
        {children}
      </body>
    </html>
  );
}
