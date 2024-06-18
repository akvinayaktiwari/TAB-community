import SSRProvider from 'react-bootstrap/SSRProvider'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import ScrollTopButton from '../components/ScrollTopButton'
import '../scss/theme.scss'

const Finder = ({ Component, pageProps }) => {

  // Bind NProgress to Next Router events (Page loading animation)
  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())

  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TAB Community</title>
        <meta name='description' content='TAB Community' />
        <meta name='keywords' content='' />
        <meta name='author' content='Drsyeta Innovations' />
        <link rel='apple-touch-icon' sizes='180x180' href='https://tabcommunity.com/assets/img/logo_tab.svg' />
        <link rel='icon' type='image/png' sizes='32x32' href='https://tabcommunity.com/assets/img/logo_tab.svg' />
        <link rel='icon' type='image/png' sizes='16x16' href='https://tabcommunity.com/assets/img/logo_tab.svg' />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link rel='mask-icon' color='#5bbad5' href='/favicon/safari-pinned-tab.svg' />
        <meta name='msapplication-TileColor' content='#766df4' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      
      <Component {...pageProps} />
      
      <ScrollTopButton
        showOffset={600}
        duration={800}
        easing='easeInOutQuart'
        tooltip='Top'
      />
    </SSRProvider>
  )
}

export default Finder
