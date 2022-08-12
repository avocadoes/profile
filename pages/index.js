import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Header from './components/header'
import Footer from './components/footer'
import pic from '../public/cropped.png'
import styles from '../styles/home.module.css'

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
        <div className={styles.container}>
          <Image height={450} width={450} src={pic} alt="profile picture" />
          <div className={styles.text}>
            <span className={styles.heading}>Hello</span>
            <div className={styles.textbox}>
              Welcome to my online portfolio.
            </div>
            <Link href='/about'>
              <a className='button'><ArrowForwardIosIcon />&nbsp; About Me &nbsp;<ArrowForwardIosIcon /></a>
            </Link>
          </div>
        </div>   
      </main>
      <Footer></Footer>
    </div>
  )
}
