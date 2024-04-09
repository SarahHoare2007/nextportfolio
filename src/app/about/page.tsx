import styles from "./about.module.css";
import headshot from '../../assets/images/headshot.png';
import Image from "next/image";
import aboutme from '../../assets/images/aboutme.svg';

export default function About() {
    return (
        <main className={styles.main}>
            {/* <div className={styles.title}>About Me!</div>*/}
            <Image className={styles.title}
                src={aboutme}
                width={432}
                height={174}
                alt="About Me!" />

            <div className={styles.hold}>
                <div className={styles.text}>
                    <p>  My name is Sarah Hoare and I am a 16 year old artist, dancer, and graphic designer. Currently, I
                        am a full-time student at
                        North Idaho College working towards an AAS in Graphic and Web Design.
                    </p> <br /><p>
                        I enjoy creating logos, illustrations, and original art pieces. I have showcased my art
                        in local craft fairs and markets, art shows, and the state fair.
                        I have completed many commissioned works, some can be seen in the fine arts section of my portfolio.
                        I need to put a lot more words here, but I hate writing about myself and don’t remember exactly what
                        about myself I’m supposed to say so this is a tomorrow problem.
                    </p>
                </div>
                <div className="headshot"><Image
                    src={headshot}
                    width={350}
                    height={480}
                    alt="Me!"
                /></div>
            </div>

        </main>
    );
}
