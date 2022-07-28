import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import Page from './components/page'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import styles from '../styles/contact.module.css'

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header></Header>                
                    <div className={styles.container}>
                        <div className={styles.title}>SOCIALS</div> 
                        <a className={styles.link} href="mailto:mg_zhu@outlook.com">
                            <EmailIcon fontSize="inherit" />
                            <div className={styles.label}>EMAIL</div>
                        </a> 
                        <a className={styles.link} href="https://www.linkedin.com/in/mg-zhu/">
                            <LinkedInIcon fontSize="inherit" />
                            <div className={styles.label}>LINKEDIN</div>
                        </a> 
                        <a className={styles.link} href="https://github.com/avocadoes">
                            <GitHubIcon fontSize="inherit" />
                            <div className={styles.label}>GITHUB</div>
                        </a>
                    </div>              
            </main>

            <Footer></Footer>
        </div>
    )
}