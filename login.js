const form = 
document.getElementById("loginForm");
 form.addEventListener("submit" , function (event) {
    event.preventDefault();

    const username =
 document.getElementById("username").value;
    const password =
 document.getElementById("password").value;

 const users ={
    username,
    password
 };
 fetch("http://localhost:3000/login"  , {

    method: "POST",
    headers : {
      "Content-Type" : "application/json"
    },

    body: JSON.stringify(users)
        

    


 })
 .then(res => res.json())
 .then(data => {
    alert(data.message);
    if(data.message === "Login successful") {
    
    localStorage.setItem("username", username);
   
    window.location.href="dashboard.html";
    }
 })
 .catch(err => {
    console.log(err);
 });
});

const forgotBtn =
document.getElementById("forgotBtn");

console.log(forgotBtn);
forgotBtn.addEventListener("click" , function() {
   console.log("clicked");

   window.location.href="forgotPassword.html";
});

 
 


 