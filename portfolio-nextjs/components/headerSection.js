import Link from "next/link";
import React from "react";

export default function HeaderSection(props) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 sm:border-solid border-2 border-black content-center shadow-xl">
            <div className="hidden sm:block sm:col-span-1">
                <img src="/images/mock_icon.jpeg" alt="Profile icon" className="h-16 sm:h-20 md:h-24 lg:h-28 m-2 pl-0"/>
                {/* TODO - Icon here */}
            </div>
            <div className="grid grid-cols-3 text-center text-lg content-center sm:col-span-2">
                <Link href={"./" + props.firstLink} className="m-3 p-3 font-bold text-sm sm:text-md md:text-lg mx-auto rounded-sm uppercase tracking-wide sm:tracking-normal md:text-inherit bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 hover:-translate-y-0.5 transform transition active:bg-cyan-500"><span className="">{props.firstName}</span></Link>
                <Link href={"./" + props.secondLink} className="m-3 p-3 font-bold text-sm sm:text-md md:text-lg mx-auto rounded-sm uppercase tracking-wide sm:tracking-normal md:text-inherit bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 hover:-translate-y-0.5 transform transition active:bg-cyan-500"><span className="">{props.secondName}</span></Link>
                <Link href={"./" + props.thirdLink} className="m-3 p-3 font-bold text-sm sm:text-md md:text-lg mx-auto rounded-sm uppercase tracking-wide sm:tracking-normal md:text-inherit bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 hover:-translate-y-0.5 transform transition active:bg-cyan-500"><span className="">{props.thirdName}</span></Link>
            </div>
        </section>
    );
}