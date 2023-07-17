import Head from "next/head";
import HeaderSection from "../components/headerSection";

export default function Project(props) {
    return (
        <>
            <Head>
                <title>Nihar Portfolio Work Experience</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-gray-100 m-2 p-2 mx-auto max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-6xl">
                <HeaderSection firstName="About Me" firstLink="intro" secondName="Experience" secondLink="experience" thirdName="Contact" thirdLink="contanct" />
                {/* Now the main body */}
                <section className="p-3 grid grid-cols-1 md:grid-cols-3 md:gap-2 lg:gap-4">
                    <div className="pt-3 text-xl text-gray-700 col-span-1">
                        <div className="p-3 text-4xl px-3 font-bold text-center">Projects</div>
                        {/* TODO */}
                        <div className='mx-12 p-3 text-sm border-2 border-gray-800 text-justify'>
                            <div className='mt-2'>I loved to work here. This and that. I like to work in product engineering mainly focused in development</div>
                            <div className='mt-2'>I loved to work here. This and that. I like to work in product engineering mainly focused in development</div>
                        </div>
                        {/* The short desc of work exp if necessary */}
                    </div>
                    <div className="sm:px-2 md:col-span-2">
                        {/* The cards */}
                        <div className="bg-gray-200 mt-4 p-4 pb-2 text-xl shadow-lg shadow-gray-400 hover:-translate-y-1 transform transition active:bg-gray-300">
                            <div className='grid grid-cols-5'>
                                <div className='col-span-2'>
                                    <img className="h-18" src={"/logos/mock_youtube_logo.png"} alt="Youtube project logo - Downloaded from https://www.vecteezy.com/png/18930572-youtube-logo-png-youtube-icon-transparent"/>
                                </div>
                                <div className='col-span-3 text-right'>
                                    <div className='text-lg text-gray-700 font-bold'>Youtube Playlist backup</div>
                                    <div className='text-sm text-gray-600'>Github(private)</div>
                                </div>
                            </div>
                            <div className="">
                                <span className='p-2 text-sm text-gray-600'>Java</span>
                                <span className='p-2 text-sm text-gray-600'>SpringBoot</span>
                                <span className='p-2 text-sm text-gray-600'>Cronned</span>
                                <span className='p-2 text-sm text-gray-600'>Dockerised</span>
                            </div>
                            <div className='mt-4 text-right text-gray-700 text-xl'>Trainee -&gt; Senior Dev</div>
                            <div className='mt-2 text-sm text-right text-gray-700'>Find out More...</div>
                        </div>
                        
                    </div>
                </section>
            </main>
        </>
    )
}