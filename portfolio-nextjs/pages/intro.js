import Link from "next/link";
import Image from 'next/image';
import Head from "next/head";

export default function Intro() {
    return (
        <>
        <Head>
            <title>AboutMe</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-gray-100 m-3">
            <section className="grid grid-cols-2 gap-4 border-solid border-2 border-black content-center shadow-lg">
                <div className="">
                    <img src="/images/mock_icon.jpeg" alt="Profile icon" className="h-16 m-2 pl-2"/>
                    {/* TODO - Icon here */}
                </div>
                <div className="grid grid-cols-3 text-center text-lg content-center">
                    <span className="m-3 p-3 bg-indigo-300"><Link href={"./experience"}>Experience</Link></span>
                    <span className="m-3 p-3 bg-indigo-400"><Link href={"./project"}>Projects</Link></span>
                    <span className="m-3 p-3 bg-indigo-500"><Link href={"./contact"}>Contact</Link></span>
                </div>
            </section>
            <section className="p-3 grid grid-cols-2 gap-4">
                <div className="pt-3">
                    <div className="p-3 text-xl space-y-2 text-gray-700">
                        <div className="text-6xl font-bold">About Me</div>
                        <div className="pt-4">Hi, I am <span className="font-bold text-3xl">Nihar Gharat</span></div>
                        <div className="text-lg pt-2">I am a backend software developer currently based in US. I am passionate about working on interesting ideas/projects.</div>
                        <div className="text-lg pt-2">I thoroughly enjoy engaging with complex problems, exploring potential solutions, and crafting well-thought-out resolutions. Adopting a designer's mindset, I approach every challenge with creativity and attention to detail. Through fortunate interactions with individuals in diverse fields such as Designing and Architecture, I found a genuine connection. I bring this unique perspective and problem-solving approach to the forefront.</div>
                        <div className="text-lg pt-2">I loved working on my projects, well that was a part of the reason why I picked them in the first place. Right from removing the mundanity to be assured of my music playlists being backed via the youtubeMusic Playlist Scrapper, to diving deep in the neural network and data mining with TailorSweat, I enjoyed it all.</div>
                        <div className="mt-4 inline-block bg-indigo-400 rounded-lg px-4 py-2 tracking-tighter"><Link href="#">Check out my work</Link></div>
                    </div>
                </div>
                <div>
                    <img src={"/images/mock_intro_2.jpeg"} alt="Profile image" className="mt-6 h-70 bg-gray-100 shadow-lg"/>
                </div>
            </section>
        </main>
        </>
    )
}