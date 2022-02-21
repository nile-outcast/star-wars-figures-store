import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header } from 'src/header'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Star Wars Figures</title>
    </Head>
    <Header />
    <Component {...pageProps} />
  </>
)

export default MyApp
