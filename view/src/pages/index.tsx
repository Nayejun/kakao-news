import type { NextPage } from 'next';
import Head from 'next/head';

import { 묶어버리기 } from '../컴포넌트/집합소';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>카카오 테크 뉴스</title>
        <meta name="title" content="카카오테크뉴스" />
        <meta name="viewport" content="width=device-width" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <묶어버리기 />
    </>
  );
};

export default Home;
