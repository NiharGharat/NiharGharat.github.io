import Link from "next/link";
import Image from 'next/image';
import Head from "next/head";

export default function Intro() {
    return (
        <>
        {/* TODO
        1. Colour of Buttons match theme
        2. Hover effects on buttons
        3. Responsive
        4. Logo
        5. Responsive fonts sizes
        6. Get the profile pic advance
        */}
        <Head>
            <title>AboutMe</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-gray-100 m-6 p-2 mx-auto max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-5xl">
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 sm:border-solid border-2 border-black content-center shadow-xl">
                <div className="hidden sm:block sm:col-span-1">
                    <img src="/images/mock_icon.jpeg" alt="Profile icon" className="h-16 sm:h-20 md:h-24 lg:h-28 m-2 pl-0"/>
                    {/* TODO - Icon here */}
                </div>
                <div className="grid grid-cols-3 text-center text-lg content-center sm:col-span-2">
                    <Link href={"./experience"} className="m-3 p-3 font-bold text-sm sm:text-md md:text-lg rounded-sm uppercase tracking-wide sm:tracking-normal md:text-inherit bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 hover:-translate-y-0.5 transform transition active:bg-cyan-500"><span className="">Experience</span></Link>
                    <Link href={"./projects"} className="m-3 p-3 font-bold text-sm sm:text-md md:text-lg rounded-sm uppercase tracking-wide sm:tracking-normal md:text-inherit bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 hover:-translate-y-0.5 transform transition active:bg-cyan-500"><span className="">Projects</span></Link>
                    <Link href={"./contact"} className="m-3 p-3 font-bold text-sm sm:text-md md:text-lg rounded-sm uppercase tracking-wide sm:tracking-normal md:text-inherit bg-cyan-400 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 hover:-translate-y-0.5 transform transition active:bg-cyan-500"><span className="">Contact</span></Link>
                </div>
            </section>
            <img src="/images/mock_intro_2.jpeg" alt="Profile icon" className="h-96 m-2 mt-6 p-2 sm:p-4 flex items-center justify-center mx-auto w-full object-cover md:hidden"/>
            <section className="p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="pt-3">
                    <div className="p-3 text-xl text-gray-700">
                        <div className="text-4xl sm:text-6xl px-3 font-bold text-center">About Me</div>
                        <div className="text-xl pt-4 mt-3 text-center sm:text-left">Hi, I am <span className="font-bold text-3xl">Nihar Gharat</span></div>
                        <div className="text-sm sm:text-lg mt-4 pt-2 text-justify">I am a backend software developer currently based in US. I am passionate about working on interesting ideas/projects.</div>
                        <div className="text-sm sm:text-lg mt-4 pt-2 text-justify">I thoroughly enjoy engaging with complex problems, exploring potential solutions, and crafting well-thought-out resolutions. Adopting a designer's mindset, I approach every challenge with creativity and attention to detail. Through fortunate interactions with individuals in diverse fields such as Designing and Architecture, I found a genuine connection. I bring this unique perspective and problem-solving approach to the forefront.</div>
                        <div className="text-sm sm:text-lg mt-4 pt-2 text-justify">I loved working on my projects, well that was a part of the reason why I picked them in the first place. Right from removing the mundanity to be assured of my music playlists being backed via the youtubeMusic Playlist Scrapper, to diving deep in the neural network and data mining with TailorSweat, I enjoyed it all.</div>
                    </div>
                </div>
                <div>
                    <img src={"/images/mock_intro_2.jpeg"} alt="Profile image" className="hidden md:inline-block mt-6 h-70 bg-gray-100 shadow-lg"/>
                </div>
            </section>
        </main>
        </>
    )
}