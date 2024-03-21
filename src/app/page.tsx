import Image from "next/image";
import styles from "./page.module.css";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import coffee from '../assets/images/coffee.png';
import eye from '../assets/images/eye.jpg';
import monogram from '../assets/images/monogram.png';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      {/*<header className={styles.header}>
        <a href="index.html"><img src="logo.svg" alt="logo" width="100" /></a>
        <ul className={styles.search} id={styles.nav}>
          <li><a href="/aboutme">About Me</a></li>
          <li><a href="/resume">resume</a></li>
          <li><a href="/blog">blog</a></li>
          <li><a href="/projects">projects</a></li>
          <li><a href="/contact">contact me</a></li>
        </ul>
  </header>*/}

      <div className={styles.wrapper}>
        <div className={styles.color}>
          <h2 className={styles.worktitle}>Graphic designer <br /> &amp; Artist</h2>
          <div className={styles.look}>View some of my projects below!</div> <div>
            {/*<Image src={'ArrowDownwardIcon'} width={10} height={10} alt="arrow" />*/}</div>
        </div>
        <div className={styles.name}>
          <h1>Sarah <br />Hoare <br />Portfolio</h1>
        </div>
      </div>

      <div className={styles.griditem}>
        <a href="./Projects.html#graphic-illustrations">
          <div className={styles.square}><Image
            src={monogram}
            width={350}
            height={250}
            alt="monogram illustration"
          /></div>
        </a>
        <p><a href="./Projects.html#graphic-illustrations">Graphic Illustrations</a></p>
      </div>



      <div className={styles.main}>

        <div className={styles.griditem}>
          <div className={styles.square}> <Image
            src={eye}
            width={350}
            height={250}
            alt="eye painting"
          />
          </div>
          <p><a href="./Projects.html#fine-arts">Fine Arts</a> </p>
        </div>

        <div className={styles.griditem}>
          <a href="./Projects.html#graphic-design">
            <div className={styles.square}>
              <Image
                src={coffee}
                width={350}
                height={250}
                alt="coffee logo"
              /></div>
          </a>
        </div>
        <p><a href="./Projects.html#graphic-design">Graphic Design Work</a></p>


        <div className={styles.griditem}>
          <a href="./Projects.html#graphic-design">
            <div className={styles.square}>
              <Image
                src={coffee}
                width={350}
                height={250}
                alt="coffee logo"
              /></div>
          </a>
        </div>
        <p><a href="./Projects.html#graphic-design">Graphic Design Work</a></p>
      </div>


      <Footer />
      {/*<footer className={styles.footer}>
        <ul className={styles.footlinks}>
          <li className={styles.footli}><a href="index.html">Home</a></li>
          <li><a href="Resume.html">Resume</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="Projects.html">Projects</a></li>
          <li><a href="contact.html">Contact Me</a></li>
          <li><a href="AboutMe.html">About Me</a></li>
        </ul>
        <ul className={styles.footsocials}>
          <li><a href="https://www.instagram.com/sarah_shoare/" target="_blank">Instagram</a>
          </li>
          <li><a href="https://www.linkedin.com/in/sarah-h-studios/">LinkdIn</a></li>
          <li><a href="https://www.facebook.com/profile.php?id=61556567321748">Facebook</a></li>
          <li><a href="mailto:sarah.sh.studios@gmail.com">Email</a></li>
        </ul>
      </footer>*/}
    </main >
  );
}
