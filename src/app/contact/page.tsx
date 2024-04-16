import styles from "./contact.module.css";
import ContactForm from '../../components/global/ContactForm';
import Image from "next/image";
import contactHead from '../../assets/images/contact.svg';

export default function contact() {
    return (
        <div className={styles.main}>

            <Image className={styles.title}
                src={contactHead}
                width={695}
                height={235}
                alt="Sarah Sioux Studios" />

            <ContactForm />
        </div>
    );
}