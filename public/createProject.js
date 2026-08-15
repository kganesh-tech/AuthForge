const form =
document.getElementById("createProjectform");

form.addEventListener("submit" , function(event) {
    event.preventDefault();

    const webName =
    document.getElementById("webName").value;
    const Description =
    document.getElementById("Description").value;

  fetch("http://localhost:3000/projects" , {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },

      body : JSON.stringify({
        webName ,
        Description
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