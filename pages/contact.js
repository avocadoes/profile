import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header></Header>
                    <div className='subtitle center'>CONTACT ME</div>                 
                <div className='page'>
                    <div className='small-fill'>
                    <div className='small-box left'>
                        <a className='icon' href="mailto:mg_zhu@outlook.com">
                            <EmailIcon />
                            &nbsp;&nbsp;EMAIL
                        </a> 
                        <a className='icon' href="https://www.linkedin.com/in/mg-zhu/">
                            <LinkedInIcon />
                            &nbsp;&nbsp;LINKEDIN
                        </a> 
                        <a className='icon' href="https://github.com/avocadoes">
                            <GitHubIcon />
                            &nbsp;&nbsp;GITHUB
                        </a>
                    </div>
                    </div>
                </div>                  
            </main>

            <Footer></Footer>
        </div>
    )
}