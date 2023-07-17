import React from "react";

// Take children
export default function CompanyCard(props) {
    const pathOfImage = "/logos/" + props.logo_name;
    return (<div className="mt-4 p-4 pb-2 text-xl hover:bg-gray-200 hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-1 transform transition active:bg-gray-300">
    <div className='grid grid-cols-3'>
        <div className='col-span-1'>
            <img className="h-18" src={pathOfImage} alt="LTI company logo"/>
        </div>
        <div className='col-span-2 my-auto text-right'>
            <div className='text-2xl text-gray-700'>{props.baseLocation}, <span className='text-3xl font-bold'>{props.country}</span></div>
            <div className='text-lg text-gray-600'>{props.duration}</div>
        </div>
    </div>
    <div className='mt-4 text-right text-gray-700 text-xl'>{props.catchPhrase}</div>
    <div className='mt-2 text-sm text-right text-gray-700'>Find out More...</div>
    </div>)
}