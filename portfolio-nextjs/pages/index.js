import Head from 'next/head';
import Intro from './intro';

export default function Home(props) {
  return (
    <>
    <Head>
      <title>Nihar</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://api.fontshare.com/v2/css?f[]=general-sans@300&f[]=plus-jakarta-sans@800,400,500,600,700,300,200&display=swap" rel="stylesheet"></link>
    </Head>
    <section>
      <Intro />
    </section>
    </>
  )
}