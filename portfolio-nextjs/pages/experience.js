import {getSortedExperienceData, getSortedProjectData} from '../lib/project-util'
import Head from "next/head";
import Link from "next/link";

export default function Experience(props) {
    return (
        <>
            {/* TODO
            1. Create the cards
            2. Font reponsiveness
            3. Card responsiveness
            4. 
            */}
            {console.log(props.allExpData)}
            <Head>
                <title>Work Experience</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-gray-100 m-6 p-2 mx-auto max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-5xl">
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 sm:border-solid border-2 border-black content-center shadow-xl">
                    <div className="hidden sm:block sm:col-span-1">
                        <img src="/images/mock_icon.jpeg" alt="Profile icon" className="h-16 sm:h-20 md:h-24 lg:h-28 m-2 pl-0"/>
                        {/* TODO - Icon here */}
                    </div>
                    <div className="grid grid-cols-3 text-center text-lg content-center sm:col-span-2">
                        <Link href={"./intro"} className="m-3 p-3 font-bold text-sm sm:text-md md:text-lg rounded-sm uppercase tracking-wide sm:tracking-normal md:text-inherit bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 hover:-translate-y-0.5 transform transition active:bg-cyan-500"><span className="">AboutMe</span></Link>
                        <Link href={"./projects"} className="m-3 p-3 font-bold text-sm sm:text-md md:text-lg rounded-sm uppercase tracking-wide sm:tracking-normal md:text-inherit bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 hover:-translate-y-0.5 transform transition active:bg-cyan-500"><span className="">Projects</span></Link>
                        <Link href={"./contact"} className="m-3 p-3 font-bold text-sm sm:text-md md:text-lg rounded-sm uppercase tracking-wide sm:tracking-normal md:text-inherit bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 hover:-translate-y-0.5 transform transition active:bg-cyan-500"><span className="">Contact</span></Link>
                    </div>
                </section>
                {/* Now the main body */}
                <section className="p-3 grid grid-cols-1 md:grid-cols-3">
                    <div className="pt-3 text-xl text-gray-700 col-span-1">
                        <div className="p-3 text-4xl sm:text-6xl px-3 font-bold text-center">Work Experience</div>
                        {/* The short desc of work exp if necessary */}
                    </div>
                    <div className="md:col-span-2">
                        {/* The cards */}
                        <div className="bg-cyan-500">
                            {/* Icon of the company */}
                            <div className="grid grid-cols-3 content-center">
                                <img className="h-20 p-4 col-span-1 my-auto" src={"/logos/mock_lti_logo.png"} alt="LTI company logo"/>
                                <div className="col-span-2 pl-4 p-2 my-auto text-3xl">LnT Infotech</div>
                            </div>
                            <div className="grid col-span-3">
                                <div className="col-span-1">Senior Software Developer, Product Engineering</div>
                            </div>
                            <div className="grid grid-cols-3 justify-between">
                                <div className="col-span-1 text-sm">
                                    Pune, India
                                </div>
                                <div className="col-span-2 text-sm">
                                    April, 2018 - August 2021
                                </div>
                            </div>
                            
                            <div>
                                Part of product engineering team MOSAIC. Was working on connector framework. First job, got to learn a lot
                            </div>
                        </div>
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