import Head from "next/head";
import HeaderSection from "../components/headerSection";
import { button_theme_flag_brown, button_theme_flag_orange, header_link_path_contact, header_link_path_experience, header_link_path_projects, header_link_title_contact, header_link_title_experience, header_link_title_projects } from "../components/constants";

export default function Intro() {
    return (
        <>
        <Head>
            <title>AboutMe</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-gray-100 m-2 p-2 mx-auto max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-6xl">
            <HeaderSection firstName={header_link_title_experience} firstLink={header_link_path_experience} secondName={header_link_title_projects} secondLink={header_link_path_projects} thirdName={header_link_title_contact} thirdLink={header_link_path_contact} themeColour={button_theme_flag_orange}/>
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