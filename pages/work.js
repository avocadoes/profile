import Head from 'next/head'
import Link from 'next/link'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DevicesIcon from '@mui/icons-material/Devices';
import Header from './components/header'
import Footer from './components/footer'
import Page from './components/page'

export default function Work() {
    // TODO: add details dropdown for each project, add images
    return (
        <div>
            <Head>
                <title>Projects</title>
            </Head>

            <main>
                <Header></Header>
                <Page>
                    <div className='display left '>
                        <DevicesIcon className='large' />&nbsp;&nbsp;
                        <span className='subtitle'>WORK PROJECT: RAMP4</span>                    
                    </div>

                    <div className='white pad'>
                        <div className='display left'>
                            Main responsibilities:
                        </div>
                        <ul>
                            <li>
                                Contributing to existing project in development in a remote, agile team environment.
                            </li>
                            <li>
                                Planning/evaluating current goals with team members during reccuring sprint meetings.
                            </li>
                            <li>
                                Identifying and fixing existing bugs in project.
                            </li>
                            <li>
                                Creating new features/improving existing features.
                            </li>
                            <li>
                                Improving existing documentation of project.
                            </li>
                            <li>
                                Testing/evaluating the work of other team members.
                            </li>
                            <li>
                                Participate in daily scrum and weekly team meetings.
                            </li>
                        </ul>
                        <div className='display left'>
                            Main tools used:
                        </div>
                        <ul>
                            <li>
                                Typescript, HTML, SCSS, Vue.js, Vuex, Tailwind CSS, AG Grid, Chrome DevTools, Git, GitHub, Slack, MS Teams, Zoom
                            </li>
                        </ul>
                        <a className='display right' href='https://github.com/ramp4-pcar4/ramp4-pcar4'>
                            <ArrowRightAltIcon />public repository<ArrowRightAltIcon />
                        </a>
                    </div>

                    <div className='display left space-top'>
                        <DevicesIcon className='large' />&nbsp;&nbsp;
                        <span className='subtitle'>WORK PROJECT: TABS</span>                     
                    </div>
                    <div className='white pad'>
                        <div className='display left'>
                            Main responsibilities: 
                        </div>
                        <ul>
                            <li>
                                Evaluating goals, audience, scope, purpose, and timeline of new project with clients and team members.
                            </li>
                            <li>
                                Defining content, functional requirements, and toolchain.
                            </li>
                            <li>
                                Designing low-fidelity and high-fidelity prototype in Figma with user feedback.
                            </li>
                            <li>
                                Implementing design with previously defined tools.
                            </li>
                            <li>
                                Regularly meeting with team members and clients for project feedback.
                            </li>
                            <li>
                                Thoroughly document project processes in shared MS OneNote.
                            </li>
                        </ul>
                        <div className='display left'>
                            Main tools used:
                        </div>
                        <ul>
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
                        <ul>
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
                                Implementing design using previously defined tools.
                            </li>
                            <li>
                                Testing implementation using Chrome DevTools.
                            </li>
                            <li>
                                Deploying project using GitHub Pages.
                            </li>
                            <li>
                                Performing maintenance checks after website is deployed.
                            </li>
                        </ul>
                        <div className='display left'>
                            Tools used:
                        </div>
                        <ul>
                            <li>
                                JavaScript, CSS, JSX, React, Next.js, Figma, GitHub Pages, Chrome DevTools, Material UI, MS OneNote
                            </li>
                        </ul>
                        <a className='display right' href=''>
                            <ArrowRightAltIcon />public repository<ArrowRightAltIcon />
                        </a>
                    </div>

                    <div className='display left space-top'>
                        <DevicesIcon className='large' />&nbsp;&nbsp;
                        <span className='subtitle'>STUDENT WORK SAMPLES</span>                     
                    </div>
                    <div className='white pad pad-1'>
                        <div className='display left'>
                            HTTP SERVER
                        </div>
                        <ul>
                            <li>
                                Key words: thorough documentation, unit testing, sockets, group project
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
                        <ul>
                            <li>
                                Key words: high fidelity prototype, usability testing, group project
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
                </Page>
            </main>
            <Footer></Footer>
        </div>
    )
}