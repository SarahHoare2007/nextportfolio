import Link from "next/link";
import Image from "next/image";
import style from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <ul className={style.footlinks}>
                <li><a href="index.html">Home</a></li>
                <li><a href="Resume.html">Resume</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="Projects.html">Projects</a></li>
                <li><a href="contact.html">Contact Me</a></li>
                <li><a href="AboutMe.html">About Me</a></li>
            </ul>
            <ul className={style.footsocials}>
                <li><a href="https://www.instagram.com/sarah_shoare/" target="_blank">Instagram</a>
                </li>
                <li><a href="https://www.linkedin.com/in/sarah-h-studios/" target="_blank">LinkdIn</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=61556567321748" target="_blank">Facebook</a></li>
                <li><a href="mailto:sarah.sh.studios@gmail.com">Email</a></li>
            </ul>
            <div className={style.shape}></div>
        </footer>

    )
}



export default Footer;