import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Contact from '../components/contact';
import Experience from '../components/experience';
import Intro from '../components/intro';
import Project from '../components/project';

export default function Home() {
  return (
    <>
      <Intro />
      <Experience />
      <Project />
      <Contact />
    </>
  )
}
