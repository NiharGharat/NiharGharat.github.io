import Head from "next/head";
import { getAllComapnyIdsNew, getSpecificExpData } from "../../lib/project-util";
import Link from "next/link";
import ExperienceHIghlights from "../../components/expHighlights";
import ExpHighlights from "../../components/expHighlights";
import { HeadingSection } from "../../components/semi/heading";

const SkillSection = function(props) {
    return (
        <ul className={props.classNameToUse}>
            {props.techStack.map(e => (
                <EachSkill key={e} skill={e} />
            ))}
        </ul>
    )
}

const EachSkill = function({skill}) {
    return (<li className='mt-1 mr-1 p-1 bg-gray-300 hover:bg-gray-100 hover:text-gray-800 lg:text-sm transition duration-300 ease-in-out'>{skill}</li>)
};

export default function Company(props) {
    const pathOfLogo = "/logos/mock_" + props.specificExpData.fileContents.logo;
    const idOfBackPage = "/experience#" + props.specificExpData.fileContents.identifier;
    const companyTitle = props.specificExpData.fileContents.companyName;
    const dataToPassToHeader = {
        path: pathOfLogo,
        alt: companyTitle,
        title: companyTitle,
        backPageId: idOfBackPage
    }
    const titleImage = <img className="h-24 col-span-4 text-gray-700 justify-self-start text-4xl my-auto" src={pathOfLogo} alt={companyTitle} title={companyTitle} />
    return (
        <>
            <Head>
                <title>Work at {props.specificExpData.fileContents.companyName}</title>
            </Head>
            <main className="p-2 md:p-4 text-gray-600 bg-gray-100 min-h-screen">
                <HeadingSection data={dataToPassToHeader} titleContent={titleImage} />
                {/* <section className="p-2 grid grid-cols-5 hover:shadow-lg hover:text-gray-800 hover:shadow-gray-300 active:shadow-gray-300 transition duration-300 ease-in-out">
                    <img className="h-24 col-span-4 text-gray-700 justify-self-start text-4xl my-auto" src={pathOfLogo} alt={companyTitle} title={companyTitle} />
                    <div className='my-auto col-span-1 justify-self-end'>
                        <Link href={idOfBackPage}>
                            <img title="Go Back" className="pr-4 h-6 inline-block hover:scale-150 transition ease-in-out duration-300" src="/logos/mock_nav_back.png" alt="Back navigation" />
                        </Link>
                    </div>
                </section> */}
                <section className="px-2 mt-2">
                    <div className="text-lg sm:text-xl lg:text-2xl tracking-tight px-4 text-gray-800">
                        {props.specificExpData.fileContents.why}
                    </div>
                    <div className="mt-2">
                        {props.specificExpData.fileContents.duration}
                    </div>
                    <div>
                        {props.specificExpData.fileContents.baseLocation}, {props.specificExpData.fileContents.country}
                    </div>
                </section>
                <section className="px-4 mt-2">
                    <div className="mt-6 text-xl lg:text-4xl text-gray-700">Working at LTI...</div>
                    <ol className="px-6 list-decimal text-lg lg:text-xl text-gray-600">
                        {props.specificExpData.fileContents.companyDetailPoints.map((eachPt) => 
                            <li className="mt-2">{eachPt}</li>
                        )}
                    </ol>
                    <div className="mt-6 text-xl lg:text-4xl text-gray-700">Insight from work exp</div>
                    {/* Show a list of resourceful insights here */}
                    <ul className="px-6 text-lg lg:text-xl text-gray-600">
                        {props.specificExpData.fileContents.highlights.map((eachPt, index) => 
                            <li key={eachPt.name} className="mt-2 p-2 bg-gray-200"><ExpHighlights data={eachPt} index={index} /></li>
                        )}
                    </ul>
                </section>
                <section className="px-4 mt-2">
                    {/* Tech stack */}
                    <SkillSection techStack={props.specificExpData.fileContents.skills} classNameToUse="md:px-2 mt-2 flex flex-wrap text-gray-600 text-sm" />
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