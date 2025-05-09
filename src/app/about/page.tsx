import styles from "./about.module.css";
import headshot from '../../assets/images/headshot.jpg';
import Image from "next/image";
import aboutme from '../../assets/images/aboutme.svg';
import Footer from '@/components/footer';
import Diamond from "@/components/animations/diamond";

export default function About() {
    return (
        <main className={styles.main}>
            <div className={styles.hold}>
                <div className={styles.text}>

                    <Image className={styles.title}
                        src={aboutme}
                        width={432}
                        height={174}
                        alt="About Me!" />


                    <p>  My name is Sarah Hoare and I am a 18 year old artist, dancer, and graphic designer. Currently, I
                        am a full-time student at North Idaho College working towards an AAS in Graphic and Web Design.
                    </p> <br /><p>
                        I enjoy creating logos, illustrations, and original art pieces. I have showcased my art
                        in local craft fairs and markets, art shows, and the state fair.
                        I have completed many commissioned works, some can be seen in the fine arts section of my portfolio.
                        I need to put a lot more words here, but I hate writing about myself and don’t remember exactly what
                        about myself I’m supposed to say so this is a tomorrow problem.
                    </p>
                </div>
                <div className={styles.headshot}>
                    <Image
                        src={headshot}
                        width={491}
                        height={721.5}
                        alt="Me!"
                    />
                </div>
                <div className={styles.diamond}>
                    <Diamond /></div>
            </div>
            <Footer />
        </main>
    );
}
