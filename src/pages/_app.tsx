import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { OverlayLayout } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MarinaHacks 5.0</title>
        <link type="text/css" rel="stylesheet"/>
        <link rel="icon" href="/images/logos_5.0/main_logo.svg" />
      </Head>

      <main>
        <OverlayLayout>
          <Component {...pageProps} />
        </OverlayLayout>
      </main>
    </>
  );
}
