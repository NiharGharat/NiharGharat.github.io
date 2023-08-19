import Head from 'next/head'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <link href="https://api.fontshare.com/v2/css?f[]=general-sans@300&f[]=plus-jakarta-sans@800,400,500,600,700,300,200&display=swap" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />
  </>)
}
