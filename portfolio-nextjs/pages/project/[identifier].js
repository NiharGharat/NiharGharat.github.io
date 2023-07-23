import {getAllProjectIdsNew, getSpecificPostData} from '../../lib/project-util';

export default function Project({specificPostData}) {
    console.log("Inside actual impl");
    console.log(specificPostData);
    return (
        <>Hi</>
    );
}

export const getStaticPaths = async () => {
    const thePaths = getAllProjectIdsNew();
    const responseToReturn = {
        paths: thePaths,
        fallback: true,
    }
    console.log(responseToReturn.paths[0].params)
    return responseToReturn;
}

export async function getStaticProps(props) {
    console.log("HiHi")
    // console.log(props.params)
    const specificPostData = getSpecificPostData(props.params.identifier);
    // console.log(specificPostData);
    console.log("Hi")
    return {
      props: {
        specificPostData
      }
    };
}