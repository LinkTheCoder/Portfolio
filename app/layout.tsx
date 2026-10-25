
import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '✦ LINK ✦',
  description: 'Homepage',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="me" href="https://blahaj.zone/@linkthecoder" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}