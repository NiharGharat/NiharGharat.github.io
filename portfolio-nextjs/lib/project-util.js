import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark';
import html from 'remark-html';

// Populate the projects from md files

// Populate experience from md files

const expDirectory = path.join(process.cwd(), 'data/experience')
const projectsDirectory = path.join(process.cwd(), 'data/projects')


export async function getSortedExperienceData() {
  // Get all the experience file names
  const fileNames = fs.readdirSync(expDirectory)
  
  const allProjectData = await Promise.all(fileNames.map(async (eachfileName) => {
    const id = eachfileName.replace(/\.md$/, '')
    // Read markdown file as string
    const fullPath = path.join(expDirectory, eachfileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Get the markdown data
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
  }))
  // console.log(allProjectData)
  return allProjectData.sort((a, b) => {
      if (a.dateFrom < b.dateFrom) {
        return 1
      } else {
        return -1
      }
    })
  }

export async function getSortedProjectData() {
  // Get all the experience file names
  const fileNames = fs.readdirSync(projectsDirectory)
  
  const allProjectData = await Promise.all(fileNames.map(async (eachfileName) => {
    const id = eachfileName.replace(/\.md$/, '')
    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, eachfileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Get the markdown data
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
  }))
  // console.log(allProjectData)
  return allProjectData.sort((a, b) => {
      if (a.dateFrom < b.dateFrom) {
        return 1
      } else {
        return -1
      }
    })
  }