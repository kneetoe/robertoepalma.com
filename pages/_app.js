import Layout from '../components/Layout'
import '../styles/globals.css'

import Script from 'next/script'

// <!-- Global site tag (gtag.js) - Google Analytics -->
{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-W70K2284QM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-W70K2284QM');
</script> */}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
      strategy='lazyOnload'
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>

      <Script
      strategy='lazyOnload'>
        {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`}
      </Script>
      <Layout>
      
        <Component {...pageProps} />
      </Layout>
  </>
  )
}

export default MyApp
