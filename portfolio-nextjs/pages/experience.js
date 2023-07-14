import {getSortedExperienceData, getSortedProjectData} from '../lib/project-util'
import Head from "next/head";
import Link from "next/link";
import CompanyCard from '../components/companyCard';
import HeaderSection from '../components/headerSection';

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
                    <div className="sm:px-2 md:col-span-2">
                        {/* The cards */}
                        <CompanyCard company="lti" logo_name="mock_lti_logo.png" baseLocation="Pune" country="India" duration="2018-21" catchPhrase="Trainee -&gt; Senior Dev" />
                        <CompanyCard company="fedex" logo_name="mock_fedex_logo.png" baseLocation="Plano" country="US" duration="Summer 23" catchPhrase="SDE Summer Intern" />
                    </div>
                </section>
            </main>
        </>
    )

    // return (<Layout>
    //     <main>
    //         <ul>
    //         {allExpData.data.map((eachExpData) => (
    //             <li key={eachExpData.id}>
    //                 {eachExpData.title}
    //                 <br />
    //                 {eachExpData.location}
    //                 <br />
    //                 {eachExpData.dateFrom}
    //                 <br />
    //                 {eachExpData.dateTo}
    //                 <br />
    //                 {eachExpData.whyLoved}
    //                 <br />
    //                 <div dangerouslySetInnerHTML={{ __html: eachExpData.contentHtml }} />
    //             </li>
    //         ))}
    //         </ul>
    //     </main>
    // </Layout>)
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