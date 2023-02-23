import Head from 'next/head'
import Image from 'next/image'
import Base from '../components/base'
import Navbar from '../components/navbar'


export default function Home() {
  return (
    <>
      <Head>
        <title>SKLL</title>
        <meta name="Description" content="Skulls Klubs LimitLess!" />
        <link rel="icon" href="/Logoicon.png" />
      </Head>
      <Navbar/>
    </>
  )
}
