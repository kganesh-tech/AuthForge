console.log("SIGNUP JS LOADED");

window.addEventListener("beforeunload", () => {
    console.log("⚠️ SIGNUP PAGE IS UNLOADING");
});
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
        

        if (data.message == "user registered successfully") {

    console.log("SUCCESS BLOCK ENTERED");

    localStorage.setItem("fullName", users.fullName);
    localStorage.setItem("username", users.username);
    localStorage.setItem("email", users.email);

    document.body.innerHTML = `
        <div style="
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #111;
            color: white;
            font-size: 30px;
            font-family: Arial;
        ">
            ACCOUNT CREATED SUCCESSFULLY
        </div>
    `;

    setTimeout(() => {
        console.log("5 seconds completed");
    }, 5000);
}

    } catch(error) {
        console.log(error);
    }
});