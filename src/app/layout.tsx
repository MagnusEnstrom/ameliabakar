import { draftMode } from 'next/headers';
import { Inter } from 'next/font/google';

import '@/app/globals.css';

import Navigation from '@/components/Globals/Navigation/Navigation';
import Footer from '@/components/Globals/Footer/Footer';
//import { PreviewNotice } from '@/components/Globals/PreviewNotice/PreviewNotice';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //const { isEnabled } = draftMode();
  //
  return (
    <html lang='sv'>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
