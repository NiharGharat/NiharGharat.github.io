import Head from "next/head";
import { getAllComapnyIdsNew, getSpecificExpData } from "../../lib/project-util";
import ExpHighlights from "../../components/expHighlights";
import { HeadingSection } from "../../components/semi/heading";
import { useState } from "react";

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

const EachTextContent = function({data, index}) {
    const path = "/logos/" + data.logo;
    const [showContent, setShowContent] = useState(false);
    const handleContentClick = () => {
        setShowContent(!showContent);
    }

    return (
        <li key={index} className="" >
            <div className="flex md:p-2">
                <div className="flex-shrink-0 my-auto mr-4">
                    <img className="mt-2 float-left h-10 sm:h-12 md:h-14 lg:h-16" src={path} alt={data.name} title={data.name}/>
                </div>
                <div className="flex-grow my-auto">
                    <p className="ml-4 text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:cursor-pointer" onClick={handleContentClick}>
                        {data.name}
                    </p>
                </div>
            </div>
            <div className="text-right text-gray-400 text-xs hover:cursor-pointer" onClick={handleContentClick}>{showContent ? "Show less" : "Show more"}</div>
            <div className={`${showContent ? "visible" : "hidden"} border-2 border-gray-200 mt-2 lg:p-2 overflow-hidden transition duration-300 ease-in-out`}>
                <ol className="list-none text-sm lg:text-xl">
                    {data.stmt.map((eachPt) => 
                        <li className="p-2">{eachPt}</li>
                    )}
                </ol>
            </div>
        </li>
    )
}

const FocusedDescWithTag = function({data, isThisFocused, isReset}) {
    return (
        <li className={`${(isThisFocused || isReset) ? "text-gray-600" : "text-gray-400"} text-sm transition duration-300 ease-in-out`} key={data.id}>{data.description}</li>
    )
}

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

    const titleImage = <img className="h-14 col-span-4 text-gray-700 justify-self-start text-4xl my-auto" src={pathOfLogo} alt={companyTitle} title={companyTitle} />
    let uniqueOnceSet = new Set();
    props.specificExpData.fileContents.companyDetailPoints.forEach(eachTagArray => {
        eachTagArray.tags.forEach(eachTag => {
            uniqueOnceSet.add(eachTag);
        });
    });
    uniqueOnceSet.add("reset");
    const flattenedTagMap = [...new Set(uniqueOnceSet)]
    const [activeTags, setActiveTags] = useState([]);

    /*
    If the tag was already present - remove that tag
    If the tag was reset - remove all tags
    Else - new tag - just add to the array
    */
    const handleTagClick = (tag) => {
        if (activeTags.includes(tag)) {
            setActiveTags(activeTags.filter(t => t != tag));
        } else if (tag == "reset") {
            setActiveTags([])
        } else {
            setActiveTags([...activeTags, tag]);
        }
    };

    return (
        <>
            <Head>
                <title>Work at {props.specificExpData.fileContents.companyName}</title>
            </Head>
            <main className="p-4 text-gray-600 bg-gray-100 min-h-screen">
                <HeadingSection data={dataToPassToHeader} titleContent={titleImage} />
                {/* DO NOT REMOVE THIS PART */}
                {/* This is externalised currently but cud be mahe it internalised */}
                {/* <section className="p-2 grid grid-cols-5 hover:shadow-lg hover:text-gray-800 hover:shadow-gray-300 active:shadow-gray-300 transition duration-300 ease-in-out">
                    <img className="h-24 col-span-4 text-gray-700 justify-self-start text-4xl my-auto" src={pathOfLogo} alt={companyTitle} title={companyTitle} />
                    <div className='my-auto col-span-1 justify-self-end'>
                        <Link href={idOfBackPage}>
                            <img title="Go Back" className="pr-4 h-6 inline-block hover:scale-150 transition ease-in-out duration-300" src="/logos/mock_nav_back.png" alt="Back navigation" />
                        </Link>
                    </div>
                </section> */}
                {/* DO NOT REMOVE THIS PART */}
                <div className="px-4 text-xs sm:text-sm">
                    {props.specificExpData.fileContents.baseLocation}, {props.specificExpData.fileContents.country} - {props.specificExpData.fileContents.duration}
                </div>
                <section className="px-2 mt-2 text-base sm:text-lg lg:text-xl tracking-tight text-gray-700">
                    {props.specificExpData.fileContents.why}
                </section>
                <hr className="mt-3 mb-1 lg:mt-5 lg:mb-3" />
                <ul className="flex flex-wrap text-base md:text-lg">
                    {flattenedTagMap.map((eachTag) => {
                        const isTagReset = eachTag == "reset"
                        if (isTagReset) {
                            return (<li key={eachTag.id} className="m1-1 ml-4 hover:bg-gray-100 font-medium text-gray-950 hover:scale-125 transition duration-300 ease-in-out cursor-pointer" onClick={() => handleTagClick(eachTag)}>#{eachTag}</li>)    
                        } else {
                            return (<li key={eachTag.id} className="m1-1 ml-4 hover:bg-gray-100 hover:text-gray-800 hover:scale-125 transition duration-300 ease-in-out cursor-pointer" onClick={() => handleTagClick(eachTag)}>#{eachTag}</li>)
                        }
                    })}
                </ul>
                {/* sm:bg-pink-200 md:bg-red-200 lg:to-blue-200 */}
                <section className="mt-2 sm:my-4 sm:mx-4 lg:mx-6">
                    {/* <div className="mt-6 text-gray-700">Working at LTI...</div> */}
                    <ol className="p-2 grid grid-flow-row gap-3 border-2 border-gray-300 text-justify text-sm lg:text-xl text-gray-600">
                        {props.specificExpData.fileContents.companyDetailPoints.map((eachPt) => {
                            const isReset = activeTags.length == 0;
                            const thisActiveTagSet = activeTags.some(eachInActive => eachPt.tags.includes(eachInActive));
                            return (<FocusedDescWithTag isReset={isReset} isThisFocused={thisActiveTagSet} data={eachPt} />)
                        })}
                    </ol>
                </section>
                <section className="my-4 text-gray-700 text-2xl sm:text-3xl md:text-4xl xl:text-6xl">
                    Notables
                </section>
                <section className="sm:my-4 sm:mx-4 lg:mx-6">
                    <ul className="mt-2 p-2 px-4 border-2 border-gray-300 text-lg lg:text-xl text-gray-600 grid grid-flow-row gap-4">
                        {props.specificExpData.fileContents.highlights.map((eachPt, index) => 
                        <EachTextContent key={eachPt.name} data={eachPt} index={index}/>
                        )}
                    </ul>
                </section>
                <section className="mt-2 text-2xl sm:text-3xl md:text-4xl xl:text-6xl">
                    {/* Tech stack */}
                    <div className="mt-2 text-gray-700">Tech Stack Used</div>
                    <SkillSection techStack={props.specificExpData.fileContents.skills} classNameToUse="md:px-2 mt-2 flex flex-wrap text-gray-600 text-sm" />
                </section>
                <hr className="m-2" />
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