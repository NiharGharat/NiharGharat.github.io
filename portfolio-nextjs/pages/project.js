import Head from "next/head";
import HeaderSection from "../components/headerSection";
import {getAllProjectData} from '../lib/project-util';
import ProjectCard from "../components/projectCard";
import Link from "next/link";
import { header_link_path_about_me, header_link_path_contact, header_link_path_experience, header_link_title_about_me, header_link_title_contact, header_link_title_experience } from "../components/constants";
import { Credits } from "../components/credits";

const pageTitle = "Nihar Projects";
const pageIntroPara1 = "I sort of manifest myself through my work and my projects";
const pageIntroPara2 = "I loved working on each one of these. Ranging from Java, to Python, to Pandas, to Keras. Academic, non-academic";

export default function Project(props) {
    return (
        <>
            {/* 
            TODO
            1. Project pictures
            5. Photos jsonArray in data of the project pics if any
            
            Done
            6. Each project seperate page with back option
            7. Spell check the data
            3. Responsive
            4. Accurate info in json
            5. Responsive Cards
            2. Tech stack
            */}
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-gray-100 m-2 p-2 mx-auto max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-6xl">
                <HeaderSection firstName={header_link_title_about_me} firstLink={header_link_path_about_me} secondName={header_link_title_experience} secondLink={header_link_path_experience} thirdName={header_link_title_contact} thirdLink={header_link_path_contact} />
                <section className="p-3 grid grid-cols-1 md:grid-cols-3 md:gap-2 lg:gap-4">
                    <div className="pt-3 text-xl text-gray-700 col-span-1">
                        <div className="p-3 text-4xl px-3 font-bold text-center">Projects</div>
                        <div className='mx-12 p-3 text-sm border-2 border-gray-800 text-justify'>
                            <div className='mt-2'>{pageIntroPara1}</div>
                            <div className='mt-2'>{pageIntroPara2}</div>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        {props.allProjectData.map((eachProject) => (
                            <Link key={eachProject.identifier} id={eachProject.identifier} href={"./project/" + eachProject.identifier}><ProjectCard data={eachProject} key={eachProject.identifier} /></Link>
                        ))}
                    </div>
                </section>
                <Credits />
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