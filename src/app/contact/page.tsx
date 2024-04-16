import styles from "./contact.module.css";
import ContactForm from '../../components/global/ContactForm';

export default function contact() {
    return (
        <div className={styles.main}>
            <ContactForm />
        </div>
    );
}