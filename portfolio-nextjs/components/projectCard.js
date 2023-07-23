import React from "react";
import { BadgesSection, handleBadges } from "./semi/badges";

/*
TODO
1. Hover colour text of skill Array on hover

Done
2. Display Academic logo for all academic projects in Chrome Yellow
3. Display personal logo for personal projects
*/

// also present in comapnyCard
const EachSkill = function({skill}) {
    return (<li className='mt-1 mr-1 p-1 bg-gray-300 hover:bg-gray-100 lg:text-sm transition duration-300 ease-in-out'>{skill}</li>)
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
    const projectPersonalBadge = Boolean(props.data.projectType) && props.data.projectType === "personal";
    const projectPrivateBadge = Boolean(props.data.repoPrivate) && props.data.repoPrivate;
    let badgesArray = handleBadges(projectPersonalBadge, projectPrivateBadge)
    
    // badgesArray.push(badgeSelection(projectPersonalBadge, badge_title_personal_project, badge_title_academic_project, badge_src_personal_project, badge_src_academic_project))
    // badgesArray.push(badgeSelection(projectPrivateBadge, badge_title_private_project, badge_title_public_project, badge_src_private_project, badge_src_public_project))
    return (
        <div className="mt-4 p-2 bg-gray-200 shadow-lg shadow-gray-400 hover:bg-gray-100 hover:-translate-y-0.5 transform transition active:bg-gray-400 duration-200 ease-in-out">
            <main>
                <div className="p-2 grid grid-cols-6">
                    <div className="text-xl sm:text-2xl md:text-4xl col-span-4 sm:col-span-5">
                        {props.data.projectName}
                    </div>
                    <BadgesSection className="" badgesArray={badgesArray} unq={props.data.projectName}/>
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