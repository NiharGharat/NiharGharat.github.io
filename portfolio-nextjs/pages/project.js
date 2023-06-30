import Head from "next/head";
import Layout from "./layout";
import styles from "./layout.module.css";
import ProjectCard from "../components/semi/projectCard";

export default function Project(allProjectData) {
    return (<Layout>
        <main className={styles.projectMain}>
            <div className={styles.projectName}>
                Projects
            </div>
            <div className={styles.projectList}>
                <ul>
                {allProjectData.data.map((eachProjectData) => (
                        <li key={eachProjectData.id}>
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
                        <div dangerouslySetInnerHTML={{ __html: eachProjectData.contentHtml }} />
                        </li>
                ))}
                </ul>
            </div>
        </main>
    </Layout>)
}