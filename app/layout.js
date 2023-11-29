import './globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ScrollTopToButton from '../components/ScrollToTopButton'
import Provider from './providers'
import { Inter } from 'next/font/google'
import './styles/slick/slick.min.css'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'You-i Lab |',
  description: 'Generated by You-i Lab',

}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* link manifest.json */}
        <meta httpEquiv="Content-Security-Policy" content={createCSP()} />

        <link rel="icon" type="image/svg+xml" href="/youilab_logo.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://www.gstatic.com" />
        <link rel="preconnect" href="https://www.google.com" />
        {/* <link rel="stylesheet" type="text/css" charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> */}
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"></Script>
 



      </head>

      <body className={inter.className}>

        <Provider>
          <NavBar />
          {children}
          <ScrollTopToButton />
          <Footer />
        </Provider>
      </body>
    </html>
  )
}

function createCSP() {
  return `
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data:;
    connect-src 'self';
    font-src 'self' https: data:;
    object-src 'none';
    media-src 'self';
    frame-src 'self';
  `;
}
