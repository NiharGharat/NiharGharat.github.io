import Link from "next/link";

const TitleComponent = function (props) {
    return (
        <>
            {props.data}
        </>
    );
}

// This was common and hence was extracted out
export const HeadingSection = function (props) {
    return (
        <section className="p-2 grid grid-cols-5 hover:shadow-lg hover:text-gray-800 hover:shadow-gray-300 active:shadow-gray-300 transition duration-300 ease-in-out">
            {/* {props.specificExpData.fileContents.companyName} */}
            <TitleComponent data={props.titleContent} />
            {/* <img className="h-24 col-span-4 text-gray-700 justify-self-start text-4xl my-auto" src={props.data.path} alt={props.data.alt} title={props.data.title} /> */}
            <div className='hidden sm:grid my-auto col-span-1 justify-self-end'>
                <Link href={props.data.backPageId}>
                    <img title="Go Back" className="pr-4 h-6 inline-block hover:scale-150 transition ease-in-out duration-300" src="/logos/mock_nav_back.png" alt="Back navigation" />
                </Link>
            </div>
        </section>
    )
}

{/* <section className='p-2 grid grid-cols-5 hover:shadow-lg hover:text-gray-800 hover:shadow-gray-300 active:shadow-gray-300 transition duration-300 ease-in-out'>
    <div className='col-span-4 text-gray-700 justify-self-start text-4xl md:text-5xl lg:text-6xl tracking-normal my-auto'>
        {projectName}
    </div>
    <div className='my-auto col-span-1 justify-self-end'>
        <Link href={backPageId}>
            <img title="Go Back" className="pr-4 h-6 inline-block hover:scale-150 transition ease-in-out duration-300" src="/logos/mock_nav_back.png" alt="Back navigation" />
        </Link>
    </div>
</section> */}