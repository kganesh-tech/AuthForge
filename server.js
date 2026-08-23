const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { generateResetToken } = require("./utils/crypto");
const { sendEmail } = require("./utils/nodemailer");
const jwt = require("jsonwebtoken");
const verifyToken = require("./middleware/authMiddleware");
const crypto = require("crypto");


const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

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
        const token = jwt.sign({
            username : user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h"}
        );
        console.log("JWT TOKEN:" , token);
        res.json({
            message : "Login successful",
            token:token
        });
;
    });
});

app.get("/users" ,verifyToken, (req,res) => {
    fs.readFile("users.json" , "utf-8" , (err,data) => {
        if(err) {
            return res.status(400).json({
                message: "Error reading users"
            });
        }
        const users = JSON.parse(data);
    
    res.json(users);
});
});

app.put("/users/profile/:username" , (req,res) => {
          const oldUsername =
            req.params.username;
          const newFullName = req.body.fullName;
          const newusername = req.body.username;
          const newEmail = req.body.email;

          fs.readFile("users.json" , "utf-8", (err,data) => {
            if(err) {
                return res.status(400).json({
                    message : "error in reading file"
                });
            }
            const users = JSON.parse(data);

            const user = users.find(user => user.username === oldUsername);

            if(!user) {
                return res.status(400).json({
                    message : "User not found"
                });
            }
            
            user.fullName = newFullName;
            user.username = newusername;
            user.email = newEmail;

            fs.writeFile("users.json" , JSON.stringify(users , null, 2) , (err) => {
                if(err) {
                    return res.status(400).json({
                        message : "unable to write file"
                    });

                    
                }
                console.log("PROFILE UPDATED SUCCESSFULLY");
                

                return res.status(200).json({
                    message : "profile updated successfully"
                });

            });
            
        
        });

});
app.put("/users/password/:username" , async(req,res) => {
    const oldUsername = req.params.username;
    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword;
    const confirmPassword = req.body.confirmPassword;

    fs.readFile("users.json" , "utf-8" , async(err,data) => {
        if(err) {
            return res.status(400).json({
                message: "unable to read the file"
            });
        }
        if(newPassword != confirmPassword) {
            return res.status(400).json({
                message : "Passwords doesnot match"
            });
        }
        const users = JSON.parse(data);

        const user = users.find(user => user.username === oldUsername );
         if(!user) {
            return res.status(400).json({
                message : "user not found"
            });
         }
         const isMatch = await bcrypt.compare(currentPassword , user.password);

         if(!isMatch) {
            return res.status(400).json({
                message : "current password is incorrect"
            });
         }

         const hashedPassword = await bcrypt.hash(newPassword , 10);


          user.password = hashedPassword;
        
        fs.writeFile("users.json" , JSON.stringify(users , null , 2) , (err) => {

            if(err) {
                return res.status(400).json({
                    message : "unable to write file"
                });
            }

            res.status(200).json({
                message : "password changed succesfully"
            });

        });
            
        
        });
    });

    app.post("/forgot-password" , async(req, res) => {
        const info = req.body.info;
        console.log(info);

        

    fs.readFile("users.json" , "utf-8" , async(err,data) => {
        if(err) {
            return res.status(400).json({
                message : "unable to read the file"
            });
        }
        const users = JSON.parse(data);
        const user = users.find(user => user.username === info || user.email === info || user.phonenumber === info);

        if(!user) {
            console.log("user not found:" );
            return res.status(400).json({
                message : "user not found"
            });
        } 
          console.log("User found:" , user.email);
          const {generateToken, resetTokenExpiry } = generateResetToken();
          

          console.log("Reset token:", generateToken);
          console.log("Expires At:" , resetTokenExpiry);
            
          user.generateToken = generateToken;
          user.resetTokenExpiry = resetTokenExpiry;
        fs.writeFileSync("users.json" , JSON.stringify(users , null , 2));
          const resetLink =
          `http://localhost:3000/ResetPassword.html?generateToken=${generateToken}`;
          
          await sendEmail(
            user.email,
            "AuthForge Reset Password",
            `Click the link below to reset your password: ${resetLink}`
          );
          return res.status(200).json({
            message: "Reset email sent successfully"
          });
            return res.status(200).json({
                message : "user found"
            });
           });
});

