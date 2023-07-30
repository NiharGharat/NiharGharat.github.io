import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark';
import html from 'remark-html';

// Populate the projects from md files

// Populate experience from md files

const expDirectory = path.join(process.cwd(), 'data/experience')
const projectsDirectory = path.join(process.cwd(), 'data/projects')


export async function getAllExperienceData() {
  const fileNames = fs.readdirSync(expDirectory)
  const allExpData = await Promise.all(
    fileNames.map(async (eachfileName) => {
      if (path.extname(eachfileName) === ".json") {
        const filePath = path.join(expDirectory, eachfileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
      }
      return null;
  }));
  return allExpData.filter(each => each != null).sort((a, b) => b.order - a.order);
}

export async function getAllProjectData() {
  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjData = await Promise.all(
    fileNames.map(async (eachfileName) => {
      if (path.extname(eachfileName) === ".json") {
        const filePath = path.join(projectsDirectory, eachfileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
      }
      return null;
  }));
  return allProjData.filter(each => each != null).sort((a, b) => a.order - b.order);
}

export function getAllProjectIdsNew() {
  const fileNames = fs.readdirSync(projectsDirectory)
  let allProjData = fileNames.map((eachfileName) => {
      if (path.extname(eachfileName) === ".json") {
        const filePath = path.join(projectsDirectory, eachfileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
      }
      return null;
  })
  .filter(each => each != null)
  .sort((a, b) => a.order - b.order)
  .map((eachProject) => {
    return {
      params: {
        identifier: eachProject.identifier,
      },
    };
  })
  return allProjData;
}

export function getSpecificPostData(identifier) {
  console.log(">>getSpecificPostData")
  console.log(identifier)
  const fileNames = fs.readdirSync(projectsDirectory)
  let allProjData = fileNames.map((eachfileName) => {
      if (path.extname(eachfileName) === ".json") {
        const filePath = path.join(projectsDirectory, eachfileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const jsonContent = JSON.parse(fileContent);
        if (jsonContent.identifier == identifier) {
          return {identifier, jsonContent}
        }
      }
      return null;
  }).filter(each => each != null).at(0).jsonContent;
  const retnData = {
    identifier, 
    allProjData,
  };
  console.log("Pap")
  console.log(retnData);
  return retnData;
}