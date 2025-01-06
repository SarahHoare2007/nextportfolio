import Link from "next/link";
import Image from "next/image";
import style from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <ul className={style.footlinks}>
                <li><Link href="/">Home</Link></li>
                <li> <Link href="/resume">
                            Resume
                        </Link></li>
                <li><Link href="/blog">
                            Blog
                        </Link></li>
                <li> <Link href="/projects">
                            Projects
                        </Link></li>
                <li> <Link href="/contact">
                            Contact Me
                        </Link></li>
                <li><Link href="/about">
                            About Me
                        </Link></li>
            </ul>
            <ul className={style.footsocials}>
                <li><a href="https://www.instagram.com/sarah_shoare/" target="_blank">Instagram</a>
                </li>
                <li><a href="https://www.linkedin.com/in/sarah-h-studios/" target="_blank">LinkedIn</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=61556567321748" target="_blank">Facebook</a></li>
                <li><a href="mailto:sarah.sh.studios@gmail.com">Email</a></li>
            </ul>
            <div className={style.shape}></div>
        </footer>

    )
}



export default Footer;