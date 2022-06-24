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
                <div className='display left white'>
                    <ul className='textbox'>                       
                        <li>Honours Bachelor of Science specializing in Computer Science</li>
                        <li>University of Toronto</li>
                        <li>September 2017 to June 2022</li>
                    </ul> 
                </div>

                <div className='display left space-top'>
                    <SettingsIcon className='large' />&nbsp;&nbsp;
                    <div className='subtitle'>EXPERIENCED TOOLS</div>
                </div>

                <div className='display white'>               
                    <ul className='textbox'>
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
                    </ul>
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
                    <span>Main responsibilities:</span>
                    <ul className='textbox'>
                        <li>
                            Implementation, testing, and maintenance of an existing Vue application, RAMP4
                        </li>
                        <li>
                            Planning, designing, and implementation of a new Blazor application, TABS
                        </li>
                        <li>
                            Contribute to daily scrum and weekly team meetings
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