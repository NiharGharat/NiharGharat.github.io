import styles from "./projectCard.module.css";
import Image from "next/image";

// Take children
export default function ProjectCard( {children} ) {
    return (<div className={styles.eachCard}>
        <Image className={styles.cardImage}></Image>
        <section className={styles.cardDetailsSection}>
            <div className={styles.eachCardTitle}></div>
            <div className={styles.eachCardDesc}></div>
        </section>
    </div>)
}