import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Contact from './contact';
import Experience from './experience';
import Intro from './intro';
import Project from './project';
import {getSortedExperienceData, getSortedProjectData} from '../lib/project-util'


export default function Home(props) {
  console.log("Here now till")
  console.log(props)
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
  const allExpData = getSortedExperienceData();
  const allProjectData = getSortedProjectData();
  console.log("Now here ")
  console.log(allExpData)
  return {
    props: {
      allExpData,
      allProjectData,
    },
  };
}