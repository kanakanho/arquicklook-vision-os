'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <header>ARQuickLook for VisionOS</header>
        {children}
      </body>
    </html>
  );
}
