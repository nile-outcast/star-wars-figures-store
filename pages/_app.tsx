import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header, PageLayout } from 'src/components'
import { theme } from 'src/theme'
import { ThemeProvider } from 'styled-components'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Star Wars Figures</title>
    </Head>
    <PageLayout>
      <Header />
      <Component {...pageProps} />
    </PageLayout>
  </ThemeProvider>
)

export default MyApp
