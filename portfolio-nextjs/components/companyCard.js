import React from "react";

const EachSkill = function({skill}) {
    return (<li className='mt-1 mr-1 p-1 bg-gray-300 hover:bg-gray-400 lg:text-sm'>{skill}</li>)
};

const AllSkills = function({isHiddenOnSm, skillsArray}) {
    const status = Boolean(isHiddenOnSm)
    let com;
    if (status) {
        console.log("True")
        com = (<ul className='hidden sm:flex flex-wrap text-gray-600 text-sm'>
        {skillsArray.map(e => (
            <EachSkill key={e} skill={e} />
        ))}
    </ul>)
    } else {
        com = (<ul className='flex sm:hidden flex-wrap text-gray-600 text-sm'>
        {skillsArray.map(e => (
            <EachSkill key={e} skill={e} />
        ))}
    </ul>)
    }
    return (
        <>{com}</>
    )
}

// Take children
export default function CompanyCard(props) {
    return (<section className='text-gray-700 p-2 m-2 mt-4 md:mt-6 bg-gray-200 shadow-lg shadow-gray-400 hover:bg-gray-100 hover:-translate-y-0.5 transform transition active:bg-gray-400'>
    <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6'>
        <div className='col-span-1 text-sm py-2'>
            {props.duration}
        </div>
        <div className='col-span-3 md:col-span-4 lg:col-span-5'>
            <div className='grid grid-cols-3'>
                <div className='col-span-1 text-2xl font-bold text-brand_lti_dark_blue my-auto sm:my-0 uppercase lg:text-5xl'>
                    {props.company}
                </div>
                <div className='col-span-2 text-right my-auto align-text-bottom text-gray-600 lg:text-2xl'>
                    {props.baseLocation}, <span className=' font-bold text-gray-700'>{props.country}</span>
                </div>
            </div>
            <div className='text-gray-600 text-sm mt-4 lg:text-lg'>
                <ol>
                    <li>{props.p1}</li>
                    <li>{props.p2}</li>
                </ol>
            </div>
            <AllSkills isHiddenOnSm skillsArray={props.skillsArray}/>
        </div>
    </div>
    <AllSkills skillsArray={props.skillsArray} />
</section>)
}