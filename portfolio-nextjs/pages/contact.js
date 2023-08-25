import Head from "next/head";
import { getAllContactDataFromJson } from "../lib/project-util";
import { Channel } from "../components/semi/channel";
import Script from "next/script";
import Clipboard from 'react-clipboard.js';
import HeaderSection from "../components/headerSection";
import { button_theme_flag_blue, header_link_path_about_me, header_link_path_experience, header_link_path_projects, header_link_title_about_me, header_link_title_experience, header_link_title_projects, portfolio_logo_name } from "../components/constants";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreditHandler } from "../components/credits";

const dataLine1 = "If you have an opportunity to work on some innovative product/idea, feel free to connect";
const dataLine2 = "Drop me a line, contact me through any of the below mentioned channels!";
const greetLine = "Cheers!"

const showToastMessage = function () {
    toast.success('Copied!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        hideProgressBar: true,
    });
}

const pageTitle = "Contact Page";

export default function Contact(props) {
    let allLogoList = []
    props.allContactData.allLinks.forEach(each => allLogoList.push(each.logo))
    allLogoList.push(portfolio_logo_name)
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <Script src="dist/clipboard.min.js" />
                <link rel="icon" href="/portfolio_icon.png" />
            </Head>
            <main className="bg-gray-100 m-2 p-2 mx-auto max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-6xl text-gray-700">
                <HeaderSection firstName={header_link_title_about_me} firstLink={header_link_path_about_me} secondName={header_link_title_experience} secondLink={header_link_path_experience} thirdName={header_link_title_projects} thirdLink={header_link_path_projects} themeColour={button_theme_flag_blue} />
                <section className='p-2 mt-2 text-4xl px-3 font-bold text-center'>
                    Contact
                </section>
                <section className="">
                    <div className="text-xl lg:text-2xl tracking-tight px-6">
                        {dataLine1}
                    </div>
                    <div className="mt-6 p-2 text-lg lg:text-xl">
                        {dataLine2}
                    </div>
                    <div className="p-2 text-lg lg:text-xl">
                        {greetLine}
                    </div>
                </section>
                <section className="">
                    <div className="p-2 text-sm lg:text-lg">
                        Click to copy my email to your clipboard! - <Clipboard title="Copy my email to your clipboard" data-clipboard-text={props.allContactData.email} className="mx-2 text-lg font-bold text-blue-900 hover:underline tracking-tight" onClick={showToastMessage}>{props.allContactData.email}</Clipboard>
                    </div>
                    <div className="p-2 text-sm lg:text-lg">
                        <Link className="text-lg font-bold text-blue-900 hover:underline tracking-tight" target="_blank" rel='noopener noreferrer' href={props.allContactData.resume}>Checkout my resume!</Link>
                    </div>
                    <ul className="mt-2 flex flex-wrap my-auto">
                        {props.allContactData.allLinks.map(eachChannel =>
                            <Channel key={eachChannel.title} data={eachChannel} />
                        )}
                    </ul>
                </section>
                <section className="mt-4 text-xs text-gray-400">
                    Credits-
                    <ul>
                        <li>App created on <span className="font-bold">nextjs/tailwindcss</span>, Deployed on <span className="font-bold">Vercel</span></li>
                        <li>Icons from <Link className="font-bold hover:underline " href="https://www.flaticon.com/" target="_blank" rel='noopener noreferrer' >flaticon</Link></li>
                    </ul>
                </section>
                <ToastContainer limit={3} />
                <CreditHandler listOfCreditLogo={allLogoList} requiredMargins="mt-4"/>
            </main>
        </>)
}

export function getStaticProps() {
    const allContactData = getAllContactDataFromJson();
    return {
        props: {
            allContactData
        },
    };
}