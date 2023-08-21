import Head from 'next/head';
import Intro from './intro';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Nihar</title>
        <link rel="icon" href="/portfolio_icon.png" />
      </Head>
      <section>
        <Intro />
      </section>
    </>
  )
}