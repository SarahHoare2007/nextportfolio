import Link from "next/link";
import Image from "next/image";
import style from "./navbar.module.css";
import Logo from '../../assets/images/logo.png';


const Navbar = () => {

    return (
        <div className={style.background}>
            <nav>
                <div className={style.shape}></div>
                <Link href="/" className={style.logo}>
                    {/* FIX LOGO SIZE.USE PHOTOSHOP TO CHANGE SIZE AND SUBMIT IMAGE FOR MEDIA SIZES */}
                    <Image src={Logo} width={100} height={100} alt="logo" />
                </Link>
                <ul className={style.nav}>
                    <li>
                        <Link href="/about">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume">
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact Me
                        </Link>
                    </li>
                </ul>

            </nav>
        </div>
    );
}

export default Navbar;