const params =
new URLSearchParams(window.location.search);

const username = params.get("username");

console.log("Editing:" , username);

const updateBtn =
document.getElementById("updateBtn");

updateBtn.addEventListener("click" , function(event) {
         event.preventDefault();

const newFullName =
 document.getElementById("newFullName").value;
const newusername =
  document.getElementById("newusername").value;
const newEmail =
document.getElementById("newEmail").value;

console.log(newFullName);
console.log(newusername);
console.log(newEmail);

fetch(`http://localhost:3000/users/profile/${username}` , {
    method : "PUT",
    headers : {
        "Content-Type" : "application/json"

    },
    body : JSON.stringify({
       
        fullName: newFullName,
        username: newusername,
        email: newEmail
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
    alert(data.message);

    localStorage.setItem("username" , newusername);
    localStorage.setItem("fullName", newFullName);
    localStorage.setItem("email" , newEmail);
})
.catch(error => {
    console.log("Error:" , error);
});
});