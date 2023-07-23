import {getAllProjectIdsNew, getSpecificPostData} from '../../lib/project-util';

export default function Project({item}) {
    console.log(item.specificPostData)
    return (
        <>Hi</>
    );
}

export async function getStaticPaths() {
    const paths = await getAllProjectIdsNew();
    console.log(paths)
    console.log("Here")
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    console.log("HiHi")
    const specificPostData = await getSpecificPostData(params.id);
    console.log(specificPostData);
    console.log("Hi")
    return {
      props: {
        item: specificPostData,
      },
    };
}