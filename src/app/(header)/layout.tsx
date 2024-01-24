import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <header
          style={{
            textAlign: 'center',
            backgroundColor: '#000',
            color: '#eee',
            fontWeight: 600,
            fontSize: '32px',
            padding: '10px 0',
          }}
        >
          ARQuickLook for VisionOS
        </header>
        {children}
      </body>
    </html>
  );
}
