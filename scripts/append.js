import { myDataEn, myDataEs, searchSkill } from "./constants.js"
import { AboutMe } from "./modules.js"


function appendAboutMe(aboutMe) {
  if(!aboutMe) return
  const section = document.getElementById("about-me")
  section.innerHTML = ""
  const newAboutMe = new AboutMe(aboutMe)
  newAboutMe.create(section)
}

function appendSkills(skillArr = [], title = "") {
  if(!skillArr) return
  const h2 = document.getElementById("title-skills")
  h2.textContent = title
  const skills = document.getElementById("skill-container")
  skills.innerHTML = "";
  skillArr.forEach(skill => skills.appendChild(skill.create()))
}

function appendProject(projectArr = [],title = "Project") {
  if(!projectArr) return
  const titleProject = document.getElementById("projects-title")
  titleProject.textContent=title
  const projects = document.getElementById("projects-container")
  projects.innerHTML = ""
  if (searchSkill.length <= 0) return projectArr.forEach(project => {
    projects.appendChild(project.create())
  })
  return projectArr.forEach(project => {
    if (project.includesSkill(searchSkill))
      return projects.appendChild(project.create())
  })
}

function appendCertification(certificationArr = [], title = "") {
  if(!certificationArr) return
  const h2 = document.getElementById("title-certification")
  h2.textContent = title
  const certificationsContainer = document.getElementById("certification-container")
  certificationsContainer.innerHTML = "";
  certificationArr.forEach(certification => certificationsContainer.appendChild(certification.create()))
}
function fillProject(userLang){
  switch (userLang) {
    case ("es"):
      appendProject(myDataEs.project)
      break;
    case ("en"):
      appendProject(myDataEn.project)
      break;
    default:
      appendProject(myDataEn.project)
  }
}
function appendPersonalSkills(pSkillArr = [], title = "") {
  if(!pSkillArr) return
  const h2 = document.getElementById("title-personal-skills")
  h2.textContent = title
  const skills = document.getElementById("personal-skills-container")
  skills.innerHTML = "";
  pSkillArr.forEach(skill => skills.appendChild(skill.create()))
}
export {appendAboutMe,appendProject,appendSkills,fillProject, appendPersonalSkills,appendCertification}