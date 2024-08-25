import { appendProject, fillProject } from "./append.js"
import { myDataEs, searchSkill } from "./constants.js"

//getting language
const deviceLang = navigator.language || navigator.userLanguage || "en";
const userLang = deviceLang.split('').slice(0, 2).join('') || "en"

const createP = (text) => {
  const p = document.createElement("p")
  p.textContent = text
  return p
}
const createImg = (src, alt = "") => {
  const img = document.createElement("img")
  img.src = src
  img.alt = alt
  return img
}

const removeSkill = (skill) => {
  const index = searchSkill.indexOf(skill);
  if (index !== -1)
    searchSkill.splice(index, 1);
}
const addSkill = (skill) => {
  if (!searchSkill.includes(skill))
    searchSkill.push(skill);
}

const handleSkill = (skill) => () => {
  const thisSkill = document.getElementById(skill)
  const className = "skill-selected"
  const includesMark = thisSkill.className.includes(className)
  if (includesMark) {
    thisSkill.classList.remove(className)
    removeSkill(skill)
  } else {
    thisSkill.classList.add(className)
    addSkill(skill)
  }
  fillProject(userLang)
}
//certification

class Certification {
  constructor({ title, link, to }) {
    this.title = title
    this.link = link
    this.to = to
  }
  create() {
    const div = document.createElement("div")
    div.className = "certification-box box-standard"
    const h3 = document.createElement("h3")
    h3.textContent = this.title
    div.appendChild(h3)
    if (this.to) {
      const h4 = document.createElement("h4")
      h4.textContent = this.to
      div.appendChild(h4)
    }
    
    const a = document.createElement("a")
    a.href = this.link
    a.target = "_blank"
    a.textContent = "Ver"
    div.appendChild(a)
    return div
  }
}

//about me
class AboutMe {
  constructor({ title, p = [] }) {
    this.title = title
    this.p = p
  }
  create(section) {
    section.className = "about-me"
    section.id = "about-me"
    const h2 = document.createElement("h2")
    h2.textContent = this.title
    section.appendChild(h2)
    this.p.forEach(text => section.appendChild(createP(text)))
    return section
  }
}

//proyects
class Project {
  constructor({ name, info, srcImg, href = "", github, keySkills = [] }) {
    this.name = name
    this.info = info
    this.srcImg = srcImg
    this.href = href
    this.keySkills = keySkills
    this.github = github
  }
  create() {
    const div = document.createElement("div")
    div.className = `box-standard project`
    if (this.srcImg) {
      const img = createImg(this.srcImg, this.info)
      div.appendChild(img)
    }
    const h3 = document.createElement("h3")
    h3.textContent = this.name
    div.appendChild(h3)
    const p = document.createElement("p")
    p.textContent = this.info
    div.appendChild(p)
    const subDiv = document.createElement("div")
    subDiv.className = "project-links"
    if (this.href) {
      const aProject = document.createElement("a")
      aProject.href = this.href
      aProject.target = "_blank"
      aProject.textContent = "Ver Proyecto"
      subDiv.appendChild(aProject)
    }

    const aGithub = document.createElement("a")
    aGithub.href = this.github
    aGithub.target = "_blank"
    aGithub.textContent = "Github"
    subDiv.appendChild(aGithub)
    div.appendChild(subDiv)

    return div
  }
  includesSkill(skills = []) {
    return skills.some(skill => this.keySkills.includes(skill));
  }
  includesAllSkill(skills = []) {
    return skills.every(skill => this.keySkills.includes(skill));
  }
}
class Skill {
  constructor({ title = "", src = "", alt = "", skill, isClickable = true }) {
    this.src = src
    this.title = title
    this.alt = alt
    this.onclick = isClickable
    if (skill.includes(" ")) throw new Error("La skill no debe tener espacios vacios")
    this.skill = skill
  }
  create() {
    const div = document.createElement("div")
    div.className = `box-standard skill`
    div.id = this.skill
    if (this.onclick) div.onclick = handleSkill(this.skill)

    if (this.src) {
      const img = createImg(this.src, this.alt)
      div.appendChild(img)
    }
    if (this.title) {
      const h3 = document.createElement("h3")
      h3.textContent = this.title
      div.appendChild(h3)
    }
    return div
  }
}

class PersonalSkills{
  constructor( title = ""){
    this.title = title
  }
  create(){
    const li = document.createElement("li")
    li.textContent = this.title
    return li
  }
}

export { AboutMe, Project, Skill, Certification,PersonalSkills, userLang }