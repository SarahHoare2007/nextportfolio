import Image from "next/image";
import styles from "./page.module.css";
import coffee from '../assets/images/coffee.png';
import eye from '../assets/images/eye.jpg';
import monogram from '../assets/images/monogram.png';
import title from '../assets/images/mainheading.svg';


export default function Home() {
  return (
    <main className={styles.main}>

      {/* <div className={styles.name}>
        <h1>Sarah Sioux Studios</h1>
      </div>*/}

      <Image className={styles.title}
        src={title}
        width={695}
        height={235}
        alt="Sarah Sioux Studios" />


      <div className={styles.skills}>
        <div className={styles.GD}>Graphic Design</div>
        <div className={styles.IL}>Illustration</div>
        <div className={styles.WD}>Web Design</div>
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

    </main >
  );
}
