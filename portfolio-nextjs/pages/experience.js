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
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 sm:border-solid border-2 border-black content-center shadow-xl">
                    <div className="hidden sm:block sm:col-span-1">
                        <img src="/images/mock_icon.jpeg" alt="Profile icon" className="h-16 sm:h-20 md:h-24 lg:h-28 m-2 pl-0"/>
                        {/* TODO - Icon here */}
                    </div>
                    <div className="grid grid-cols-3 text-center text-lg content-center sm:col-span-2">
                        <Link href={"./intro"} className="m-3 p-3 font-bold text-sm sm:text-md md:text-lg rounded-sm uppercase tracking-wide sm:tracking-normal md:text-inherit bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 hover:-translate-y-0.5 transform transition active:bg-cyan-500"><span className="">About Me</span></Link>
                        <Link href={"./project"} className="m-3 p-3 font-bold text-sm sm:text-md md:text-lg rounded-sm uppercase tracking-wide sm:tracking-normal md:text-inherit bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 hover:-translate-y-0.5 transform transition active:bg-cyan-500"><span className="">Projects</span></Link>
                        <Link href={"./contact"} className="m-3 p-3 font-bold text-sm sm:text-md md:text-lg rounded-sm uppercase tracking-wide sm:tracking-normal md:text-inherit bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 hover:-translate-y-0.5 transform transition active:bg-cyan-500"><span className="">Contact</span></Link>
                    </div>
                </section>
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
                    </div>
                    <div className="sm:px-2 md:col-span-2">
                        {/* The cards */}
                        <div className="bg-gray-200 mt-4 p-4 pb-2 text-xl shadow-lg shadow-gray-400 hover:-translate-y-1 transform transition active:bg-gray-300">
                            <div className='grid grid-cols-3'>
                                <div className='col-span-1'>
                                    <img className="h-18" src={"/logos/mock_lti_logo_2.png"} alt="LTI company logo"/>
                                </div>
                                <div className='col-span-2 my-auto text-right'>
                                    <div className='text-2xl text-gray-700'>Pune, <span className='text-3xl font-bold'>India</span></div>
                                    <div className='text-lg text-gray-600'>2018-21</div>
                                </div>
                            </div>
                            <div className='mt-4 text-right text-gray-700 text-xl'>Trainee -&gt; Senior Dev</div>
                            <div className='mt-2 text-sm text-right text-gray-700'>Find out More...</div>
                        </div>
                        <div className="bg-gray-200 mt-4 p-4 pb-2 text-xl shadow-lg shadow-gray-400 hover:-translate-y-1 transform transition  active:bg-gray-300">
                            <div className='grid grid-cols-3'>
                                <div className='col-span-1'>
                                    <img className="h-18" src={"/logos/mock_fedex_logo.png"} alt="Fedex company logo"/>
                                </div>
                                <div className='col-span-2 my-auto text-right'>
                                    <div className='text-2xl text-gray-700'>Plano, <span className='text-3xl font-bold'>Texas</span></div>
                                    <div className='text-lg text-gray-600'>Summer 23</div>
                                </div>
                            </div>
                            <div className='mt-4 text-right text-gray-700 text-xl'>SDE Summer Intern</div>
                            <div className='mt-2 text-sm text-right text-gray-700'>Find out More...</div>
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