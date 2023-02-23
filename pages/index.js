import Head from 'next/head'
import Image from 'next/image'
import Base from '../components/base'
import Navbar from '../components/navbar'
import Home from '../components/main'


export default function Index() {
  return (
    <>
      <Head>
        <title>SKLL</title>
        <meta name="Description" content="Skulls Klubs LimitLess!" />
        <link rel="icon" href="/Logoicon.png" />
      </Head>
      <div className='top-0 sticky z-10 '>
        <Navbar/>
      </div>
      <Home/>
    </>
  )
}
