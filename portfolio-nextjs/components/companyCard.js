import React from "react";
import { logos_base_path } from "./constants";

const EachSkill = function ({ skill }) {
    return (<li className='mt-1 mr-1 p-1 bg-gray-300 hover:bg-gray-100 hover:text-gray-800 lg:text-sm transition duration-300 ease-in-out'>{skill}</li>)
};

const SkillSection = function (props) {
    return (
        <ul className={props.classNameToUse}>
            {props.skillsArray.map(e => (
                <EachSkill key={e} skill={e} />
            ))}
        </ul>
    )
}

const AllSkills = function ({ isHiddenOnSm, skillsArray }) {
    const status = Boolean(isHiddenOnSm)
    let classNameToUse;
    if (status) {
        classNameToUse = 'hidden sm:flex flex-wrap text-gray-600 text-sm'
    } else {
        classNameToUse = 'flex sm:hidden flex-wrap text-gray-600 text-sm'
    }
    return (
        <SkillSection classNameToUse={classNameToUse} skillsArray={skillsArray} />
    )
}

// Take children
export default function CompanyCard(props) {
    const pathOfLogo = logos_base_path + props.data.logo;
    return (<section className='text-gray-700 p-4 m-2 mt-4 md:mt-6 bg-gray-200 shadow-lg shadow-gray-400 hover:bg-gray-100 hover:-translate-y-0.5 transform transition active:bg-gray-400'>
        <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6'>
            <div className='col-span-1 text-sm py-2 px-2'>
                {props.data.duration}
            </div>
            <div className='col-span-3 md:col-span-4 lg:col-span-5'>
                <div className='grid'>
                    <img className="h-14 text-gray-700 justify-self-start text-4xl my-auto" src={pathOfLogo} alt={props.data.companyName} title={props.data.companyName} />
                    {/* <div className='col-span-1 text-2xl font-bold text-brand_lti_dark_blue my-auto sm:my-0 lg:text-5xl'>
                    {props.company}
                </div> */}
                    <span className='justify-self-end my-auto text-gray-600 lg:text-2xl'>
                        {props.data.baseLocation}, <span className=' font-bold text-gray-700'>{props.data.country}</span>
                    </span>
                </div>
                <div className='text-gray-600 text-sm mt-4 lg:text-lg'>
                    <ol>
                        {props.data.companyLoved4Points.map((eachPoint, index) => (
                            <li key={index}>- {eachPoint}</li>
                        ))}
                    </ol>
                </div>
                <AllSkills isHiddenOnSm skillsArray={props.data.skills} />
            </div>
        </div>
        <AllSkills skillsArray={props.data.skills} />
    </section>)
}