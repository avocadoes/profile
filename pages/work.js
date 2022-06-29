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
                        <ul className='list'>
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
                        </ul>
                        <div className='display left pad-top'>
                            Main tools used:
                        </div>
                        <ul className='list'>
                            <li>
                                Typescript, HTML, SCSS, Vue.js, Vuex, Tailwind CSS, Chrome DevTools, Git, GitHub, Slack, MS Teams, Zoom
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
                </Page>
            </main>
            <Footer></Footer>
        </div>
    )
}