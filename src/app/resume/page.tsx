import styles from "./resume.module.css";

export default function Resume() {
    return (
        <main className={styles.main}>
            <div className={styles.title}>Resume</div>

            <h2>Experience:</h2>
            <h2>Skills:</h2>
            <h2>A third thing:</h2>

            <p>Download my resume here!</p>

        </main>
    );
}