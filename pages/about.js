import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SchoolIcon from '@mui/icons-material/School'
import SettingsIcon from '@mui/icons-material/Settings'
import WorkIcon from '@mui/icons-material/Work'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PetsIcon from '@mui/icons-material/Pets'
import DevicesIcon from '@mui/icons-material/Devices'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import OpenInNewOffIcon from '@mui/icons-material/OpenInNewOff'
import Header from './components/header'
import Footer from './components/footer'
import pic from '../public/cropped.png'
import data from '../public/resume.json'
import styles from '../styles/about.module.scss'

export default function About() {
    const intro = data["Introduction"]
    const education = data["Education"]
    const skills = Object.keys(data.Skills)
    const skillDesc = Object.values(data.Skills)
    const workExp = data["Work Experience"]
    const projects = data["Personal Projects"]
    const volunteer = data["Volunteer History"]

    return (
        <div>
            <Head>
                <title>About</title>
            </Head>

            <main>
                <Header />
                <div className={styles.container}>
                    <div  className={styles.frame}>
                        <Image className={styles.image} height={200} width={200} src={pic} priority={true} alt="profile picture" />
                    </div>
                    <div className={styles.title}>ABOUT ME</div>
                    {/*<div className={styles.intro}>{intro}</div>*/}

                    <div className={styles.data}>
                        <div className={styles.subtitle}>
                            <SchoolIcon />&nbsp; EDUCATION
                        </div>
                        <div className={styles.date}>{education.date}</div>
                        <div>
                            <div className={styles.label}>{education.location}</div>                       
                            <div>{education.description}</div>
                        </div>
                        <div className={styles.subtitle}>
                            <SettingsIcon />&nbsp; SKILLS
                        </div>
                        <div className={styles.table}>
                            {skills.map((skill, index) => <div className={styles.label} key={index}>{skill}</div>)}
                            {skillDesc.map((skill, index) => <div key={index}>{skill.join(", ")}</div>)}
                        </div>
                        
                        <div className={styles.subtitle}>
                            <WorkIcon />&nbsp; <span>WORK EXPERIENCE</span>
                        </div>
                        <div className={styles.date}>{workExp.date}</div>
                        <div>
                            <div className={styles.subject}>{workExp.role}</div>
                            <div className={styles.company}>{workExp.location.toUpperCase()}</div>
                            <div>{workExp.description}</div>
                            <br />
                            <div className={styles.subject}>Work Project: {workExp.projects[0].name}</div>
                            <div className={styles.company}>{workExp.projects[0].location.toUpperCase()}</div>
                            <div>
                                {workExp.projects[0].description}
                            </div>
                            <ul className={styles.list}>{ workExp.projects[0].contributions.map((item, index) => <li key={index}>{item}</li>) }</ul>
                            <div>Tools and technologies used:</div>
                            <ul className={styles.list}>
                                <li>{workExp.projects[0].tools.join(', ')}</li>
                            </ul>
                            <div className={styles.links}>
                                <a className={'button ' + styles.link} href={workExp.projects[0].links.app}>
                                    <OpenInNewIcon /> &nbsp;
                                    Public Application
                                </a>
                                <a className={'button ' + styles.link} href={workExp.projects[0].links.repo}>
                                    <OpenInNewIcon /> &nbsp;
                                    Public Repository
                                </a>
                            </div>
                            <br />
                            <div className={styles.subject}>Work Project: {workExp.projects[1].name}</div>
                            <div className={styles.company}>{workExp.projects[1].location.toUpperCase()}</div>
                            <div>
                                {workExp.projects[1].description}
                            </div>
                            <ul className={styles.list}>
                                { workExp.projects[1].contributions.map((item, index) => <li key={index}>{item}</li>) }
                            </ul>
                            <div>Tools and technologies used:</div>
                            <ul className={styles.list}>
                                <li>{workExp.projects[1].tools.join(', ')}</li>
                            </ul>
                            <div className={styles.links}>
                                <a className={styles.disable + ' button ' + styles.link}>
                                    <OpenInNewOffIcon /> &nbsp;
                                    Private Application
                                </a>
                                <a className={styles.disable + ' button ' + styles.link}>
                                    <OpenInNewOffIcon /> &nbsp;
                                    Private Repository
                                </a>
                            </div>
                        </div>
                        <div className={styles.subtitle}>
                            <WorkIcon className={styles.icon} />&nbsp; <span>PERSONAL PROJECTS</span>
                        </div>
                        <div className={styles.table}>
                            {projects.map((project, index) => (
                                <div className={styles.date + ' ' + styles.nest} key={index}>{project.date}</div>
                            ))}
                            {projects.map((project, index) => (
                                <div key={index}>
                                    <div className={styles.subject}>{project.name}</div>
                                    <div>{project.description}</div>
                                    <ul className={styles.list}>
                                        { project.features.map((item, index) => <li key={index}>{item}</li>) }
                                    </ul>
                                    <div>Tools and technologies used:</div>
                                    <ul className={styles.list}>
                                        <li>{project.tools.join(', ')}</li>
                                    </ul>
                                    <div className={styles.links}>
                                        {(project.links.design && (
                                            <a className={'button ' + styles.link} href={project.links.design}>
                                                <OpenInNewIcon /> &nbsp;
                                                Design File
                                            </a>
                                        ))}
                                        {(project.links.desktop && (
                                            <a className={'button ' + styles.link} href={project.links.desktop}>
                                                <OpenInNewIcon /> &nbsp;
                                                Desktop Prototype</a>
                                        ))}
                                        {(project.links.mobile && (
                                            <a className={'button ' + styles.link} href={project.links.mobile}>
                                                <OpenInNewIcon /> &nbsp;
                                                Mobile Prototype</a>
                                        ))}
                                        {(project.links.app && (
                                            <a className={'button ' + styles.link} href={project.links.app}>
                                                <OpenInNewIcon /> &nbsp;
                                                Application
                                            </a>
                                        ))}
                                        {(project.links.repo && (
                                            <a className={'button ' + styles.link} href={project.links.repo}>
                                                <OpenInNewIcon /> &nbsp;
                                                Repository
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.subtitle}>
                            <PetsIcon className={styles.icon} />&nbsp; <span>VOLUNTEER HISTORY</span>
                        </div>
                        <div className={styles.date}>{volunteer.date}</div>
                        <div>
                            <div className={styles.subject}>{volunteer.role}</div>
                            <div className={styles.company}>{volunteer.location.toUpperCase()}</div>
                        </div>
                        <Link href='/work'>
                            <a className={'button ' + styles.button}>Gallery &nbsp;<ArrowForwardIosIcon /></a>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}