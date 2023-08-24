import Head from 'next/head'
import '../styles/global.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (<>
    <Script strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />
    <Script strategy="afterInteractive" id="google-analytics"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
      `,
      }}
    />
    <Head>
      <link precedence="default" href="https://api.fontshare.com/v2/css?f[]=general-sans@300&f[]=plus-jakarta-sans@800,400,500,600,700,300,200&display=swap" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />
  </>)
}