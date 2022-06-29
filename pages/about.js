import Head from 'next/head'
import Link from 'next/link'
import SchoolIcon from '@mui/icons-material/School'
import SettingsIcon from '@mui/icons-material/Settings'
import WorkIcon from '@mui/icons-material/Work'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Header from './components/header'
import Footer from './components/footer'
import Page from './components/page'

export default function About() {
    // TODO: group tools into subgroups, edit points to responsibilities
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>

            <main>
                <Header></Header>
                <Page>
                <div className='display left '>
                    <SchoolIcon className='large' />&nbsp;&nbsp;
                    <span className='subtitle'>EDUCATION</span>                     
                </div>
                <div className='white'>
                    <ul className='textbox pad-list'>                       
                        <li>Honours Bachelor of Science specializing in Computer Science</li>
                        <li>University of Toronto</li>
                        <li>September 2017 to June 2022</li>
                    </ul> 
                </div>

                <div className='display left space-top'>
                    <SettingsIcon className='large' />&nbsp;&nbsp;
                    <div className='subtitle'>EXPERIENCED TOOLS</div>
                </div>

                <div className='display white pad-top pad-bot left'>
                    <div className='block pad-lr bold'>
                        <div>LANGUAGES</div>
                        <div>FRAMEWORKS{' & '}LIBRARIES</div>
                        <div>TESTING</div>
                        <div>COLLABORATION</div>
                        <div></div>
                    </div>
                    <div className='block'>
                        <div>HTML, CSS, SCSS, JavaScript, TypeScript, C#, C, Python, SQL</div>
                        <div>React, Next.js, Vue.js, Vuex, Blazor, MudBlazor, Tailwind CSS</div>
                        <div>Mocha, Postman, GDB, Chrome DevTools</div>
                        <div>Git, GitHub, Azure DevOps, Figma, MS Teams, Zoom, Slack</div>
                    </div>               
                    { /*<ul className='textbox'>
                        <li>HTML</li>
                        <li>CSS</li>                                                
                        <li>JavaScript</li>                       
                        <li>C#</li>
                        <li>C</li>                        
                    </ul>
                    <ul className='textbox'>
                        <li>TypeScript</li>
                        <li>SCSS</li>
                        <li>JSX</li>
                        <li>Razor Pages</li>
                        <li>Python</li>
                    </ul>
                    <ul className='textbox'>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Vue.js</li>
                        <li>Node.js</li>                        
                        <li>Blazor</li>                       
                    </ul>
                    <ul className='textbox'>
                        <li>GitHub</li>
                        <li>Azure DevOps</li>                       
                        <li>Docker</li>
                        <li>Postman</li>
                        <li>Mocha</li>
                    </ul>
                    <ul className='textbox'>
                        <li>Figma</li>     
                        <li>Tailwind CSS</li>
                        <li>Material UI</li>
                        <li>MudBlazor</li>
                        <li>Chrome DevTools</li> 
                    </ul> */}
                </div>
                
                <div className='display left space-top'>
                    <WorkIcon className='large' />&nbsp;&nbsp;
                    <div className='subtitle'>WORK HISTORY</div>                 
                </div>

                <div className='white pad'>
                    <div className='display left'>
                        ENVIRONMENT AND CLIMATE CHANGE CANADA: Web Application Developer {"(Co-op)"}
                    </div>
                    <span className='right small'>August 2020 - August 2021</span>
                    <span className='display left'>Main responsibilities:</span>
                    <ul className='list'>
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
            </main>

            <Footer></Footer>
        </div>
    )
}