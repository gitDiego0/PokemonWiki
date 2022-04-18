import Head from 'next/head'
import Header from './Header/Header'

import styles from '../styles/Home.module.css'
import Footer from './Footer/Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
