const projectId =
localStorage.getItem("projectId");
const projectName =
localStorage.getItem("projectName");

console.log(projectId);
console.log(projectName);

fetch(`http://localhost:3000/projects/${projectId}/users`)

.then(response => response.json())
.then(users => {
    console.log("Users:" , users);
    document.getElementById("totalUsers").textContent = users.length;
    document.getElementById("activeUsers").textContent = users.length;
    const usersTableBody =
    document.getElementById("usersTableBody");

    users.forEach(user => {
        const row =
        document.createElement("tr");

        const username = user.username;
        const email = user.email;
        const password = user.password;

        row.innerHTML = `
        <td>${username}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>Active</td>
        <td>-</td>
        <td>...</td>
        
        `;
        usersTableBody.appendChild(row);
    });

})
.catch(error => {
    console.log("Error" , error);
});