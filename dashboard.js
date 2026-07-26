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