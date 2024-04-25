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
                <h2>Experience:</h2>
                <h2>Skills:</h2>
                <h2>A third thing:</h2>
            </div>

            <div className={styles.download}><a href="../../assets/images/resume.pdf" target="_blank"> Download my resume here!</a></div>

        </main >
    );
}