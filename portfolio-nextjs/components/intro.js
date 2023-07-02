import Layout from "./layout";
import styles from "./intro.module.css"

export default function Intro() {
    return (<Layout>
        <main className={styles.introMain}>
            <section className={styles.introName}>Nihar Gharat</section>
            <section className={styles.introTag}>Software developer | Histroy Enthusiast</section>
            <section className={styles.introAbtMain}>
                <div>Hi</div>
                <div>I am a backend dev, currently based in Texas, US</div>
                <div>I am passionate about working on projects, new ideas</div>
                <div>Check out my work!</div>
            </section>
        </main>
    </Layout>)
}