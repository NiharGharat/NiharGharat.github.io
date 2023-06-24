import Head from "next/head";
import Layout from "./layout";
import styles from "./layout.module.css";
import ProjectCard from "../components/semi/projectCard";

export default function Project(allProjectData) {
    console.log("Project")
    console.log(allProjectData)
    allProjectData.data.map(each => {
        console.log(each)
    })
    return (<Layout>
        <Head>

        </Head>
        <main className={styles.projectMain}>
            <div className={styles.projectName}>
                Projects
            </div>
            <div className={styles.projectList}>
                {/* Can load the project details from external md file */}
                {/* Loop here and push the details to ProjectCard component */}
                <ul>
                    <ProjectCard title="project_1"></ProjectCard>
                    <ProjectCard title="project_2"></ProjectCard>
                    <ProjectCard title="project_3"></ProjectCard>
                </ul>
            </div>
        </main>
    </Layout>)
}