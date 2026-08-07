const params =
new URLSearchParams(window.location.search);

const username =
params.get("username");

console.log(username);

const form =
document.getElementById("changePasswordForm");

form.addEventListener("submit" , function(event) {
    event.preventDefault();

    const currentPassword =
    document.getElementById("currentPassword").value;
    const newPassword =
    document.getElementById("newPassword").value;
    const confirmPassword =
    document.getElementById("confirmPassword").value;

   fetch(`http://localhost:3000/users/password/${username}` , {
    method : "PUT",
    headers : {
        "Content-Type" : "application/json"
    },

    body: JSON.stringify({
        currentPassword,
        newPassword,
        confirmPassword
    })
   })

   .then(res => res.json())
   .then(data => {
    console.log(data);
   })
   .catch((error) => {
          console.log(error);
   });


});
