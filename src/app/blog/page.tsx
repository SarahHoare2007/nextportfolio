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
        </main>
    )
}