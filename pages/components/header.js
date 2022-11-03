import { useState, useEffect } from 'react'
import Link from 'next/link'
import DashboardIcon from '@mui/icons-material/Dashboard'
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router'
import styles from '../../styles/header.module.scss'

export default function Header() {
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(!show)
    }

    useEffect(() => {console.log(show)}, [show])

    let about = styles.tab
    let work = styles.tab
    let contact = styles.tab

    const route = useRouter().pathname

    if (route === "/about") {
        about += ' ' + styles.current
    } else if (route === "/work") {
        work += ' ' + styles.current
    } else if (route === "/contact") {
        contact += ' ' + styles.current
    }

    const aboutTab = (
        <Link href="/about">
            <a className={about}>ABOUT</a>
        </Link>
    )
    const workTab = (
        <Link href="/work">
            <a className={work}>GALLERY</a>
        </Link>
    )
    const contactTab = (
        <Link href="/contact">
            <a className={contact}>CONTACT</a>
        </Link>
    )

    return (
        <div className={styles.container}>
            <Link href="/">
                <a className={styles.title}>
                    <DashboardIcon />&nbsp; MAGGIE ZHU
                </a>
            </Link>
            <button className={styles.menu} onClick={handleClick}>
                <MenuIcon />
            </button>
            <span className={styles.tabs}>
                {aboutTab}
                {workTab}
                {contactTab}
            </span>
            {show && ( 
            <span className={styles.mobile}>
                {aboutTab}
                {workTab}
                {contactTab}
            </span>
            )}
            
        </div>
    )
}