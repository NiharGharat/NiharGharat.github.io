import { all } from "hast-util-to-html/lib";
import Layout from "./layout";
import Head from "next/head";

export default function Experience(allExpData) {
    return (<Layout>
        <main>
            <ul>
            {allExpData.data.map((eachExpData) => (
                <li key={eachExpData.id}>
                    {eachExpData.title}
                    <br />
                    {eachExpData.location}
                    <br />
                    {eachExpData.dateFrom}
                    <br />
                    {eachExpData.dateTo}
                    <br />
                    {eachExpData.whyLoved}
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: eachExpData.contentHtml }} />
                </li>
            ))}
            </ul>
        </main>
    </Layout>)
}