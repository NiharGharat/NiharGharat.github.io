import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Populate the projects from md files

// Populate experience from md files

const expDirectory = path.join(process.cwd(), 'data/experience')
const projectsDirectory = path.join(process.cwd(), 'data/projects')

export function getSortedExperienceData() {
    // Get all the experience file names
    console.log(expDirectory);
    const fileNames = fs.readdirSync(expDirectory)
    console.log(fileNames)
    const allExpData = fileNames.map(eachfileName => {

        const id = eachfileName.replace(/\.md$/, '')
        // Read markdown file as string
        const fullPath = path.join(expDirectory, eachfileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
    
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)
    
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    console.log(allExpData)
    return allExpData.sort((a, b) => {
        if (a.dateFrom < b.dateFrom) {
          return 1
        } else {
          return -1
        }
      })
}

export function getSortedProjectData() {
    // Get all the experience file names
    console.log(projectsDirectory);
    const fileNames = fs.readdirSync(projectsDirectory)
    
    const allProjectData = fileNames.map(eachfileName => {

        const id = eachfileName.replace(/\.md$/, '')
        // Read markdown file as string
        const fullPath = path.join(projectsDirectory, eachfileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
    
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)
    
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    console.log(allProjectData)
    return allProjectData.sort((a, b) => {
        if (a.dateFrom < b.dateFrom) {
          return 1
        } else {
          return -1
        }
      })
}