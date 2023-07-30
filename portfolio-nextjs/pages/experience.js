import {getAllExperienceData} from '../lib/project-util'
import Head from "next/head";
import CompanyCard from '../components/companyCard';
import HeaderSection from '../components/headerSection';
import { header_link_path_about_me, header_link_path_contact, header_link_path_projects, header_link_title_about_me, header_link_title_contact, header_link_title_projects } from '../components/constants';

export default function Experience(props) {
    return (
        <>
            <Head>
                <title>Nihar Portfolio Work Experience</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-gray-100 m-2 p-2 mx-auto max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-6xl">
                <HeaderSection firstName={header_link_title_about_me} firstLink={header_link_path_about_me} secondName={header_link_title_projects} secondLink={header_link_path_projects} thirdName={header_link_title_contact} thirdLink={header_link_path_contact} />
                {/* Now the main body */}
                <section className="p-3 grid grid-cols-1 md:grid-cols-3 md:gap-2 lg:gap-4">
                    <div className="pt-3 text-xl text-gray-700 col-span-1">
                        <div className="p-3 text-4xl px-3 font-bold text-center">Work Experience</div>
                        {/* TODO Till now tech!!*/}
                        <div className='mx-12 p-3 text-sm border-2 border-gray-800 text-justify'>
                            <div className='mt-2'>I loved to work here. This and that. I like to work in product engineering mainly focused in development</div>
                            <div className='mt-2'>I loved to work here. This and that. I like to work in product engineering mainly focused in development</div>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        {props.allExperienceData.map((eachCompany, index) => (
                            <CompanyCard key={index} skillsArray={eachCompany.skills} company={eachCompany.companyName} baseLocation={eachCompany.baseLocation} country={eachCompany.country} duration={eachCompany.duration} allPoints={eachCompany.companyLoved4Points} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export async function getStaticProps() {
    // This var is accessible in the porps if passed
    const allExperienceData = await getAllExperienceData();
    return {
      props: {
        allExperienceData,
      },
    };
}