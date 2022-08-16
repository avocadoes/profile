import Head from 'next/head'
import { useRef } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import styles from '../styles/contact.module.css'
import emailjs from '@emailjs/browser'

export default function Contact() {
    // todo: add toast notif to submit
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_tj7nd6a', 'template_om2wnuo', form.current, 'pJpfm-U7kRDKDN-7H')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }
    return (
        <div>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header></Header>                
                    <div className={styles.container}>
                        <div className={styles.title}>CONTACT ME:</div>
                        <form className={styles.form} ref={form} onSubmit={sendEmail}>
                            <input type='text' placeholder='Name' name='user_name' />
                            <input type='email' placeholder='Email' name='user_email' />
                            <textarea name='message' rows='6' placeholder='Message' />
                            <button type='submit' className='button'>Send Message</button>

                        </form>  
                        <div className={styles.socials}>
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
                            
                    </div>         
            </main>

            <Footer></Footer>
        </div>
    )
}