import Head from 'next/head';
import Contact from '../components/contact';
import Experience from '../components/experience';
import Intro from '../components/intro';
import Project from '../components/project';
import {getSortedExperienceData, getSortedProjectData} from '../lib/project-util'

export default function Home(props) {
  return (
    <>
    <Head>
      <title>Nihar</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section>
      <Intro />
      <Experience data={props.allExpData}/>
      <Project data={props.allProjectData}/>
      <Contact />
    </section>
    </>
  )
}

export async function getStaticProps() {
  // This var is accessible in the porps if passed
  const allExpData = await getSortedExperienceData();
  console.log("Here")
  console.log(allExpData)
  console.log("Here")
  const allProjectData = await getSortedProjectData();
  return {
    props: {
      allExpData,
      allProjectData,
    },
  };
}