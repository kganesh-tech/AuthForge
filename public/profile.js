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

const editprofileBtn =
document.getElementById("editProfileBtn");

editprofileBtn.addEventListener("click" , () => {
    console.log("Sending username:" , username);
    window.location.href = `editProfile.html?username=${username}`;
});