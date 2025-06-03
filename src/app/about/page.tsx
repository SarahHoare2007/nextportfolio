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


                    <p>  My name is Sarah Hoare and I am a 18 year old artist, dancer, and graphic designer. I recently graduated from
                         North Idaho College with an AAS in Graphic and Web Design.
                    </p> <br /><p>
                        I enjoy creating logos, illustrations, animation, original art, and anything else you can think of. 
                        My work has been in the Inlander newspaper as the cover for the 2025 summer camps section, awarded a Silver Addy at the AAF Spokane Addy Awards, and has recieved recognishion under scholarship review.
                        I have completed a handful of freelance jobs, most of which can be seen under my projects page. Have a project idea? Message me and we can make your ideas reality!
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
