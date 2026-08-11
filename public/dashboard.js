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