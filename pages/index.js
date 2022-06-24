import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Header from './components/header'
import Footer from './components/footer';
import pic from '../public/cropped.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="profile" />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header></Header>
        <div className='space'>
        <div className='display center'>
          <Image src={pic} alt="profile picture" height={450} width={450} />
          &nbsp;&nbsp;
          <div className='text'>
            <span className='title'>Hello</span>
            <div className='space'>
              Welcome to my profile.
            </div>
            <Link href='/about'>
              <a className='display'><ArrowForwardIosIcon />About me<ArrowForwardIosIcon /></a>
            </Link>
          </div>
        </div>
        </div>    
      </main>

      <Footer></Footer>
    </div>
  )
}
