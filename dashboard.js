const username =
localStorage.getItem("username");

document.getElementById("username").textContent = username;

document.getElementById("welcomeUser").textContent = username;

const logoutBtn =
 document.getElementById("logoutBtn");

 logoutBtn.addEventListener("click" , function()  {
              window.location.href = "login.html";
 })