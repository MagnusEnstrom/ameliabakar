import { draftMode } from 'next/headers';
import { Nunito } from 'next/font/google';

import '@/app/globals.css';

import Navigation from '@/components/Globals/Navigation/navigation';
import Footer from '@/components/Globals/Footer/footer';
import { PreviewNotice } from '@/components/Globals/PreviewNotice/PreviewNotice';

const font = Nunito({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //const { isEnabled } = draftMode();
  //
  return (
    <html lang='sv'>
      <body className={font.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
