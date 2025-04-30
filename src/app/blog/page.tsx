import styles from "./blog.module.css";
import Image from "next/image";
import blogs from "../../assets/images/blog.png";
import Footer from '@/components/footer';


export default function blog() {
    return (
        <main className={styles.main}>
            <Image className={styles.title}
                src={blogs}
                width={432}
                height={174}
                alt="Blog" />

            <dl className={styles.blogs}>
                <dt className={styles.blogtitle}><a href={`cookieblog.html`}>The Fastest Peanut Butter Cookie Recipe</a></dt>
                <dd className={styles.date}>3/14/2024</dd>
                <dt className={styles.blogtitle}><a href={`Jsblog.html`}>Comparison of vanilla JavaScript and React</a></dt>
                <dd className={styles.date}>3/12/2024</dd>
                <dt className={styles.blogtitle}><a href={`./../assets/entry1.html`}>Publishing my portfolio</a></dt>
                <dd className={styles.date}>11/29/2023</dd>
            </dl>
            <Footer />
        </main>
    )
}