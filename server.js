const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/users" , async (req, res) => {
    const fullName = req.body.fullName;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if(password !== confirmPassword) {
        return res.status(400).json ({
            message : "passwords do not match"
        });
    }

fs.readFile("users.json", "utf-8" , async(err , data) => {
    if(err) {
        return res.status(500).json({
            message : "unable to read a file"
        });
    }


  const users = JSON.parse(data);
  const hashedPassword = await bcrypt.hash(password , 10);
   users.push({
       fullName : fullName,
       username : username,
       email : email,
       password : hashedPassword,
       
   });

   fs.writeFile("users.json" , JSON.stringify(users , null, 2) , (err) => {
      if(err) {
        return res.status(500).json({
            message : "unable to write the file"
        });
      }
       console.log("Reached res.json()");
      res.json({
        message : "user registered successfully"

   });

   });
});

     

});

app.post("/login", async(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    fs.readFile("users.json" , "utf-8", async(err,data) => {
        if(err) {
            return res.status(401).json({
                message : "Error reading users"
            });
        }

        const users = JSON.parse(data);

        const user = users.find((u) => u.username === username);

        if(!user) {
            return res.status(400).json ({
                message : "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.json ({
                message : "Incorrect password"
            });

            
        }
        res.json({
            message : "Login successful"
        });
;
    });
});



app.listen(3000, () => {
    console.log("server is running on the 3000");
});