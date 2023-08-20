const TextComponent = function ({ data }) {
    return (
        <div className="mt-2 lg:p-2">
            <ol className="list-none text-sm lg:text-xl">
                {data.stmt.map((eachPt) =>
                    <li className="p-2">{eachPt}</li>
                )}
            </ol>
        </div>
    )
}

/*
TODO
1. Simpler points
2. Credits to icons
3. Company img instead of text in projectCard
*/

export default function ExpHighlights({ data, index }) {
    const path = "/logos/" + data.logo;
    return (
        <main className="">
            <div className="flex md:p-2">
                <div className="flex-shrink-0 my-auto ml-2 mr-4">
                    <img className="mt-2 float-left h-10 sm:h-12 md:h-14 lg:h-16" src={path} alt={data.name} title={data.name} />
                </div>
                <div className="flex-grow my-auto">
                    <p className="ml-4 text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                        {data.name}
                    </p>
                </div>
            </div>
            <TextComponent data={data} />
        </main>
    )
}