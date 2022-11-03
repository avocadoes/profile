import Link from 'next/link'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { useRouter } from 'next/router'
import styles from '../../styles/header.module.scss'

export default function Header() {
    let about = styles.tab
    let work = styles.tab
    let contact = styles.tab

    const route = useRouter().pathname

    if (route == "/about") {
        about += ' ' + styles.current
    } else if (route == "/work") {
        work += ' ' + styles.current
    } else if (route == "/contact") {
        contact += ' ' + styles.current
    }
    return (
        <div className={styles.container}>
            <Link href="/">
                <a className={styles.title}>
                    <DashboardIcon />&nbsp; MAGGIE ZHU
                </a>
            </Link>
            <span className={styles.tabs}>
                <Link href="/about">
                    <a className={about}>ABOUT</a>
                </Link>
                <Link href="/work">
                    <a className={work}>GALLERY</a>
                </Link>
                <Link href="/contact">
                    <a className={contact}>CONTACT</a>
                </Link>
            </span>
        </div>
    )
}