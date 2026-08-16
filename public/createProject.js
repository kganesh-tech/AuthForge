

const username =
localStorage.getItem("username");
console.log(username);
const form =
document.getElementById("createProjectform");

form.addEventListener("submit" , function(event) {
    event.preventDefault();

    const webName =
    document.getElementById("webName").value;
    const Description =
    document.getElementById("Description").value;

    console.log("USERNAME BEFORE FETCH:", username);

    console.log("DATA BEING SENT:" , {
        username : username,
        webName : webName,
        Description : Description
    });

  fetch("http://localhost:3000/projects" , {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },

      body : JSON.stringify({
        username : username,
        webName : webName ,
        Description : Description
      })
  })

  .then(res => res.json())
  .then(data => {
    
        alert(data.message);
    
  })
  .catch(error => {
    console.log(error);
  });
  

});