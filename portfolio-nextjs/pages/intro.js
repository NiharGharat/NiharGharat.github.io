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
            <section className="grid grid-cols-3 border-solid border-2 border-black">
                <div className="p-3">
                    <img src="/images/mock_icon.jpeg"  alt="Profile icon" className="h-12"/>
                    {/* TODO - Icon here */}
                </div>
                <div className="p-3 text-center text-4xl font-bold">
                    {/* TODO - This can be clickable in the future which leads to Musin */}
                    <div>Nihar Gharat</div>
                    <div className="text-xs font-normal">software developer</div>

                </div>
                <div className="inline-block text-center align-middle">
                    <span>E</span>
                    <span>P</span>
                    <span>C</span>
                </div>
                {/* <div className="p-3 text-center grid grid-cols-3 content-center">
                    <Link href={"./experience"} className="rounded-full h-7 w-7 bg-blue-400"><div className="">E</div></Link>
                    <Link href={"./projects"} className="rounded-full h-7 w-7 bg-blue-400"><div className="">P</div></Link>
                    <Link href={"./contact"} className="rounded-full h-7 w-7 bg-blue-400"><div className="">C</div></Link>
                </div> */}
            </section>
            <section className="p-3 grid grid-cols-2 gap-4">
                <div className="pt-3 grid grid-rows-2">
                    <div className="px-3 text-xl font-bold">
                        {/* #/home/nihar/aboutMe */}
                    </div>
                    <div className="p-3 text-2xl text-gray-700 border-solid border-2 border-l-gray-800 border-b-gray-800 border-r-gray-100 border-t-gray-100">
                        <div>hi, I am <span className="font-bold text-gray-800 text-4xl">Nihar</span></div>
                        <div className="text-xl mt-2">I am a backend software developer currently based in US. I am passionate about working on interesting ideas/projects.</div>
                        <div className="text-xl mt-2"><Link href="#">Check out my work</Link></div>
                    </div>
                </div>
                <div>
                    <img src={"/images/mock_intro.jpeg"} alt="Profile image" className="h-70 shadow-xl"/>
                </div>
            </section>
        </main>
        </>
    )
}