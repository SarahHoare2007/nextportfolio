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

      <div className={styles.wrapper}>
        <div className={styles.color}>
          <h2 className={styles.worktitle}>Graphic designer <br /> &amp; Artist</h2>
          <div className={styles.look}>View some of my projects below!</div> <div>
            <Image src={ArrowDownwardIcon}
              width={20}
              height={20}
              alt="arrow" />
          </div>
        </div>
        <div className={styles.name}>
          <h1>Sarah <br />Hoare <br />Portfolio</h1>
        </div>
      </div>


      <div className={styles.main}>

        <div className={styles.griditem}>
          <a href="./Projects.html#graphic-illustrations">
            <div className={styles.square}><Image
              src={monogram}
              width={350}
              height={250}
              alt="monogram illustration"
            /></div>
          </a>
          <a href="./Projects.html#graphic-illustrations" className={styles.section}>Graphic Illustrations</a>
          <p>I have created many illustrations for a variety of uses. Add more words here.</p>
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
          <div className={styles.description}>
            <a href="./Projects.html#graphic-design" className={styles.section}>Graphic Design Work</a>
            <p>I enjoy creating logos, refining logo designs, and putting together brand packages.</p></div>
        </div>

        <div className={styles.griditem}>
          <div className={styles.square}> <Image
            src={eye}
            width={350}
            height={250}
            alt="eye painting"
          />
          </div>
          <a href="./Projects.html#fine-arts" className={styles.section}>Fine Arts</a>
          <p>In my free time I work on many types of fine arts.</p>
        </div>


      </div>

      <Footer />

    </main >
  );
}
