import Head from "next/head";
import { getAllComapnyIdsNew, getSpecificExpData } from "../../lib/project-util";

export default function Company(props) {
    console.log(props.specificExpData.fileContents)
    const path = "/logos/mock_" + props.specificExpData.fileContents.logo;
    console.log(path)
    return (
        <>
            <Head>
                <title>Work at {props.specificExpData.fileContents.companyName}</title>
            </Head>
            <main>
                <section>
                    <div>
                        {/* {props.specificExpData.fileContents.companyName} */}
                        <img src={path} alt={props.specificExpData.fileContents.companyName} title={props.specificExpData.fileContents.companyName} />
                    </div>
                    <div>
                        {props.specificExpData.fileContents.duration}
                    </div>
                    <div>
                        {props.specificExpData.fileContents.baseLocation}, {props.specificExpData.fileContents.country}
                    </div>
                    <div>
                        {props.specificExpData.fileContents.why}
                    </div>
                </section>
                <section>
                    <ul>
                        {props.specificExpData.fileContents.companyDetailPoints.map((eachPt) => 
                            <li>{eachPt}</li>
                        )}
                    </ul>
                </section>
            </main>
        </>
    )
}

export const getStaticPaths = async () => {
    const thePaths = getAllComapnyIdsNew();
    const responseToReturn = {
        paths: thePaths,
        fallback: false,
    }
    return responseToReturn;
}

export async function getStaticProps(props) {
    const specificExpData = getSpecificExpData(props.params.identifier);
    return {
      props: {
        specificExpData
      }
    };
}