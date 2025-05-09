import styles from "./resume.module.css";
import Image from "next/image";
import resume from "../../assets/images/resume.svg";
import Footer from '@/components/footer';


export default function Resume() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
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
                            <li>Adobe InDesign</li>
                        </ul>
                    </div>
                    <div className={styles.section}>
                        <h1>Skills:</h1>
                        <ul>
                            <li>HTML & CSS</li>
                            <li>Leadership</li>
                            <li>Creativity</li>
                        </ul>
                    </div>
                    <div className={styles.section}>
                        <h1>Recent Projects:</h1>
                        <ul>
                            <li>NIC GDES Portfolio Show Team Lead</li>
                            <li>Design Intern at The Blissful Whisk</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.download}><a href="/assets/newresume.pdf" target="_blank"> Download my resume here!</a></div>
            </div>

            <Footer />
        </main >
    );
}