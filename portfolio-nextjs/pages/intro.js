import Head from "next/head";
import HeaderSection from "../components/headerSection";
import { button_theme_flag_orange, header_link_path_contact, header_link_path_experience, header_link_path_projects, header_link_title_contact, header_link_title_experience, header_link_title_projects, intro_image_main } from "../components/constants";
import { CreditHandler } from "../components/credits";
import HTMLReactParser from "html-react-parser";

const name = "Nihar Gharat";
const introPara1 = "I am a software developer currently based in the US. I am passionate about working on interesting <strong>ideas/projects</strong>."
const introPara2 = "I thoroughly enjoy engaging with complex problems, exploring potential solutions, and crafting well-thought resolutions. I was fortunate enough to have interacted with and be inspired by people from various fields like <strong>designing</strong>, <strong>architecture</strong>, etc.. I try to bring this mindset to the table."
const introPara3 = "I loved working on my <strong>projects</strong>, well that was a part of the reason why I picked them in the first place. Right from removing the mundanity of being assured that my music playlists are backed via the <strong>YouTube Music Playlist Scrapper</strong>, to deep diving in the neural network and data mining with <strong>TailorSweat</strong>, I enjoyed it all."
const pageTitle = "AboutMe Page";

export default function Intro() {
    const profileImagePath = intro_image_main
    let listOfIconsUsed = []
    // Kept empty here

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/portfolio_icon.png" />
            </Head>
            <main className="bg-gray-100 m-2 p-2 mx-auto max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-6xl">
                <HeaderSection firstName={header_link_title_experience} firstLink={header_link_path_experience} secondName={header_link_title_projects} secondLink={header_link_path_projects} thirdName={header_link_title_contact} thirdLink={header_link_path_contact} themeColour={button_theme_flag_orange} />
                <img src={profileImagePath} alt="Profile icon" className="h-96 m-2 mt-6 p-2 sm:p-4 flex items-center justify-center mx-auto w-full object-cover md:hidden" />
                <section className="p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="pt-3">
                        <div className="p-3 text-xl text-gray-700">
                            <div className="text-4xl sm:text-6xl px-3 font-bold text-center">About Me</div>
                            <div className="text-xl pt-4 mt-3 text-center sm:text-left">Hi, I am <span className="font-bold text-3xl">{name}</span></div>
                            <div className="text-sm sm:text-lg mt-4 pt-2 text-justify">{HTMLReactParser(introPara1)}</div>
                            <div className="text-sm sm:text-lg mt-4 pt-2 text-justify">{HTMLReactParser(introPara2)}</div>
                            <div className="text-sm sm:text-lg mt-4 pt-2 text-justify">{HTMLReactParser(introPara3)}</div>
                        </div>
                    </div>
                    <div>
                        <img src={profileImagePath} alt="Profile image" className="hidden md:inline-block mt-6 h-70 bg-gray-100 shadow-lg" />
                    </div>
                </section>
                <CreditHandler listOfCreditLogo={listOfIconsUsed} />
            </main>
        </>
    )
}