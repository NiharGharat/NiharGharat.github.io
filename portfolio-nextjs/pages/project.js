import Head from "next/head";
import HeaderSection from "../components/headerSection";
import {getAllProjectData} from '../lib/project-util'
import ProjectCard from "../components/projectCard";

export default function Project(props) {
    return (
        <>
            {/* 
            TODO
            1. Link, Para and multiple pictures
            3. Responsive
            4. Accurate info in json
            
            Done
            5. Responsive Cards
            2. Tech stack
            */}
            <Head>
                <title>Nihar Projects</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-gray-100 m-2 p-2 mx-auto max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-6xl">
                <HeaderSection firstName="About Me" firstLink="intro" secondName="Experience" secondLink="experience" thirdName="Contact" thirdLink="contanct" />
                <section className="p-3 grid grid-cols-1 md:grid-cols-3 md:gap-2 lg:gap-4">
                    <div className="pt-3 text-xl text-gray-700 col-span-1">
                        <div className="p-3 text-4xl px-3 font-bold text-center">Projects</div>
                        <div className='mx-12 p-3 text-sm border-2 border-gray-800 text-justify'>
                            <div className='mt-2'>I loved to work here. This and that. I like to work in product engineering mainly focused in development</div>
                            <div className='mt-2'>I loved to work here. This and that. I like to work in product engineering mainly focused in development</div>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                    {/* <ProjectCard title="YouTube playlist backup" mainLogo="/logos/mock_youtube_logo.png" tagLine="Developed a Java based project which will do multithreaded http requests and backup your playlists, cronned and dockerised" techStack={skillsForProject}/> */}
                        {props.allProjectData.map((eachProject, index) => (
                            <ProjectCard data={eachProject} key={index} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export async function getStaticProps() {
    // This var is accessible in the porps if passed
    const allProjectData = await getAllProjectData();
    return {
      props: {
        allProjectData,
      },
    };
  }