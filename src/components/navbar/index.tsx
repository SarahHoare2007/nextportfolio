"use client";
import Link from "next/link";
import Image from "next/image";
import style from "./navbar.module.css";
import Logo from '../../assets/images/logo.png';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


const Navbar = () => {
 
    
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={style.background}>
            <nav>
                <div className={style.shape}></div>
                <Link href="/" className={style.logo}>
                    <Image src={Logo} width={100} height={100} alt="logo" />
                </Link>
                <div className={style.hamburger}>
                <IconButton  onClick={toggleMenu} 
                aria-label="toggle menu" sx={{ color: 'black' }}>

                {isOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
      </div>
                <ul className={`${style.nav} ${isOpen ? style.active : ''}`}>
                    <li>
                        <Link href="/about"> About Me </Link>
                    </li>
                    <li>
                        <Link href="/resume"> Resume </Link>
                    </li>
                    <li>
                        <Link href="/blog"> Blog </Link>
                    </li>
                    <li>
                        <Link href="/projects"> Projects </Link>
                    </li>
                    <li>
                        <Link href="/contact"> Contact Me </Link>
                    </li>
                </ul>

            </nav>
        </div>
    );
}

export default Navbar;
