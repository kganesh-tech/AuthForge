const projectId =
 localStorage.getItem("projectId");

 console.log(projectId);

 fetch(`http://localhost:3000/api-keys/${projectId}` , {
    method : "GET",

 })

 .then(res => res.json())
 .then(data => {
     console.log(data);
        const projectName =
        document.getElementById("projectName");
        projectName.textContent = data.project.webName;

        const projectId =
        document.getElementById("projectId");
        projectId.textContent = data.project.projectId;
        })
 
 .catch(error => {
    console.log("Error:" , error);
 });

 const generateapikeyBtn =
  document.getElementById("generateapikeyBtn");

  generateapikeyBtn.addEventListener("click" , function(event)  {
    event.preventDefault();
      localStorage.setItem("projectId" , projectId );
    window.location.href = "generate-api-key.html";

  })
