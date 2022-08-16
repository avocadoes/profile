import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import DevicesIcon from '@mui/icons-material/Devices';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import OpenInNewOffIcon from '@mui/icons-material/OpenInNewOff';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Header from './components/header'
import Footer from './components/footer'
import styles from '../styles/work.module.css'
import project1 from '../public/map.png'
import project2 from '../public/dashboard.png'
import project3 from '../public/profile.png'
import project4 from '../public/noteboard.png'

export default function Work() {
    // TODO: add details dropdown for each project
    return (
        <div>
            <Head>
                <title>Projects</title>
            </Head>

            <main>
                <Header></Header>

                <div className={styles.container}>
                    <div className={styles.title}>WORK PROJECTS</div>
                    <div className={styles.text}>
                        <div className={styles.subtitle}>
                            <DevicesIcon className={styles.icon} />&nbsp; RAMP4
                        </div>
                        <div className={styles.label}>ENVIRONMENT AND CLIMATE CHANGE CANADA</div>
                        <div className={styles.textbox}>08/2020 - 08/2021</div>
                        <div className={styles.textbox}>
                            A Vue.js web mapping application that I worked on in a an agile team environment during my work term at ECCC. 
                        </div>
                        <div className={styles.textbox}>Tools and Technologies:</div>
                        <div className={styles.textbox}>
                            TypeScript, Vue,js, Vuex, HTML, SCSS, Tailwind CSS, AG Grid, Node.js, JSON, Markdown, shell scripts, 
                            Chrome DevTools, Git, GitHub, MS Teams, Slack
                        </div>
                        <a className={'button ' + styles.link} href='https://github.com/ramp4-pcar4/ramp4-pcar4'>
                           public repository &nbsp; <OpenInNewIcon />
                        </a>
                    </div>
                    <div className={styles.image + ' ' + styles.two}>
                        <Image height={350} width={400} src={project1} alt="work project 1" />
                    </div>
                    <div className={styles.image}>
                        <Image height={350} width={400} src={project2} alt="work project 2" />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.subtitle}>
                            <DevicesIcon className={styles.icon} />&nbsp; TABS
                        </div>
                        <div className={styles.label}>ENVIRONMENT AND CLIMATE CHANGE CANADA</div>
                        <div className={styles.textbox}>06/2021 - 08/2021</div>
                        <div className={styles.textbox}>
                            A Blazor project management web application that I worked on in the project{"'"}s front-end team during 
                            my work term at ECCC.
                        </div>
                        <div className={styles.textbox}>Tools and Technologies:</div>
                        <div className={styles.textbox}>
                            Figma, C#, Razor Pages, Blazor, MudBlazor, Git, Azure DevOps, Zoom, MS OneNote, MS Teams
                        </div>
                        <div className={styles.disable + ' button ' + styles.link}>
                            private repository &nbsp; <OpenInNewOffIcon />
                        </div>
                    </div>
                    <div className={styles.title}>PERSONAL PROJECTS</div>
                    <div className={styles.text}>
                        <div className={styles.subtitle}>
                            <DevicesIcon className={styles.icon} />&nbsp; Online Portfolio
                        </div>
                        <div className={styles.textbox}>05/2022 - present</div>
                        <div className={styles.textbox}>
                            A Next.js portfolio application I developed for displaying my qualifications on a web page. 
                        </div>
                        <div className={styles.textbox}>Tools and Technologies:</div>
                        <div className={styles.textbox}>
                            JavaScript, CSS, React, Next.js, EmailJS, Vercel, Chrome DevTools, Figma, Material UI
                        </div>
                        <div className={styles.link}>
                            <a className='button' href='https://www.figma.com/proto/0YLIwwourJrd0J31eOH5BY/Profile?node-id=304%3A80&starting-point-node-id=304%3A80&scaling=scale-down'>
                                Figma prototype &nbsp; <OpenInNewIcon />
                            </a>
                            <a className='button' href='https://github.com/avocadoes/profile'>
                                public repository &nbsp; <OpenInNewIcon />
                            </a>
                        </div>
                    </div>
                    <div className={styles.image + ' ' + styles.seven}>
                        <Image height={350} width={400} src={project3} alt="personal project 1" />
                    </div>
                    <div className={styles.image}>
                        <Image height={350} width={400} src={project4} alt="personal project 2" />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.subtitle}>
                            <DevicesIcon className={styles.icon} />&nbsp; NoteBoard
                        </div>
                        <div className={styles.textbox}>07/2022 - present</div>
                        <div className={styles.textbox}>
                            A React.js notetaking application I developed to improve my experience with the MERN tech stack. 
                        </div>
                        <div className={styles.textbox}>Tools and Technologies:</div>
                        <div className={styles.textbox}>
                            JavaScript, CSS, React, Redux, Node.js, Express.js, MongoDB, Mongoose, JSON Web Tokens, Postman, Heroku
                        </div>
                        <div className={styles.link}>
                            <a className='button' href='https://mynoteboard.herokuapp.com/'>
                                NoteBoard app &nbsp; <OpenInNewIcon />
                            </a>
                            <a className='button' href='https://github.com/avocadoes/noteboard/'>
                                public repository &nbsp; <OpenInNewIcon />
                            </a>
                        </div>
                    </div>
                    
                    <Link href='/contact'>
                            <a className={'button ' + styles.button}><ArrowForwardIosIcon />&nbsp; Contact Information &nbsp;<ArrowForwardIosIcon /></a>
                    </Link>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}