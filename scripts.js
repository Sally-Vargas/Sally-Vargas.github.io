import { appendSkills, appendProject, appendAboutMe, appendCertification, appendPersonalSkills } from "./scripts/append.js";
import { myDataEn, myDataEs } from "./scripts/constants.js";
import { userLang } from "./scripts/modules.js";

function printData(myData, 
  { skillTitle = "Skills",
    project="project",
  certificationTitle = "Certifications", 
  personalSkillTitle = "Personal Skill" }) {
  appendAboutMe(myData.aboutMe)
  appendSkills(myData.skills, skillTitle)
  appendProject(myData.project,project)
  appendCertification(myData.certification, certificationTitle)
  appendPersonalSkills(myData.personalSkill, personalSkillTitle)
}

function fillHtml(userLang) {
  switch (userLang) {
    case ("es"):
      printData(myDataEs,{ skillTitle: "Habilidades",
        project:"proyecto",
        certificationTitle: "Certificados", 
        personalSkillTitle: "Habilidades personales" })
      break;
    case ("en"):
      printData(myDataEn,{})
      break;
    default:
      printData(myDataEn,{})

  }
}

//setting language
const selectLang = document.getElementById("select-languaje")
selectLang.value = userLang

fillHtml(userLang)

//handling languaje
selectLang.addEventListener("change", (e) => {
  const userLang = e.target.value
  fillHtml(userLang)
})