import type { AppProps } from 'next/app';

import '../styles/GlobalStyle.ts';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
