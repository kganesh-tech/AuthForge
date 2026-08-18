console.log("project to be loaded");
const projectName =
localStorage.getItem("projectName");
const projectmatter =
localStorage.getItem("projectmatter");
const projectId =
localStorage.getItem("projectId");
console.log(projectName);
console.log(projectmatter);
console.log(projectId);

document.getElementById("projectName").textContent = projectName;
document.getElementById("projectDescription").textContent = projectmatter;
document.getElementById("projectNameCard").textContent = projectName;
document.getElementById("projectId").textContent = projectId;