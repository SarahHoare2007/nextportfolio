import styles from "./contact.module.css";

export default function contact() {
    return (
        <main>
            <div className="styles.main">
                <div className="styles.contact">
                    <h2>Email: <a href="mailto:sarah.sh.studios@gmail.com" className="link">sarah.sh.studios@gmail.com</a> </h2>
                    <h2>Phone: <a href="tel:2089164062" className="styles.link">(208)916-4062</a></h2>
                    <h1>Socials:</h1>
                    <ul className="Socials">
                        <li><a href="https://www.linkedin.com/in/sarah-h-studios/" target="_blank" className="styles.link">Linkdln</a></li>
                        <li>Github: <a href="https://github.com/SarahHoare2007" target="_blank" className="styles.link">SarahHoare2007</a>
                        </li>
                        <li><a href="https://www.instagram.com/sarah_shoare/" target="_blank"
                            className="styles.link">Instagram</a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=61556567321748" target="_blank"
                            className="styles.link">Facebook</a></li>
                    </ul>
                </div>
            </div>
        </main>
    );
}