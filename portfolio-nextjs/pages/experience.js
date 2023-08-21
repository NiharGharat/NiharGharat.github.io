import {getAllExperienceData} from '../lib/project-util'
import Head from "next/head";
import CompanyCard from '../components/companyCard';
import HeaderSection from '../components/headerSection';
import { button_theme_flag_green, button_theme_flag_mint, header_link_path_about_me, header_link_path_contact, header_link_path_projects, header_link_title_about_me, header_link_title_contact, header_link_title_projects } from '../components/constants';
import Link from 'next/link';

const pageTitle = "Nihar Portfolio Work Experience"
const firstPara = "Each of these contributed to what I am now. I enjoyed working/hacking while at work at these places!";
const secondPara = "I try to bring justice to what I do, and I always try to go above and beyond to implement and think about new ideas which can be included. This is how I always was!";

export default function Experience(props) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-gray-100 m-2 p-2 mx-auto max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-6xl">
                <HeaderSection firstName={header_link_title_about_me} firstLink={header_link_path_about_me} secondName={header_link_title_projects} secondLink={header_link_path_projects} thirdName={header_link_title_contact} thirdLink={header_link_path_contact} themeColour={button_theme_flag_mint}/>
                {/* Now the main body */}
                <section className="p-3 grid grid-cols-1 md:grid-cols-3 md:gap-2 lg:gap-4">
                    <div className="pt-3 text-xl text-gray-700 col-span-1">
                        <div className="p-3 text-4xl px-3 font-bold text-center">Work Experience</div>
                        {/* TODO Till now tech!!*/}
                        <div className='mx-12 p-3 text-sm border-2 border-gray-800 text-justify'>
                            <div className='mt-2'>{firstPara}</div>
                            <div className='mt-2'>{secondPara}</div>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        {props.allExperienceData.map((eachCompany, index) => (
                            <Link key={eachCompany.identifier} id={eachCompany.identifier} href={"./experience/" + eachCompany.identifier}><CompanyCard key={index} skillsArray={eachCompany.skills} data={eachCompany} company={eachCompany.companyName} baseLocation={eachCompany.baseLocation} country={eachCompany.country} duration={eachCompany.duration} allPoints={eachCompany.companyLoved4Points} /></Link>
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