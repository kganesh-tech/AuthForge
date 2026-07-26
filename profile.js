const fullName =
localStorage.getItem("fullName");
const username =
localStorage.getItem("username");
const email =
localStorage.getItem("email");

document.getElementById("fullName").textContent = fullName;
document.getElementById("fullNameInfo").textContent = fullName;

document.getElementById("username").textContent = username;
document.getElementById("usernameInfo").textContent = username;

document.getElementById("email").textContent = email;

document.getElementById("avatar").textContent = username.charAt(0).toUpperCase();