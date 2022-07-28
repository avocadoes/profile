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

export default function Work() {
    // TODO: add details dropdown for each project, add images
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
                        <div className={styles.textbox}>A Vue.js application.</div>
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
                        <div>ENVIRONMENT AND CLIMATE CHANGE CANADA</div>
                        <div className={styles.textbox}>06/2021 - 08/2021</div>
                        <div className={styles.textbox}>A Blazor application.</div>
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
                        <div className={styles.textbox}>A React.js application.</div>
                        <div className={styles.link}>
                            <a className='button' href='https://www.figma.com/proto/0YLIwwourJrd0J31eOH5BY/Profile?node-id=304%3A80&starting-point-node-id=304%3A80&scaling=scale-down'>
                                figma prototype &nbsp; <OpenInNewIcon />
                            </a>
                            <a className='button' href='https://github.com/avocadoes/profile'>
                                public repository &nbsp; <OpenInNewIcon />
                            </a>
                        </div>
                    </div>
                    <div className={styles.image + ' ' + styles.seven}>
                        <Image height={350} width={400} src={project3} alt="personal project 1" />
                    </div>
                    
                    <Link href='/contact'>
                            <a className={'button ' + styles.button}><ArrowForwardIosIcon />&nbsp; Contact Information &nbsp;<ArrowForwardIosIcon /></a>
                    </Link>
                </div>
{/*
                <div className='container'>
                    <div className='title'>WORK PROJECTS</div>
                    <div className='subtitle'>
                        <DevicesIcon className='icon' />&nbsp; RAMP4
                    </div>
                    <div className='label'>08/2020-08/2021</div>
                    <div className='text'>
                        main responsibilities and tools:
                    </div>
                    <div className='subtitle'>
                        <DevicesIcon className='icon' />&nbsp; TABS
                    </div>
                    <div className='label'>06/2021-08/2021</div>
                    <div className='text'>
                        main responsibilities and tools:
                    </div>
                </div>


                <div className='flex justify-between items-start py-7'>
                    <div className='block text-left'>
                        <div className='flex text-left'>
                            <DevicesIcon className='h-8 w-8' />&nbsp;&nbsp;
                            <span className='text-xl font-bold'>RAMP4</span>
                        </div>
                        <div>Environment and Climate Change Canada</div>
                                          
                    </div>
                
                        
                    <div className='w-1/2'>
                        <div className='font-bold'>Main responsibilities:</div>
                        <li>
                            Planning/evaluating current goals with team members during reccuring sprint meetings.
                        </li>
                        <li>
                            Identifying and fixing existing bugs in the project.
                        </li>
                        <li>
                            Creating new features and improving existing features.
                        </li>
                        <li>
                            Improving existing documentation of the project.
                        </li>
                        <li>
                            Testing and evaluating the work of other team members.
                        </li>
                        <li>
                            Contribute to daily scrum and weekly team meetings.
                        </li>
                        <div className='font-bold'>Main tools used:</div>
                        <li>
                            Typescript, HTML, SCSS, Vue.js, Vuex, Tailwind CSS, Chrome DevTools, Git, GitHub, Slack, MS Teams, Zoom
                        </li>
                        <a href='https://github.com/ramp4-pcar4/ramp4-pcar4'>
                            <ArrowRightAltIcon />public repository<ArrowRightAltIcon />
                        </a>  
                    </div>
                    </div>

                    <div className='display left space-top'>
                        <DevicesIcon className='large' />&nbsp;&nbsp;
                        <span className='subtitle'>WORK PROJECT: TABS</span>                     
                    </div>
                    <div className='white pad'>
                        <div className='display left'>
                            Main responsibilities: 
                        </div>
                        <ul className='list'>
                            <li>
                                Evaluating goals, audience, scope, purpose, and timeline of new project with team members.
                            </li>
                            <li>
                                Defining content, functional requirements, and toolchain.
                            </li>
                            <li>
                                Designing a low-fidelity and high-fidelity prototype in Figma with user feedback.
                            </li>
                            <li>
                                Implementing design with Blazor and other previously defined tools.
                            </li>
                            <li>
                                Regularly meeting with team members and clients for feedback and updates.
                            </li>
                            <li>
                                Thoroughly document project processes in a shared MS OneNote folder.
                            </li>
                        </ul>
                        <div className='display left pad-top'>
                            Main tools used:
                        </div>
                        <ul className='list'>
                            <li>
                                C#, Razor Pages, Blazor, Figma, Azure DevOps, MudBlazor, MS Teams, MS OneNote, Zoom
                            </li>
                        </ul>
                        <div className='display right'>
                            - private repository -
                        </div>
                    </div>

                    <div className='display left space-top'>
                        <DevicesIcon className='large' />&nbsp;&nbsp;
                        <span className='subtitle'>PERSONAL PROJECT: this profile</span>                     
                    </div>
                    <div className='white pad'>
                        <div className='display left'>
                            Responsibilities:
                        </div>
                        <ul className='list'>
                            <li>
                                Evaluating goals, audience, scope, purpose, and timeline.
                            </li>
                            <li>
                                Defining content, functional requirements, and toolchain.
                            </li>
                            <li>
                                Designing user interface {" (low-fidelity prototype) "} on Figma.
                            </li>
                            <li>
                                Implementing design using React and other previously defined tools.
                            </li>
                            <li>
                                Testing current implementation using Chrome DevTools.
                            </li>
                            <li>
                                Deploying project using GitHub Pages.
                            </li>
                            <li>
                                Performing maintenance checks after website is deployed.
                            </li>
                        </ul>
                        <div className='display left pad-top'>
                            Tools used:
                        </div>
                        <ul className='list'>
                            <li>
                                JavaScript, CSS, React, Next.js, Figma, GitHub Pages, Chrome DevTools, Material UI, MS OneNote
                            </li>
                        </ul>
                        <a className='display right' href='https://github.com/avocadoes/profile'>
                            <ArrowRightAltIcon />public repository<ArrowRightAltIcon />
                        </a>
                    </div>

                    <div className='display left space-top'>
                        <DevicesIcon className='large' />&nbsp;&nbsp;
                        <span className='subtitle'>STUDENT WORK SAMPLES</span>                     
                    </div>
                    <div className='white pad'>
                        <div className='display left'>
                            HTTP SERVER
                        </div>
                        <ul className='list'>
                            <li>
                                Key notes: thorough documentation, unit testing, sockets, group project
                            </li>
                            <li>
                                Main tools: JavaScript, Node.js, Mocha, GitHub
                            </li>
                            <a className='display right' href='https://github.com/avocadoes/http-server-1'>
                                <ArrowRightAltIcon />public repository<ArrowRightAltIcon />
                            </a>
                        </ul>
                        <div className='display left'>
                            MOBILE PROTOTYPE: AVODIARY
                        </div>
                        <ul className='list'>
                            <li>
                                Key notes: high fidelity prototype, usability testing, group project
                            </li>
                            <li>
                                Main tools: Figma, Zoom
                            </li>
                            <a className='display right' href='https://www.figma.com/proto/5sWGTP4qSryWSmnA6ujNcH/AvoDiary-Prototype?node-id=446%3A1798&scaling=scale-down&page-id=0%3A1&starting-point-node-id=446%3A1798&show-proto-sidebar=1'>
                                <ArrowRightAltIcon />prototype<ArrowRightAltIcon />
                            </a>
                        </ul>
                    </div>
                    <div className='space-top'>
                        <Link href='/contact'>
                            <a className='display'><ArrowForwardIosIcon />Contact Information<ArrowForwardIosIcon /></a>
                        </Link>
                    </div>
    */}
            </main>
            <Footer></Footer>
        </div>
    )
}