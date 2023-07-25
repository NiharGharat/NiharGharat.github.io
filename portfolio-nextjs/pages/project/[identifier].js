import Head from 'next/head';
import {getAllProjectIdsNew, getSpecificPostData} from '../../lib/project-util';
import { BadgesSection, handleBadges } from '../../components/semi/badges';
import Link from 'next/link';

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
    return (<li className='mt-1 mr-1 p-1 bg-gray-300 hover:bg-gray-100 lg:text-sm transition duration-300 ease-in-out'>{skill}</li>)
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
    // console.log(specificPostData.allProjData.techStack)
    return (
        <>
            <Head>
                <title>{titleOfPage}</title>
            </Head>
            <main>
                <section className='grid grid-cols-4'>
                    <div className='col-span-3'>
                        {projectName}
                    </div>
                    <div className='col-span-1'>
                        <Link href="javascript:history.back()">Back</Link>
                    </div>
                </section>
                <section>
                    <div>
                        {specificPostData.allProjData.why}
                    </div>
                    <ul>
                        {specificPostData.allProjData.storyParas.map((eachPara, index) => {
                            return (<li key={index}>{eachPara}</li>)
                        })}
                    </ul>
                </section>
                <section>
                    {/* Badges */}
                    <BadgesSection classToUse="flex flex-wrap my-auto" className="" badgesArray={badgesArray} unq={specificPostData.allProjData.projectName}/>
                </section>
                {isGithubLinkPresent && 
                <section>
                    {/* Github link */}
                    <span>Github Link</span> - <Link href={specificPostData.allProjData.githubLink} >{specificPostData.allProjData.githubLink}</Link>
                </section>}
                
                {/* <SkillSection techStack={specificPostData.allProjData.techStack} classNameToUse="md:px-2 mt-2 flex flex-wrap text-gray-600 text-sm" /> */}
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