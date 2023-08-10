import Head from 'next/head';
import Intro from './intro';

export default function Home(props) {
  return (
    <>
    <Head>
      <title>Nihar</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section>
      <Intro />
    </section>
    </>
  )
}