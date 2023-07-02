import styles from "./projectCard.module.css";
import Image from "next/image";

// Take children
export default function ProjectCard( {eachProjectData} ) {
    return (<div className={styles.eachCard}>
        <Image className={styles.cardImage}></Image>
        <section className={styles.cardDetailsSection}>
            
        </section>
    </div>)
}