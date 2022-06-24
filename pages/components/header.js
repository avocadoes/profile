import Link from 'next/link'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useRouter } from 'next/router';

export default function Header() {
    const route = useRouter().pathname
    let about = <a className='tab'>ABOUT</a>
    let work = <a className='tab'>WORK</a>
    let contact = <a className='tab'>CONTACT</a>

    if (route == "/about") {
        about = <a className='tab current'>ABOUT</a>
    } else if (route == "/work") {
        work = <a className='tab current'>WORK</a>
    } else if (route == "/contact") {
        contact = <a className='tab current'>CONTACT</a>
    }
    return (
        <div className='header'>
            <Link href="/">
                <a className='tab'>
                    <DashboardIcon />&nbsp; MAGGIE ZHU
                </a>
            </Link>
            <span className='tabs'>
                <Link href="/about">
                    {about}
                </Link>
                <Link href="/work">
                    {work}
                </Link>
                <Link href="/contact">
                    {contact}
                </Link>
            </span>
            
        </div>
    )
}