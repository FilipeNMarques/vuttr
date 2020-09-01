import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from '../styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>VUTTR</title>
        <link rel="shortcut icon" href="#" />
        <meta name="description" content="Very Useful Tools to Remember" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
