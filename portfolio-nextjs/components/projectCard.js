import React from "react";

// also present in comapnyCard
const EachSkill = function({skill}) {
    return (<li className='mt-1 mr-1 p-1 bg-gray-300 hover:bg-gray-400 lg:text-sm'>{skill}</li>)
};

const SkillSection = function(props) {
    return (
        <ul className={props.classNameToUse}>
            {props.skillsArray.map(e => (
                <EachSkill key={e} skill={e} />
            ))}
        </ul>
    )
}

// Take children
export default function ProjectCard(props) {
    return (
        <>
            <main>
                <div>
                    {props.titleOfProject}
                </div>
                <section>
                    <img src={props.mainLogo} alt={`Project logo for ${props.titleOfProject}`} className=""/>
                    <div>
                        {props.tagLine}
                    </div>
                    <div>
                        <SkillSection skillsArray={props.techStack} classNameToUse="" />
                    </div>
                </section>
            </main>
        </>
    )
}