import Head from 'next/head'
import Link from 'next/link'
import SchoolIcon from '@mui/icons-material/School'
import SettingsIcon from '@mui/icons-material/Settings'
import WorkIcon from '@mui/icons-material/Work'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Header from './components/header'
import Footer from './components/footer'
import Page from './components/page'
import styles from '../styles/about.module.css'

export default function About() {
    // TODO: add details dropdown to skills
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>

            <main>
                <Header></Header>
                <div className={styles.container}>
                    <div className={styles.title}>ABOUT ME</div>
                    <div className={styles.subtitle}>
                        <SchoolIcon className='icon' />&nbsp; EDUCATION
                    </div>
                    <div className={styles.date}>09/2017 - 06/2022</div>
                    <div className={styles.text}>
                        <div className={styles.label}>Univeristy of Toronto</div>                       
                        <div>Honours Bachelor of Science specializing in Computer Science</div>
                    </div>
                    <div className={styles.subtitle}>
                        <SettingsIcon className='icon' />&nbsp; SKILLS
                    </div>
                    <div className={styles.label}>
                        <div>Languages</div>
                        <div>Front-end</div>
                        <div>Back-end</div>
                        <div>Testing</div>
                        <div>Collaboration</div>
                        <div>Concepts</div>
                    </div>
                    <div className={styles.text + ' ' + styles.two}>
                        <div>HTML, CSS, SCSS, JavaScript, TypeScript, C#, C, Python, SQL</div>
                        <div>React, Next.js, Redux, Vue.js, Vuex, Blazor, MudBlazor, Tailwind CSS</div>
                        <div>Node.js, Express.js, MongoDB, Mongoose, Heroku</div>
                        <div>Mocha, Postman, GDB, Redux DevTools</div>
                        <div>Git, GitHub, Azure DevOps, Figma, MS Teams, Zoom, Slack</div>
                        <div>HTTP methods, CRUD operations, REST API, Agile SDLC</div>
                    </div>
                    <div className={styles.subtitle}>
                        <WorkIcon className={styles.icon} />&nbsp; WORK EXPERIENCE
                    </div>
                    <div className={styles.date}>08/2020 - 08/2021</div>
                    <div className={styles.text}>
                        <div className={styles.job}>Web Application Developer</div>
                        <div className={styles.company}>ENVIRONMENT AND CLIMATE CHANGE CANADA</div>
                        <div>
                            Over the course of my work term, I collaborated in a remote, agile team environment and contributed to all 
                            phases of the SDLC. I mainly worked on developing an existing web application, RAMP4, and planning/developing a new web application, TABS.
                        </div>
                    </div>
                    <Link href='/work'>
                        <a className={'button ' + styles.button}><ArrowForwardIosIcon />&nbsp; Personal and Work Projects &nbsp;<ArrowForwardIosIcon /></a>
                    </Link>
                </div>
{/*
                <Page>
                <div className='text-3xl font-bold py-7'>ABOUT ME</div>

                <div className='flex justify-between items-start py-7'>
                    <div className='flex text-left w-1/3'>
                        <SchoolIcon className='h-8 w-8' />&nbsp;&nbsp;
                        <span className='text-xl font-bold'>EDUCATION</span>                     
                    </div>
                    <div className='w-1/3'>
                        09/2017 - 06/2022
                    </div>
                    <div className='m-0'>
                        <div className='font-bold'>Univeristy of Toronto</div>                       
                        <div>Honours Bachelor of Science specializing in Computer Science</div>
                    </div> 
                </div>

                <div className='flex justify-between items-start py-7 border-t-1 border-solid border-olive'>
                    <div className='flex text-left w-1/3'>
                        <SettingsIcon className='h-8 w-8' />&nbsp;&nbsp;
                        <div className='text-xl font-bold'>SKILLS</div>
                    </div>
                    <div className='inline-grid grid-rows-4 grid-flow-col gap-2'>
                        <div>LANGUAGES</div>
                        <div>FRAMEWORKS{' & '}LIBRARIES</div>
                        <div>TESTING</div>
                        <div>COLLABORATION</div>
                        <div>HTML, CSS, SCSS, JavaScript, TypeScript, C#, C, Python, SQL</div>
                        <div>React, Next.js, Vue.js, Vuex, Blazor, MudBlazor, Tailwind CSS</div>
                        <div>Mocha, Postman, GDB, Chrome DevTools</div>
                        <div>Git, GitHub, Azure DevOps, Figma, MS Teams, Zoom, Slack</div>
                    </div>
                </div>
                
                <div className='flex justify-between items-start py-7 border-t-1 border-solid border-olive'>
                    <div className='flex text-left w-1/3'>
                        <WorkIcon className='h-8 w-8' />&nbsp;&nbsp;
                        <div className='text-xl font-bold'>WORK{'\n'}EXPERIENCE</div>                 
                    </div>

                    <div className='w-1/3'>08/2020 - 08/2021</div>
                    
                    <ul className='m-0'>
                        <div className='font-bold'>Web Application Developer</div>
                        <div>ENVIRONMENT AND CLIMATE CHANGE CANADA</div>
                        
                        <span className='display left'>Main responsibilities:</span>
                        <li>
                            Collaborating in a remote, agile team environment.
                        </li>
                        <li>
                            Contributing to all phases of the SDLC.
                        </li>
                        <li>
                            Improving/debugging existing features and documentation.
                        </li>
                        <li>
                            Implementing new features/functions.
                        </li>
                        <li>
                            Testing/evaluating the work of other team members.
                        </li>
                        <li>
                            Planning and evaluating current goals during reccuring sprint meetings.
                        </li>
                    </ul>
                </div>

                <div className='space-top'>
                    <Link href='/work'>
                        <a className='display'>
                            <ArrowForwardIosIcon />Personal and Work Projects<ArrowForwardIosIcon />
                        </a>
                    </Link>
                </div> 
           
                </Page>
*/} 
            </main>
            <Footer></Footer>
        </div>
    )
}