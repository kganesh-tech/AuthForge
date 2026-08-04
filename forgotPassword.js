const form =
document.getElementById("forgotPasswordForm");

form.addEventListener("submit" , function(event) {
    event.preventDefault();
    console.log("form submitted :");

    const info = 
     document.getElementById("info").value;
     

    fetch("http://localhost:3000/forgot-password" , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },

        body : JSON.stringify({ info})
            
        })

 .then(res => res.json())

 .then(data => {
    alert(data.message)
})

.catch(err => {
    console.log(err);
 });

        
});
