const apiKey =
sessionStorage.getItem("generatedApiKey");

console.log(apiKey);

const apiKeyInput =
document.getElementById("apiKeyInput");
const copyBtn =
document.getElementById("copyBtn");

apiKeyInput.value = apiKey;

copyBtn.addEventListener("click" , async () => {
    await navigator.clipboard.writeText(apiKey);
     copyBtn.textContent = "Copied!";

     setTimeout(() => {
        copyBtn.textContent = "Copy";
     },2000);
     });



