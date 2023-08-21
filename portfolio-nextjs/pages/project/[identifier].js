import Head from 'next/head';
import { getAllProjectIdsNew, getSpecificPostData } from '../../lib/project-util';
import { BadgesSection, getBadgeInfo, type_author_project, type_personal_project, type_private_project } from '../../components/semi/badges';
import Link from 'next/link';
import { HeadingSection } from '../../components/semi/heading';

const SkillSection = function (props) {
    return (
        <ul className={props.classNameToUse}>
            {props.techStack.map(e => (
                <EachSkill key={e} skill={e} />
            ))}
        </ul>
    )
}

const EachSkill = function ({ skill }) {
    return (<li className='mt-1 mr-1 p-1 bg-gray-300 hover:bg-gray-100 hover:text-gray-800 lg:text-sm transition duration-300 ease-in-out'>{skill}</li>)
};

export default function Project({ specificPostData }) {
    const projectName = specificPostData.allProjData.projectName;
    const titleOfPage = "Nihar Project " + projectName;
    const isGithubLinkPresent = specificPostData.allProjData.githubLink;

    const jsonForPersonalBadge = getBadgeInfo(type_personal_project, Boolean(specificPostData.allProjData.projectType) && specificPostData.allProjData.projectType === "personal");
    const jsonForPrivateBadge = getBadgeInfo(type_private_project, Boolean(specificPostData.allProjData.repoPrivate) && specificPostData.allProjData.repoPrivate);
    const jsonForMeAuthorBadge = getBadgeInfo(type_author_project, Boolean(specificPostData.allProjData.author) && specificPostData.allProjData.author);
    let arrayForBadges = []
    arrayForBadges.push(jsonForPersonalBadge)
    arrayForBadges.push(jsonForPrivateBadge)
    arrayForBadges.push(jsonForMeAuthorBadge)
    const idOfBackPage = "/project#" + specificPostData.allProjData.identifier;
    //
    const dataToPassToHeader = {
        backPageId: idOfBackPage,
        projectTitle: projectName
    }
    const titleText = <div className='col-span-4 text-gray-700 justify-self-start text-4xl md:text-5xl lg:text-6xl tracking-normal my-auto'>
        {projectName}
    </div>;
    const pathOfImg = "/logos/" + specificPostData.allProjData.mainLogo;
    //
    return (
        <>
            <Head>
                <title>{titleOfPage}</title>
            </Head>
            <main className='p-2 md:p-4 text-gray-600 bg-gray-100 min-h-screen'>
                <HeadingSection data={dataToPassToHeader} titleContent={titleText} />
                {/* DO NOT REMOVE THIS PART */}
                {/* <section className='p-2 grid grid-cols-5 hover:shadow-lg hover:text-gray-800 hover:shadow-gray-300 active:shadow-gray-300 transition duration-300 ease-in-out'>
                    <div className='col-span-4 text-gray-700 justify-self-start text-4xl md:text-5xl lg:text-6xl tracking-normal my-auto'>
                        {projectName}
                    </div>
                    <div className='my-auto col-span-1 justify-self-end'>
                        <Link href={backPageId}>
                            <img title="Go Back" className="pr-4 h-6 inline-block hover:scale-150 transition ease-in-out duration-300" src="/logos/mock_nav_back.png" alt="Back navigation" />
                        </Link>
                    </div>
                </section> */}
                {/* DO NOT REMOVE THIS PART */}
                <section className='p-2'>
                    <div className='text-lg sm:text-xl lg:text-2xl tracking-tight px-4 text-gray-800'>
                        {specificPostData.allProjData.why}
                    </div>
                </section>
                <section className='mt-6 m-4 mx-6 sm:mx-12 md:mx-16 border-2 border-gray-400 rounded-sm'>
                    <img className="mx-auto p-4 h-48 sm:h-54 md:h-64 lg:h-72 xl:h-80 object-cover" src={pathOfImg} alt={`Project logo for ${specificPostData.allProjData.projectName}`} />
                </section>
                <div className='px-4 text-center'>{projectName}</div>
                <section className='p-2 mt-2'>
                    <ul className='p-2 text-lg lg:text-xl text-gray-600'>
                        {specificPostData.allProjData.storyParas.map((eachPara, index) => {
                            return (<li className='mt-3' key={index}>{eachPara}</li>)
                        })}
                    </ul>
                </section>
                <section className='m-2 pl-4'>
                    {/* Badges */}
                    <BadgesSection classToUse="flex flex-wrap my-auto" className="" badgesArray={arrayForBadges} unq={specificPostData.allProjData.projectName} />
                </section>
                <section className='p-2'>
                    {isGithubLinkPresent &&
                        <section className='text-xs'>
                            {/* Github link */}
                            <Link className='mx-2 text-lg font-bold text-blue-900 hover:underline duration-300 ease-in-out transition' target="_blank" rel='noopener noreferrer' href={specificPostData.allProjData.githubLink} >GithubLink</Link>
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
    return responseToReturn;
}

export async function getStaticProps(props) {
    const specificPostData = getSpecificPostData(props.params.identifier);
    return {
        props: {
            specificPostData
        }
    };
}