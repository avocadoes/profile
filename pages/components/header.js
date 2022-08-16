import Link from 'next/link'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useRouter } from 'next/router';
import styles from '../../styles/header.module.css'

export default function Header() {
    let about = styles.tab
    let work = styles.tab
    let contact = styles.tab


/*    let about = <a className='inline-flex mx-4 my-4 items-center'>ABOUT</a>
    let work = <a className='inline-flex mx-4 my-4 items-center'>WORK</a>
    let contact = <a className='inline-flex mx-4 my-4 items-center'>CONTACT</a>
*/
    const route = useRouter().pathname

    if (route == "/about") {
        //about = <a className='inline-flex mx-4 my-4 items-center text-olive'>ABOUT</a>
        about += ' ' + styles.current
    } else if (route == "/work") {
        //work = <a className='inline-flex mx-4 my-4 items-center text-olive'>WORK</a>
        work += ' ' + styles.current
    } else if (route == "/contact") {
        //contact = <a className='inline-flex mx-4 my-4 items-center text-olive'>CONTACT</a>
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
                    <a className={work}>PROJECTS</a>
                </Link>
                <Link href="/contact">
                    <a className={contact}>CONTACT</a>
                </Link>
            </span>
            
        </div>
    )
}