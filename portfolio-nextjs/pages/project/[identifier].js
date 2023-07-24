import Head from 'next/head';
import {getAllProjectIdsNew, getSpecificPostData} from '../../lib/project-util';
import { BadgesSection, handleBadges } from '../../components/semi/badges';

export default function Project({specificPostData}) {
    console.log("Inside actual impl");
    console.log(specificPostData);
    const projectName = specificPostData.allProjData.projectName;
    const titleOfPage = "Nihar Project " + projectName;
    const projectPersonalBadge = Boolean(specificPostData.allProjData.projectType) && specificPostData.allProjData.projectType === "personal";
    const projectPrivateBadge = Boolean(specificPostData.allProjData.repoPrivate) && specificPostData.allProjData.repoPrivate;
    let badgesArray = handleBadges(projectPersonalBadge, projectPrivateBadge)
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
                        Back
                    </div>
                </section>
                <section>
                    <div>
                        {specificPostData.allProjData.why}
                    </div>
                    <ul>
                        {specificPostData.allProjData.storyParas.map(eachPara => {
                            return (<li>{eachPara}</li>)
                        })}
                    </ul>
                </section>
                <section>
                    {/* Badges */}
                    <BadgesSection classToUse="flex flex-wrap my-auto" className="" badgesArray={badgesArray} unq={specificPostData.allProjData.projectName}/>
                </section>
                <section>
                    {/* Github link */}
                </section>
                <section>
                    {/* Tech stack */}
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