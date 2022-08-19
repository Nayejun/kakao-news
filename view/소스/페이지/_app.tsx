import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

import { 전역꾸미기 } from '../꾸미기/전역꾸미기';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Global styles={전역꾸미기} />
    </>
  );
}

export default MyApp;
