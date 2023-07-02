import Layout from "./layout";

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