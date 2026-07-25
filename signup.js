const form =
  document.getElementById("signupForm");

form.addEventListener("submit" , function(event)  {
    event.preventDefault();

    console.log("Form submitted");

    const fullName =
    document.getElementById("fullName").value;
    const username =
    document.getElementById("username").value;
    const email =
    document.getElementById("email").value;
    const password =
    document.getElementById("password").value;
    const confirmPassword =
    document.getElementById("confirmPassword").value;

    const users = {
        fullName,
        username,
        email,
        password,
        confirmPassword
    };

    fetch("http://localhost:3000/users",  {
        method : "POST",
        headers : {

         "Content-Type" : "application/json"
        },

          body : JSON.stringify(users)
    })

    .then(res => {
        console.log("Status:", res.status);
           return res.json();
})
    .then (data => {
        console.log(data.message);
        alert(data.message);
        window.location.href="login.html";
    })

    .catch(error => {
        console.log(error);
    });
});