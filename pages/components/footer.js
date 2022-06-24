import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <footer className='footer'>
            <a href="mailto:mg_zhu@outlook.com"><EmailIcon /></a> 
            &nbsp;&nbsp;|&nbsp;&nbsp; 
            <a href="https://www.linkedin.com/in/mg-zhu/"><LinkedInIcon /></a> 
            &nbsp;&nbsp;|&nbsp;&nbsp; 
            <a href="https://github.com/avocadoes"><GitHubIcon /></a>
        </footer>
    )
}