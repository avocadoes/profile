import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '../../styles/footer.module.css';

export default function Footer() {
    // 'inline-flex w-full border-t-1 border-solid border-gray-300 py-7 justify-center mt-2'
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <a href="mailto:mg_zhu@outlook.com"><EmailIcon /></a> 
                <div className={styles.spacing}>|</div>
                <a href="https://www.linkedin.com/in/mg-zhu/"><LinkedInIcon /></a> 
                <div className={styles.spacing}>|</div>
                <a href="https://github.com/avocadoes"><GitHubIcon /></a>
            </div>
            <div className={styles.label}>Maggie Zhu &copy; 2022</div>
        </footer>
    )
}