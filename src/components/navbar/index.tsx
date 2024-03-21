import Link from "next/link";
import Image from "next/image";
import style from "./navbar.module.css";
import Logo from '../../assets/images/logo.svg';


const Triangle = () => {
    return (
        <div className={style.triangle}> </div>
    )
}

const Navbar = () => {

    return (
        <nav>
            <ul className={style.nav}>
                <li>
                    <Link href="/">
                        <Image src={Logo} width={100} height={100} alt="logo" />
                    </Link>
                </li>
                <li>
                    <Link href="/about/about">
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
                    <Link href="/Projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="/contactme">
                        Contact Me
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;