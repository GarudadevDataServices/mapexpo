import { Metadata } from 'next';
import Script from 'next/script'

import { SITE } from '~/config.js';

import Header from '~/components/widgets/Header';
import Footer2 from '~/components/widgets/Footer2';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-serif`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       </head>
      <body className="bg-slate-100  tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
      <Script 
        data-name="BMC-Widget" 
        data-cfasync="false" 
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="akuladatta" data-description="Support me on Buy me a coffee!" data-message="" data-color="#FF813F" data-position="Right" data-x_margin="18" data-y_margin="18"></Script>
       
          <Header />
          <main className=''>{children}</main>
          <Footer2 />
        
      </body>
    </html>
  );
}
