import Layout from "./layout";
import Head from "next/head";

export default function Experience(allExpData) {
    console.log("Experience")
    console.log(allExpData.data[0])
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
                </li>
            ))}
            </ul>
        </main>
    </Layout>)
}