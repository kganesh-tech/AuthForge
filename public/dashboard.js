console.log("DASHBOARD LOADED");
console.log("username:", localStorage.getItem("username"));
console.log("token:", localStorage.getItem("token"));
const username =
localStorage.getItem("username");

document.getElementById("userName").textContent = username;
document.getElementById("userUsername").textContent = username;

document.getElementById("welcomeUser").textContent = username;

const profileIcon =
document.getElementById("profileIcon");
const profileMenu =
document.getElementById("profileMenu");

profileIcon.addEventListener("click", function() {
    if(profileMenu.style.display === "block") {
        profileMenu.style.display = "none";
    } else {
        profileMenu.style.display = "block";
    }
});

document.addEventListener("click" , function(event) {
    if(!profileIcon.contains(event.target) && !profileMenu.contains(event.target)) {
        profileMenu.style.display = "none";
    }
    
});

const changePasswordBtn =
 document.getElementById("changePasswordBtn");

 changePasswordBtn.addEventListener("click" , function(event)  {
    event.preventDefault();


    const username =
     localStorage.getItem("username");
     

     window.location.href = `changePassword.html?username=${username}`;
 });
 const token = localStorage.getItem("token");

fetch("http://localhost:3000/users", {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
.then(res => res.json())
.then(data => {
    console.log("SERVER RESPONSE:", data);
});

const createProjectBtn =
document.querySelector("#createProjectBtn");

createProjectBtn.addEventListener("click" , function(event) {
    event.preventDefault();
    window.location.href = "createProject.html";
})

const createProjectBtnEmpty =
document.querySelector("#createProjectBtnEmpty");

createProjectBtnEmpty.addEventListener("click" , function(event)  {
     event.preventDefault();

     localStorage.setItem( username);

    window.location.href = `createProject.html?username=${username}`;
});

const projectsGrid =
document.getElementById("projectsGrid");

fetch("http://localhost:3000/projects" , {
  method : "GET",

})

.then(res => res.json())
.then(data => {

    data.forEach(project => {

        const card = document.createElement("div");
        card.className = "project-card";

        const projectName = document.createElement("p");
        projectName.textContent = "Project Name: " + project.webName;

        const projectId = document.createElement("p");
        projectId.textContent = "project Id: " + project.projectId;

        const projectmatter = document.createElement("p");
        projectmatter.textContent =
            "Project Description: " + project.Description;

        card.appendChild(projectName);
        card.appendChild(projectId);
        card.appendChild(projectmatter);

        projectsGrid.appendChild(card);

    const openProjectBtn =
    document.createElement("button");

    openProjectBtn.textContent = "openProject"
    openProjectBtn.className = "open-project-btn";

    card.appendChild(openProjectBtn);

   openProjectBtn.addEventListener("click", () => {
    

    localStorage.setItem("projectName", project.webName);
    localStorage.setItem("projectmatter" , project.Description);
    localStorage.setItem("projectId" , project.projectId);
    

    

    window.location.href = "projects.html";
});

    });

});