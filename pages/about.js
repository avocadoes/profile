import Head from 'next/head'
import Link from 'next/link'
import SchoolIcon from '@mui/icons-material/School'
import SettingsIcon from '@mui/icons-material/Settings'
import WorkIcon from '@mui/icons-material/Work'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PetsIcon from '@mui/icons-material/Pets'
import Header from './components/header'
import Footer from './components/footer'
import styles from '../styles/about.module.scss'

export default function About() {
    const skills = 
    [
        "Languages",
        "Front-end",
        "Back-end",
        "Deployment",
        "Testing",
        "Collaboration",
        "Concepts"
    ]
    const skillLabel = skills.map((skill, index) => <div key={index}>{skill}</div>)

    const descriptions = 
    [
        "HTML, CSS, SCSS, SASS, JavaScript, TypeScript, C#, C, Python, Java, SQL",
        "React, Redux, Next.js, Vue.js, Vuex, Blazor, MudBlazor, Tailwind CSS",
        "Node.js, Express.js, MongoDB, Mongoose",
        "GitHub Pages, Heroku, Vercel, Shell Scripting",
        "Mocha.js, Postman, GNU Debugger, Chrome and Redux DevTools",
        "Git, GitHub, Azure DevOps, Figma, MS Teams, Zoom, Slack",
        "HTTP Methods, REST APIs, Agile Methodologies, Git Workflows, SDLC, MVC"
    ];
    const skillDesc = descriptions.map((desc, index) => <div key={index}>{desc}</div>)

    const tasksRAMP4 =
    [
        "Created and updated the appearance and functionality of UI components following WCAG (Web Content Accessibility Guidelines).",
        "Created and deployed a static documentation site using VuePress and GitHub Pages.",
        "Created and updated features of existing APIs such as the LegendAPI and InstanceAPI.",
        "Tested and evaluated the pull requests of other contributors."
    ]
    const projectRAMP4 = tasksRAMP4.map((task, index) => <li key={index}>{task}</li>)

    const tasksTABS = 
    [
        "Evaluated the project goals, audience, scope, purpose, and timeline.",
        "Defined the app content, functional requirements, and tool stack.",
        "Designed the UI and created a high-fidelity prototype using Figma and feedback from clients.",
        "Implemented the design using Blazor."
    ]
    const projectTABS = tasksTABS.map((task, index) => <li key={index}>{task}</li>)

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
                        <div className={styles.label}>University of Toronto</div>                       
                        <div>Honours Bachelor of Science specializing in Computer Science</div>
                    </div>
                    <div className={styles.subtitle}>
                        <SettingsIcon className='icon' />&nbsp; SKILLS
                    </div>
                    <div className={styles.label}>
                        {skillLabel}
                    </div>
                    <div className={styles.text + ' ' + styles.two}>
                        {skillDesc}
                    </div>
                    <div className={styles.subtitle}>
                        <WorkIcon className={styles.icon} />&nbsp; <div>WORK <br /> EXPERIENCE</div>
                    </div>
                    <div className={styles.date}>08/2020 - 08/2021</div>
                    <div className={styles.text}>
                        <div className={styles.job}>Web Application Developer</div>
                        <div className={styles.company}>ENVIRONMENT AND CLIMATE CHANGE CANADA</div>
                        <div>
                            Over the course of my work term, I collaborated in a remote, agile team environment and contributed to all 
                            phases of the SDLC. I mainly worked on progressing an existing web application, RAMP4, and planning/developing a new web application, TABS.
                        </div>
                        <br />
                        <div className={styles.job}>Work Project: RAMP4</div>
                        <div className={styles.company}>ENVIRONMENT AND CLIMATE CHANGE CANADA</div>
                        <div>
                            A Vue.js web mapping application.
                        </div>
                        <ul className={styles.list}>{ projectRAMP4 }</ul>
                        <br />
                        <div className={styles.job}>Work Project: TABS</div>
                        <div className={styles.company}>ENVIRONMENT AND CLIMATE CHANGE CANADA</div>
                        <div>
                            A Blazor project management application.
                        </div>
                        <ul className={styles.list}>{ projectTABS }</ul>
                    </div>
                    <div className={styles.subtitle}>
                        <PetsIcon className={styles.icon} />&nbsp; <div>VOLUNTEER <br /> HISTORY</div>
                    </div>
                    <div className={styles.date}>09/2019 - present</div>
                    <div className={styles.text}>
                        <div className={styles.job}>Canine Enrichment Volunteer</div>
                        <div className={styles.company}>TORONTO HUMANE SOCIETY</div>
                    </div>
                    <Link href='/work'>
                        <a className={'button ' + styles.button}>Personal and Work Projects &nbsp;<ArrowForwardIosIcon /></a>
                    </Link>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}