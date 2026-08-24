const projectId = localStorage.getItem("projectId");

console.log("LOCAL STORAGE PROJECT ID:", projectId);

fetch(`http://localhost:3000/api-keys/${projectId}`, {
    method: "GET"
})
.then(res => {
    console.log("RESPONSE STATUS:", res.status);
    return res.json();
})
.then(data => {

    console.log("DATA RECEIVED:", data);
    console.log("PROJECT DATA:", data.project);

    const projectNameElement =
        document.getElementById("projectName");

    projectNameElement.textContent =
        data.project.webName;

    const projectIdElement =
        document.getElementById("projectId");

    projectIdElement.textContent =
        data.project.projectId;

        const apiKeys = data.project.apiKeys;
        const latestApiKey =
        apiKeys[apiKeys.length - 1];

        console.log("LATEST API KEY:" , latestApiKey);

        document.getElementById("keyName").textContent = latestApiKey.keyName;
        document.getElementById("apiKey").textContent = latestApiKey.apiKey;
        document.getElementById("createdAt").textContent = latestApiKey.createdAt;
        document.getElementById("environment").textContent = latestApiKey.environment;
        document.getElementById("keyStatus").textContent = latestApiKey.status;
})

.catch(error => {
    console.log("Error:", error);
});

const copyBtn =
document.getElementById("copyBtn");
copyBtn.addEventListener("click" , async () => {
   const apiKey =
    document.getElementById("apiKey");

    await navigator.clipboard.writeText(apiKey);
     copyBtn.textContent = "Copied!";

     setTimeout(() => {
        copyBtn.textContent = "Copy";
     },2000);
     });


const generateapikeyBtn =
    document.getElementById("generateapikeyBtn");

generateapikeyBtn.addEventListener("click", function(event) {

    event.preventDefault();

    localStorage.setItem("projectId", projectId);

    window.location.href = "generate-api-key.html";
});