const TextComponent = function({data}) {
    return (
        <div className="">
            <ol className="p-2 list-disc text-sm">
                {data.stmt.map((eachPt) => 
                    <li>{eachPt}</li>
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

export default function ExpHighlights({data, index}) {
    const isImageLeft = (index % 2) == 0;
    const path = "/logos/" + data.logo;
    return(
        <main className="">
            <div className="flex">
                <div className="flex-shrink-0 my-auto ml-2 mr-4"><img className="float-left h-10" src={path} alt={data.name} title={data.name}/></div>
                    <div className="flex-grow">
                    <p className="ml-4 text-left text-2xl">
                        {data.name}
                    </p>
                </div>
            </div>
            <TextComponent data={data} />
        </main>
    )
}