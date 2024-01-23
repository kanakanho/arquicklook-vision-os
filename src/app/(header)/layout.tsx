'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <header>
          <a href='/'>ARQuickLook for VisionOS</a>
        </header>
        {children}
      </body>
    </html>
  );
}
