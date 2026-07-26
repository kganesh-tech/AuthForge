const form = document.getElementById("signupForm");

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    event.stopPropagation();

    console.log("Submit started");

    const users = {
        fullName: document.getElementById("fullName").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value
    };

    try {
        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(users)
        });

        const data = await response.json();

        alert(data.message);

        if (data.message === "user registered successfully") {

            localStorage.setItem("fullName", users.fullName);
            localStorage.setItem("username", users.username);
            localStorage.setItem("email", users.email);

            window.location.href = "./login.html";
        }

    } catch(error) {
        console.log(error);
    }
});