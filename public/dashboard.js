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