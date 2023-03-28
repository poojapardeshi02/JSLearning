console.log("====== API getElementsByTagName() to select element by tag name  =====");
const h2Element = document.getElementsByTagName("h2");
console.log(h2Element[1].innerHTML);
h2Element[1].innerHTML = "My Hobbies";

console.log("====== API getElementById() to select element by id  =====");
const elementProfile = document.getElementById("profile");
console.log(elementProfile.innerHTML);

console.log("====== API getElementsByClassName() to select element class Name  =====");
const elementLi =document.getElementsByClassName("liItem");
console.log(elementLi[1].innerHTML);
console.log("====== API querySelector() to select element by id  =====");
const elementProfileByQuery = document.querySelector("#profile");
console.log(elementProfileByQuery);

console.log("====== API querySelector() to select element by class  =====");
const elementByQuery= document.querySelector(".liItem");
console.log(elementByQuery);

console.log("====== API querySelectorAll() to select element by class  =====");
const elementsByQuery = document.querySelectorAll(".liItem");
console.log(elementsByQuery);

elementsByQuery[3].innerHTML = "Oracle Database";
console.log(elementsByQuery[3]);

console.log("====== Changing the attribute of an element =====");
const elementMyProfile = document.querySelector("#myProfile");
elementMyProfile.setAttribute("href", "https://www.linkedin.com/");
console.log(elementMyProfile);

console.log("====== Changing the CSS properties ====="); //not used more
const elementTechStack = document.querySelector("#techStack");
elementTechStack.style.color = "red";
elementTechStack.style.fontFamily = "Arial";

console.log("====== Remove Element =====");
const elementDivProject = document.querySelector("#divProject");
const elementProject = document.querySelector("#project");
elementDivProject.removeChild(elementProject);


console.log("====== Changing the CSS properties ====="); //not used more
const elementProfileDetails = document.querySelector("#profile");
elementProfileDetails.style.color = "blue";

console.log("=====Remove Agile & Jira====");
const elementPar = document.querySelector("#techList");
//console.log(parentElement);
const elementAgileAndJiraRemove = document.querySelectorAll(".liItem");
console.log(elementAgileAndJiraRemove);
const elementRem = elementAgileAndJiraRemove[1];
elementPar.removeChild(elementRem);


