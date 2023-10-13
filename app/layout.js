import './globals.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Provider from './providers'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'You-i Lab |',
  description: 'Generated by You-i Lab',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* link manifest.json */}

        <link rel="icon" type="image/svg+xml" href="/youilab_logo.svg" />
        <link rel="stylesheet" type="text/css" charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>

      <body className={inter.className}>

        <Provider>
          <NavBar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
