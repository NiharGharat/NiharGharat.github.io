import Head from 'next/head';
import {getAllProjectIdsNew, getSpecificPostData} from '../../lib/project-util';
import { BadgesSection, handleBadges } from '../../components/semi/badges';
import Link from 'next/link';

/*
TODO
1. Do keyword bolding on the main paras eg Dockerized, etc.
*/

const SkillSection = function(props) {
    return (
        <ul className={props.classNameToUse}>
            {props.techStack.map(e => (
                <EachSkill skill={e} />
            ))}
        </ul>
    )
}

const EachSkill = function({skill}) {
    return (<li className='mt-1 mr-1 p-1 bg-gray-300 hover:bg-gray-100 hover:text-gray-800 lg:text-sm transition duration-300 ease-in-out'>{skill}</li>)
};

export default function Project({specificPostData}) {
    console.log("Inside actual impl");
    console.log(specificPostData);
    const projectName = specificPostData.allProjData.projectName;
    const titleOfPage = "Nihar Project " + projectName;
    const projectPersonalBadge = Boolean(specificPostData.allProjData.projectType) && specificPostData.allProjData.projectType === "personal";
    const projectPrivateBadge = Boolean(specificPostData.allProjData.repoPrivate) && specificPostData.allProjData.repoPrivate;
    const isGithubLinkPresent = specificPostData.allProjData.githubLink;
    let badgesArray = handleBadges(projectPersonalBadge, projectPrivateBadge)
    const backPageId = "/project#" + specificPostData.allProjData.identifier;
    return (
        <>
            <Head>
                <title>{titleOfPage}</title>
            </Head>
            <main className='p-2 md:p-4 text-gray-600 bg-gray-200'>
                <section className='grid grid-cols-5 hover:shadow-lg hover:text-gray-800 hover:shadow-gray-300 active:shadow-gray-300 transition duration-300 ease-in-out'>
                    <div className='p-2 col-span-4 text-gray-700 justify-self-start text-4xl md:text-5xl lg:text-6xl tracking-normal my-auto'>
                        {projectName}
                    </div>
                    <div className='my-auto col-span-1 justify-self-end'>
                        <Link href={backPageId}>
                            <img title="Go Back" className="pr-4 h-6 inline-block" src="/logos/mock_nav_back.png" alt="Back navigation" />
                        </Link>
                    </div>
                </section>
                <section className='p-2 mt-4'>
                    <div className='text-xl lg:text-2xl tracking-tight px-6'>
                        {specificPostData.allProjData.why}
                    </div>
                    <ul className='mt-2 p-2 text-lg lg:text-xl'>
                        {specificPostData.allProjData.storyParas.map((eachPara, index) => {
                            return (<li className='mt-3' key={index}>{eachPara}</li>)
                        })}
                    </ul>
                </section>
                <section className='m-2 pl-4'>
                    {/* Badges */}
                    <BadgesSection classToUse="flex flex-wrap my-auto" className="" badgesArray={badgesArray} unq={specificPostData.allProjData.projectName}/>
                </section>
                <section className='p-2'>
                    {isGithubLinkPresent && 
                    <section className='text-xs'>
                        {/* Github link */}
                        <Link className='mx-2 text-lg font-bold text-blue-900 hover:underline duration-300 ease-in-out transition' href={specificPostData.allProjData.githubLink} >GithubLink</Link>
                    </section>}
                    <SkillSection techStack={specificPostData.allProjData.techStack} classNameToUse="md:px-2 mt-2 flex flex-wrap text-gray-600 text-sm" />
                </section>
            </main>
        </>
    );
}

export const getStaticPaths = async () => {
    const thePaths = getAllProjectIdsNew();
    const responseToReturn = {
        paths: thePaths,
        fallback: false,
    }
    console.log(responseToReturn.paths[0].params)
    return responseToReturn;
}

export async function getStaticProps(props) {
    console.log("HiHi")
    // console.log(props.params)
    const specificPostData = getSpecificPostData(props.params.identifier);
    // console.log(specificPostData);
    console.log("Hi")
    return {
      props: {
        specificPostData
      }
    };
}