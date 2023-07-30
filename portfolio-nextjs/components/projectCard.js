import React from "react";
import { BadgesSection, getBadgeInfo, handleBadges, type_personal_project, type_private_project } from "./semi/badges";

/*
TODO
2. Golden shadow on academic logo hover

Done
2. Display Academic logo for all academic projects in Chrome Yellow
3. Display personal logo for personal projects
*/

// also present in comapnyCard
const EachSkill = function({skill}) {
    return (<li className='mt-1 mr-1 p-1 bg-gray-300 hover:bg-gray-100 hover:text-gray-800 lg:text-sm transition duration-300 ease-in-out'>{skill}</li>)
};

const SkillSection = function(props) {
    return (
        <ul className={props.classNameToUse}>
            {props.techStack.map(e => (
                <EachSkill key={e} skill={e} />
            ))}
        </ul>
    )
}

// Take children
export default function ProjectCard(props) {
    // The kind of badges which you want against your projects
    const jsonForPersonalBadge = getBadgeInfo(type_personal_project, Boolean(props.data.projectType) && props.data.projectType === "personal");
    const jsonForPrivateBadge = getBadgeInfo(type_private_project, Boolean(props.data.repoPrivate) && props.data.repoPrivate);
    let arrayForBadges = [];
    arrayForBadges.push(jsonForPersonalBadge)
    arrayForBadges.push(jsonForPrivateBadge)
    return (
        <div className="mt-4 p-2 bg-gray-200 shadow-lg shadow-gray-400 hover:bg-gray-100 hover:-translate-y-0.5 transform transition active:bg-gray-400 duration-200 ease-in-out">
            <main>
                <div className="p-2 grid grid-cols-6">
                    <div className="text-xl sm:text-2xl md:text-4xl col-span-4 sm:col-span-5">
                        {props.data.projectName}
                    </div>
                    <BadgesSection classToUse="flex flex-wrap col-span-2 sm:col-span-1 my-auto justify-end" className="" badgesArray={arrayForBadges} unq={props.data.projectName}/>
                </div>
                <section className="p-2">
                    <img className="m-2 h-40 mx-auto" src={props.data.mainLogo} alt={`Project logo for ${props.data.projectName}`}/>
                    <div className="mt-2 p-2 text-sm md:text-lg text-gray-800">
                        {props.data.why}
                    </div>
                    <SkillSection techStack={props.data.techStack} classNameToUse="md:px-2 mt-2 flex flex-wrap text-gray-600 text-sm" />
                    <div className="mt-2 text-right text-sm text-gray-600">
                        Check it out...
                    </div>
                </section>
            </main>
        </div>
    )
}