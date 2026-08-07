console.log("ResetPassword.js loaded");

const params = new URLSearchParams(window.location.search);

const generateToken = params.get("generateToken");

console.log("Token received:", generateToken);


const form = document.getElementById("resetPasswordForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Reset form submitted");

    const newPassword =
        document.getElementById("newPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);


    fetch("http://localhost:3000/resetPassword", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            generateToken,
            newPassword,
            confirmPassword
        })
    })

    .then(res => res.json())

    .then(data => {
        
        alert(data.message);
        window.location.href= "login.html";
    })

    .catch(err => {
        console.log("Error:", err);
    });

});