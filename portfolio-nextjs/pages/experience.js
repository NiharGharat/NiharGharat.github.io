import {getSortedExperienceData, getSortedProjectData} from '../lib/project-util'
import Head from "next/head";
import CompanyCard from '../components/companyCard';
import HeaderSection from '../components/headerSection';

const skillsArray = ["Springboot", "Java", "Python"];

const EachSkill = function({skill}) {
    return (<li key={skill} className='p-1'>{skill}</li>)
};

const AllSkills = function({isHiddenOnSm}) {
    const status = Boolean(isHiddenOnSm)
    console.log(status)
    let com;
    if (status) {
        console.log("True")
        com = (<ul className='hidden sm:flex flex-wrap text-gray-600 text-sm'>
        {skillsArray.map(e => (
            <EachSkill skill={e} />
        ))}
    </ul>)
    } else {
        com = (<ul className='flex sm:hidden flex-wrap text-gray-600 text-sm'>
        {skillsArray.map(e => (
            <EachSkill skill={e} />
        ))}
    </ul>)
    }
    return (
        <>{com}</>
    )
}

export default function Experience(props) {
    return (
        <>
            {/* TODO
            1. Create the cards
            2. Font reponsiveness
            3. Card responsiveness
            4. Extract components
            5. Write correct info data
            6. Implement Link on click to go to card
            7. Till now tech
            */}
            {console.log(props.allExpData)}
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
                        {/* The short desc of work exp if necessary */}
                        {/* TODO - Buttons of Tech like Java, Python, Git, IntelliJ Idea, PyCharm, Docker, AzureBolb, GCP, S3, SFTP, etc. */}
                    </div>
                    <div className="md:col-span-2">
                        {/* The cards */}
                        <section className='text-gray-700 border-2 border-solid p-2 m-2'>
                            <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6'>
                                <div className='col-span-1 text-sm py-2'>
                                    2018-2021
                                </div>
                                <div className='col-span-3 md:col-span-4 lg:col-span-5 sm:bg-blue-200'>
                                    <div className='grid grid-cols-3'>
                                        <div className='col-span-1 text-7xl font-bold text-brand_lti_dark_blue my-auto sm:my-0'>
                                            LTI
                                        </div>
                                        <div className='col-span-2 text-right my-auto align-text-bottom text-gray-600'>
                                            Pune, <span className=' text-2xl font-bold text-gray-700'>India</span>
                                        </div>
                                    </div>
                                    <div className='text-gray-600 text-sm mt-4'>
                                        <ol>
                                            <li>- Part of product engineering team</li>
                                            <li>- Worked on lti big data analytics platform mosaic</li>
                                        </ol>
                                    </div>
                                    <AllSkills isHiddenOnSm />
                                </div>
                            </div>
                            <AllSkills />
                        </section>
                        <CompanyCard company="lti" logo_name="mock_lti_logo.png" baseLocation="Pune" country="India" duration="2018-21" catchPhrase="Trainee -&gt; Senior Dev" />
                        <CompanyCard company="fedex" logo_name="mock_fedex_logo.png" baseLocation="Plano" country="US" duration="Summer 23" catchPhrase="SDE Summer Intern" />
                    </div>
                </section>
            </main>
        </>
    )
}

export async function getStaticProps() {
    // This var is accessible in the porps if passed
    const allExpData = await getSortedExperienceData();
    const allProjectData = await getSortedProjectData();
    return {
      props: {
        allExpData,
        allProjectData,
      },
    };
  }