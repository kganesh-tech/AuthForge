console.log("API KEY JS LOADED");

const projectId =
localStorage.getItem("projectId");
 console.log(projectId);

 const generateBtn =
 document.getElementById("generateBtn");

 generateBtn.addEventListener("click" , function(event) {
    event.preventDefault();

    const keyName =
    document.getElementById("keyName").value;
    const environment =
    document.getElementById("environment").value;

fetch(`http://localhost:3000/generate-api-keys/${projectId}` , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },

        body : JSON.stringify({
            keyName,
            environment
        })
    })

    .then(res => {
        if (!res.ok) {
            throw new Error("API key generation failed");
        }
        return res.json();
    })
    .then(data => {
       alert(data.message);
       

        
    })
    .catch(error => {
        console.log("Error :" , error);
    });



});