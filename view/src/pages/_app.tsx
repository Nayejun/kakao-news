import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';

import { GlobalStyles } from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Global styles={GlobalStyles} />
    </>
  );
}

export default MyApp;
