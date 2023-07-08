import Head from "next/head"
import styles from "./layout.module.css"

export default function Layout( {children, home} ) {
    return (
        <div className={styles.layout}>
            <Head></Head>
            <section>{children}</section>
        </div>
    )
}