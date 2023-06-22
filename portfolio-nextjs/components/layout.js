import Head from "next/head"

export default function Layout( {children, home} ) {
    return (
        <div className="layout">
            <Head></Head>
            <main>{children}</main>
        </div>
    )
}