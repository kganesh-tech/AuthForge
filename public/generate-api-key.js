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

    console.log("FULL SERVER RESPONSE:", data);

    console.log("API KEY FROM RESPONSE:", data.apiKey);

    sessionStorage.setItem(
        "generatedApiKey",
        data.apiKey
    );

    console.log(
        "API KEY IN SESSION STORAGE:",
        sessionStorage.getItem("generatedApiKey")
    );

    window.location.href =
        "api-key-generated.html";

})
    .catch(error => {
        console.log("Error :" , error);
    });



});