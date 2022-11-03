import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/header'
import Footer from './components/footer'
import pic from '../public/cropped.png'
import toggle from '../public/toggledark.png'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="portfolio" />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <div className={styles.container}>
          <div className={styles.frame}>
            <Image className={styles.image} height={500} width={500} src={pic} priority={true} alt="profile picture" />
          </div>
          <div className={styles.text}>
            <span className={styles.heading}>Hello</span>
            <div className={styles.textbox}>
              Welcome to my online portfolio. I specialize in web design and development.
            </div>
            {/* 
              <a>
                <Image src={toggle} height={25} width={50} priority={true} alt="profile picture" />
              </a>
            */}
          </div>
        </div>
        <div className={styles.links}>
          <Link href='/about'>
            <a className={styles.button}>
              <div className={styles.title}>
                About me
              </div>
              <div className={styles.desc}>
              View my education, work history, 
              past projects, and volunteer history.
            </div>
            </a>
          </Link>
          <Link href='/work'>
          <a className={styles.button}>
              <div className={styles.title}>
                Gallery
              </div>
              <div className={styles.desc}>
              View a visual summary of my recent projects.
            </div>
            </a>
          </Link>
          <Link href='/contact'>
            <a className={styles.button}>
              <div className={styles.title}>
                Contact me
              </div>
              <div className={styles.desc}>
              Contact me about career opportunities.
            </div>
            </a>
          </Link>
        </div> 
      </main>
      <Footer />
    </div>
  )
}
