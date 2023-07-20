import {getSortedExperienceData, getSortedProjectData, getAllExperienceData} from '../lib/project-util'
import Head from "next/head";
import CompanyCard from '../components/companyCard';
import HeaderSection from '../components/headerSection';

export default function Experience(props) {
    const skillsArrayLti = ["SpringBoot", "Java", "Python"]
    const skillsArrayFedex = ["SpringJpa", "Dao", "JMS"]
    return (
        <>
            {/* TODO
            5. Write correct info data
            6. Implement Link on click to go to card
            12. Externalise company logo css

            Done
            11. Externalise CompanySkills, CompanyLocation, CompanyNameWithCss, CompanyCountry, CompanyDuration, Company 4 bullet points
            1. Create the cards
            2. Font reponsiveness
            3. Card responsiveness
            4. Extract components
            7. Till now tech
            */}
            {console.log(props.allExperienceData)}
            {/* {console.log(data.skills)} */}
            <Head>
                <title>Nihar Portfolio Work Experience</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-gray-100 m-2 p-2 mx-auto max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-6xl">
                <HeaderSection firstName="About Me" firstLink="intro" secondName="Projects" secondLink="project" thirdName="Contact" thirdLink="contanct" />
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
                        {props.allExperienceData.map(eachCompany => (
                            <CompanyCard skillsArray={eachCompany.skills} company={eachCompany.companyName} baseLocation={eachCompany.baseLocation} country={eachCompany.country} duration={eachCompany.duration} allPoints={eachCompany.companyLoved4Points} />
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
    const allExpData = await getSortedExperienceData();
    const allProjectData = await getSortedProjectData();
    return {
      props: {
        allExperienceData,
        allExpData,
        allProjectData,
      },
    };
  }