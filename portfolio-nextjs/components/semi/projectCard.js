import styles from "./projectCard.module.css";
import Image from "next/image";

// Take children
export default function ProjectCard( {eachProjectData} ) {
    return (<div className={styles.eachCard}>
        <Image className={styles.cardImage}></Image>
        <section className={styles.cardDetailsSection}>
            {eachProjectData.title}
            <br />
            {eachProjectData.type}
            <br />
            {eachProjectData.dateFrom}
            <br />
            {eachProjectData.techStack}
            <br />
            {eachProjectData.whyLoved}
            <br />
        </section>
    </div>)
}