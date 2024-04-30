import styles from "./blog.module.css";
import Image from "next/image";
import blogs from "../../assets/images/blog.svg";


export default function blog() {
    return (
        <main className={styles.main}>
            <Image className={styles.title}
                src={blogs}
                width={432}
                height={174}
                alt="Blog" />

            <dl className={blogs}>
                <dt className={styles.blogtitle}><a href={`cookieblog.html`}>The Fastest Peanut Butter Cookie Recipe</a></dt>
                <dd>3/14/2024</dd>
                <dt className={styles.blogtitle}><a href={`Jsblog.html`}>Comparison of vanilla JavaScript and React</a></dt>
                <dd>3/12/2024</dd>
                <dt className={styles.blogtitle}><a href={`./../assets/entry1.html`}>Publishing my portfolio</a></dt>
                <dd>11/29/2023</dd>
            </dl>
        </main>
    )
}