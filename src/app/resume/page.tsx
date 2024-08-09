import styles from "./resume.module.css";
import Image from "next/image";
import resume from "../../assets/images/resume.svg";


export default function Resume() {
    return (
        <main className={styles.main}>
            <Image className={styles.title}
                src={resume}
                width={432}
                height={174}
                alt="Projects" />

            <div className={styles.credentials}>
                <div className={styles.section}>
                    <h1>Experience:</h1>
                    <ul>
                        <li>Adobe Illustrator</li>
                        <li>Adobe Photoshop</li>
                        <li>leadership roles</li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h1>Skills:</h1>
                    <ul>
                        <li>Adobe Illustrator</li>
                        <li>Adobe Photoshop</li>
                        <li>Creativity</li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h1>A third thing:</h1>
                    <ul>
                        <li>I like adorable animals!</li>
                    </ul>
                </div>
            </div>
  
            
            <div className={styles.download}><a href="/assets/newresume.pdf" target="_blank"> Download my resume here!</a></div>

        </main >
    );
}