app.post("/resetPassword" , async(req,res) => {
    const generateToken = req.body.generateToken;
    console.log("Token received:" , generateToken);
    const newPassword = req.body.newPassword;
    const confirmPassword = req.body.confirmPassword;

    console.log("NEW PASSWORD:", newPassword);
    console.log("CONFIRM PASSWORD:" , confirmPassword);

    if(newPassword != confirmPassword) {
        return res.status(400).json({
            message : "passwords don't match"
        })
    }

    fs.readFile("users.json" , "utf-8" , async(err , data) => {
        if(err){
            return res.status(400).json({
                message : "unable to read the file"
            })
        }

        const users = JSON.parse(data);
        const user = users.find(user => user.generateToken === generateToken);
        console.log("Found user:", user);
        if(!user) {
            return res.status(400).json({
                message : "Invalid Token"

            })
        }
        const resetTokenExpiry = user.resetTokenExpiry;
        if(Date.now() > resetTokenExpiry){
            return res.status(400).json({
                message : "Token is expired"
            })
        }
        
        const hashedPassword = await bcrypt.hash(newPassword , 10);
        console.log("Password HASH CREATED");
         user.password = hashedPassword;
         user.generateToken = null;
         user.resetTokenExpiry = null;

         console.log("USER BEFORE WRITE");

         fs.writeFileSync("users.json" , JSON.stringify(users, null , 2));
         return res.status(200).json({
            message : "password reset successfully"
         });
    });



});

app.post("/projects" , (req,res) => {
    const userId = "usr_" + crypto.randomBytes(8).toString("hex");
    const projectId = "prj_" + crypto.randomBytes(8).toString("hex");
    const username = req.body.username;
    const webName = req.body.webName;
    const Description = req.body.Description;
     console.log("DATA RECEIVED:" , {
        username,
        userId,
        projectId,
        webName,
        Description
    });

fs.readFile("projects.json" , "utf8" , (err,data) => {
    if(err) {
        return res.status(500).json({
            message : "error in reading file"
        });
    }
    const projects = JSON.parse(data);
    projects.push ({
        username : username,
        userId : userId,
        projectId : projectId,
        webName: webName,
        Description: Description
    });

fs.writeFile("projects.json" , JSON.stringify(projects , null , 2) , (err) => {
    if(err) {
        return res.status(500).json({
            message : "unable to write the file"
        });
    }
    res.status(201).json({
        message : "project created successfully"
    });
});
});
});

app.get("/projects" , (req,res) => {
    fs.readFile("projects.json" , "utf8", (err,data) => {
        if(err){
            return res.status(400).json({
                message : "error in reading the file"
            })
        }

        const projects = JSON.parse(data);

        res.json(projects);
        
    });
});

app.get("/api-keys/:projectId" , (req,res) => {
    const projectId = req.params.projectId;

fs.readFile("projects.json" , "utf-8" , (err,data) => {
    if(err) {
        return res.status(400).json({
            message : "error in reading file"
        })
    }
    
    const projects = JSON.parse(data);
    const project = projects.find(project => project.projectId === projectId);
    if(!project) {
        return res.status(400).json({
            message : "project not found"
        })
    }
       return res.status(200).json({
        message : "project found",
        project : project

        
       });
       
    });
    

    
    
});
app.post("/generate-api-keys/:projectId" , async(req,res) => {
    const projectId = req.params.projectId;
    const keyName = req.body.keyName;
    const environment = req.body.environment

fs.readFile("projects.json" , "utf-8" , async(err,data) => {
    if(err) {
        return res.status(400).json({
            message : "error in reading file"
        });
    }
    const projects = JSON.parse(data);

    const project = projects.find(project => project.projectId === projectId);

    if(!project) {
        return res.status(400).json({
            message : "project not found"
        })
    }

    const apiKey = "af_live_" + crypto.randomBytes(32).toString("hex");

    const hashedapiKey = await bcrypt.hash(apiKey , 10)
    const newApiKey = {
        keyId : "key_" + crypto.randomBytes(8).toString("hex"),
        keyName : keyName,
        environment : environment,
        apiKey : hashedapiKey,
        status : "active",
        createdAt : new Date().toISOString()
    };
    
     if(!project.apiKeys) {
        project.apiKeys = [];
     }

     project.apiKeys.push(newApiKey);
    
    fs.writeFile("projects.json" , JSON.stringify(projects , null, 2) , (err) => {
    if(err) {
        return res.status(400).json({
            message : "error in writing file"
        });
    }

    console.log("ORIGINAL API KEY:" , apiKey);
    return res.status(200).json({
        message : "API KEY generated successfully",
        apiKey : apiKey,
        keyId : newApiKey.keyId,
        keyName : keyName,
        environment : environment
    });
     
  });
});
});

app.listen(3000, () => {
    console.log("server is running on the 3000");
});