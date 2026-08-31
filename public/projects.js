

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

const dashboardBtn =
document.getElementById("dashboardBtn");


dashboardBtn.addEventListener("click" , function(event)  {
      event.preventDefault();
    window.location.href = "dashboard.html";
});

const apikeysBtn =
document.getElementById("apikeysBtn");

apikeysBtn.addEventListener("click" , function(event) {
  event.preventDefault();
   localStorage.setItem("webName" , projectId);
  window.location.href = "api-keys.html";
});

const usersBtn =
document.getElementById(".users-btn");

usersBtn.addEventListener("click" , function(event) {
  event.preventDeafult();

  localStorage.setItem("ProjectId" , projectId);
  localStorage.setItem("webName" , projectName);

  window.location.href ="users.html";
});