import fs from 'fs'
import path from 'path'

const expDirectory = path.join(process.cwd(), 'data/experience')
const projectsDirectory = path.join(process.cwd(), 'data/projects')
const contactDirectory = path.join(process.cwd(), 'data/general')

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
  return retnData;
}

// For contact
export function getAllContactDataFromJson() {
  const fileContents = JSON.parse(fs.readFileSync(contactDirectory + '/contact.json', 'utf-8'));
  return fileContents;
}