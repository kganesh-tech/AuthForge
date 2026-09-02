## AUTHFORGE :
AuthForge is a backend authentication project built using Node.js and Express.js.The goal of this project is to build a secure authentication system step by step, starting from the fundamentals and graduallt adding production-level features.

## Features:
-User Signup
-User Login
-Password Hashing using bcrypt
-Password Verification using bcrypt.compare()
-JSON-based user storage
-REST API using Express.js
-Dashboard after successful login
-Dynamic Username Display
-Local Storage Session Management
-Logout Functionality
-Added localStorage based user profile data handling
- Created profile page to display user details
- Edit Profile functionality
- Update user profile details using PUT API
- Username-based user identification for profile updates
- Backend profile update handling using Express.js
- Change password functionality
- current password verification before password update
- Secure new password hashing using bcrypt
- Updated password Storage in users.json
- Separate password update API flow
- Created 'forgotPassword.html'.
- Implemented the "ForgotPassword.html" with the Professional UI which i have inspired by the Instagram Clone.
- Implemented the Forgot Password verification flow.When a valid username, email, or phone number is entered, the system generates a secure reset token and expiry time using Node.js crypto and logs them for the verified user.
- Implemented the Forgot Password verification flow by generating a secure reset token using Node.js crypto and sending a password reset email containing the generated reset token to the users verified email address using the Nodemailer.
- Implemented Reset password frontend interface.
- completed the end-to-end Forgot Password and Reset Password workflow.Users receive a secure reset link via email,verify the reset token, and successfully update their password through the /reset-password API.
- Implemented the user dashboard UI with adding some faetures in the sidebar and the nav bar and also added the create new project feature and profile integration.
- Implemented the createProject.html with the frontend UI which can be redirected when the user wants to create a project.
- Implemented the projects.json which is a data storage where the users project data will be stored along with the projectid and the project details.
- Implemented the Project Data Retrieval and can display on the Dashboard of the projects you have created .
- 
## TECH STACK:
-HTML
-CSS
-JavaScript
-Node.js
-Express.js
-bcrypt
-CORS
-File System(fs)
-JSON Database (users.json)

## Current Version:
 Version 1.0
 -User Registration
 -Secure Password Hashing
 -User Login Authentication
 ## Latest Update (Day 1)
  - Created a professional dashboard page.
  - Redirects users to the dashboard after successful login.
  - Displays the logged-in users's username dynamically.
  - Stores the logged-in username using Local Storage.
  - Added Logout functionality.
## Day 2:
- implemented the profile page for displaying user details
- implemented localStorage to store and retrieve user information
- Connected signup data with profile display
- Added dashboard and profile UI improvements
- Debugged frontend and backend authentication flow

## Day 3:
-Implement Edit Profile functionality
-Added username-based profile update flow
-Passed username from profile page to edit profile page usin URL parameters
-Created PUT API for updating user details
-Updated Full Name, Username, and Email in users.json
-Connected frontend profile update form with backend API
-Debugged and fixed profile update flow between frontend and backend

## Day 4:
-Implemented secure Change password functionality
-Added current password verification before allowing password changes
-Used bcrypt.compare() to verify the existing hashed password
-Added new password hashing using bcrypt.hash()
-Updated the users password securely in users.json
-Added password confirmation validation
-Created a separate password update API
-Connected change password frontend from with backend API
-Debugged and fixed duplicate PUT route issue in Express.js
-Verified that users can login successfully using the updated password.
## Day 5:
-implemented the forgotPassword.html.
-Designed a clean and responsive Forgot Password page inspired by the Instagram forgot Password Clone.
-Added a professional UI using the HTML and CSS.
-Added an Input field that accepts username , email and phone number.
-Added a "Continue" button to begin the account recovery process.
- Added a "Can't reset your password?" help link.
- Linked the Forgot Password page with its CSS and JavaScript files.

## Day 6:
-Implemented user Verification using username, email or Phone number.
-Connected the frontend and backend for the Forgot Password Flow.
-Validated user existence from users.json.
-Created a resusable utils/crypto.js utility module.
-Generated a secure password reset token using Node.js crypto.
-Generated a 15-minute reset token expiry for password recovery.
-Successfully logged the verified user's email,reset token, and expiry time for testing.

## Day 7:
-Implemented the Forgot Password verification flow by generating a secure reset token using Node.js Crypto.
-Integrated Nodemailer to send password reset emails containing the generated reset token to the users verified email address.
-Created the initial structure for 
     "resetPassword.html",
     "resetPassword.js",
     "resetPassword.css"
    for the upcoming password reset functionality with the verified token which is generated.

## Day 8: ResetPassword.html
-Designed and implemented resetPassword.html
-Created a clean and responsive Reset Password UI.
-Added new Password input fields.
-Prepare the frontend for secure password reset using token-based authtntication
-Organized the project structure for the upcoming password update flow.

## Day 9: Reset-Password(email Flow)
-Successfully completed the complete Reset Password workflow.
-Added a secure `/reset-password` API to update user passwords.
-Implemented reset token verification before allowing password update.
-Updated passwords securely using bcrypt hashing.
-Created a professional Reset Password frontend interface.
-Connected the Reset Password page with the backend API.
-Completed the end-to-end Forgot Password and Reset Password flow.
-Users can noe receive a password reset email, verify the secure token, reset their password, and log in successfully with the new password.
-Thoroughly tested the complete password recovery workflow and fixed all issues.

## DAY-10:
-I have found some bugs in my project which might face a issues in the future like upcoming versions.
-so i am on  a way of solving them.
-working hard on the bugs which can be done within plenty of days.
## DAY-11:
-worked on the bugs and have debugged some bugs and still there are some bugs which to be solved
## DAY-12:
-Continued debugging the remaining issues in the AuthForge authentication system
-Investigated authentication flow and redirection-related bugs.
-Verified profile updated and password-change functionality
-Tested the forgot password - reset Password flow
-Checked that updated user data is correctlly persisted in users.json
-Identified and worked through remaining edge cases and runtime errors.
-Improved the overall stability and realiability of the authentication system.
-Continued testing the application after each fix to ensure existing functionality was not broken.
## DAY-13 - JWT Authentication
- Implemented JWT Token generation during users login
- Stored the generated JWT securely in LocalStorage on the client side
- Added the JWT to protected API requests using the Bearer Token format
- Implemented JWT Authentication middleware on the backend
- Protected the /users route using JWT verification
- Verified the token before allowing access to protected resources.
- Tested the complete verification flow from login to accessing protected routes.


### Day-14 – User Dashboard

- Implemented the User Dashboard interface.
- Added user profile information to the dashboard.
- Integrated the logged-in user's details dynamically.
- Added notification and profile sections to the dashboard header.
- Improved the dashboard layout and spacing for a cleaner UI.
- Connected the dashboard with the existing authentication flow.
- Verified that authenticated user data is displayed correctly.

## DAY-15 :
- Implemented the createProject.html interface.
- Added project name field
- Added project description field
- Added the create Project button
- Designed a clean and professional white-background interface
- Added responsive styling for the project creation 

## DAY-16 :
- Implemented the projects.json data storage.
- The input values are taken and are sent by the "POST" method to the backend.
- Here in the backend the data is taken by the req.body and are ready to store in the projects.json.
- The projectId also sent to the data storage which is generated by the crypto module.
- At last after the process is done correctly a res message is sent succesfully that project saved successfully.

## DAY-17 :
-implemeted the GET '/projects' backend API.
-Read project data form 'projects.json'.
-Connected the frontend dashboard with the backend using the fetch();
-Retrived project data dynamically from the server.
-Created project cards dynamically using the javascript DOM manipulation.
-Displayed project name and project description inside each card.
-Added the project card structure for displaying multiple projects.
-Prepared the open project functionality using the unique projectId.
- Connected the project creation and project display flow.

## DAY-18 :
-Implemented project data retrieval backend.
-Integrated project details into the dashboard.
-Added support for displaying the unique projectId for each project.
-Displayed project name and project description dynamically.
-Connected the frontend project cards with the corresponding backend project data.
-Worked on identifying the logged-in users's projects correctly.
-Debugged and fixed isses related to missing or null project data.
-Verified the complete flow from project creation to project display on the dashboard.

## DAY-19 :
-Created the API Keys page UI.
-Added a professional project context section.
-Built a backend GET route to retrieve project details.
-Connected the frontend to the backend.
-Dynamically displayed the current projects name and project ID.
-Debugged the API response structure and learned how nested JSON data is accessed.
## DAY-20:
-Create dedicated api-key-generated.html.
-Redirect to the result page after successful generation
-Display the original API key once.
-the Original API key is stored in the database in the form of the hashed.
-After the successful storage of the details the backend sends the res message of the "api key generated successfully".
## DAY-21:
-Built API-Key generation endpoint.
-Generated unique af_live_..Keys.
-Stored API-Key information with the project.
-Fixed the frontend/backend API-Key response issue.
-Passed the genrerated key to the generated-key Page.
-Displayed the API Key in an input field.
-Added a working Copy API Key button.
-Added hashing for stored API Keys.
-Tested the complete generation - display - copy flow.

## DAY-22:
-Connected the API Keys page with the backend using projectId.
-Retrieved the project Data from projects.json through: GET /api-keys/:projectId
-Dynamically displayed projectName and projectId.
-Read the projects nested apiKeys array.
-Implemented logic to identify the latest generated API Key using : apiKeys[apiKeys.length - 1]
-Dynamically displayed the latest keys:
   Keyname
   apiKey
   environment
   CreatedAt
   Status
 -Understood the difference between backend project data and frontend data.projects.

## DAY-23:
-Created the users.html , users.css and users.js where i can see the data of the user created project database there in the users system .
-Created the new project GRINT -signup.html
                               -signup.css
                               -signup.js
- Built the basic signup UI
- Connected the signup form to JavaScript
- Added the AuthForge/teset-connection endpoint.
- Successfully tested Grint - AuthForge.
- Confirmed Grint receives the AuthForge response.
- Confirmed the API-Key generation system already exists in AuthForge.

## DAY-24:
-Connected the Grint signup flow with AuthForge.
-Worked on sending signup/user data from Grint to the AuthForge authentication backend.
-Verified the communication between the Grint frontedn anf AuthForge server.
-Debugged the connection and response floe between both systems
-Confirmed that Grint communicate with AuthForge for authentication-related operations.
-Improved the overall integration between the application and the AuthForge authentication service.

# DAY 25 — Grint Integration Setup

Today I continued working on the integration between my Grint practice project and AuthForge.

I wanted Grint to communicate with AuthForge using an API key instead of keeping the key directly inside the code.

### What I worked on

- Added Vite to the Grint project.
- Created a `.env` file for storing the AuthForge API key.
- Configured Vite to access the environment variable from `signup.js`.
- Updated the signup script to use `import.meta.env`.
- Updated the HTML script to load `signup.js` as a module.
- Tested the Grint project through the Vite development server.
- Confirmed that the AuthForge API key can be loaded successfully.
- Added `.env` and `node_modules` to `.gitignore`.
- Added the Grint project to GitHub.

## DAY 26 — API Key Project Identification

• Added API key verification in AuthForge
• Used bcrypt to compare the incoming API key with the stored hashed API key
• Traversed project API keys to find the matching project
• Identified the associated projectId from the verified API key
• Identified the associated webName from the verified API key
• Added invalid API key handling
• Connected the Grint project with AuthForge using the generated API key
• Successfully verified the Grint → AuthForge connection

##  Day 27- client users dislayed on the users section of the client project
- Connected the AuthForge Users dashboard with the backend.
- Implemented project-specific user retrieval.
- Displayed registered users dynamically in the Users table.
- Fixed the frontend user-rendering issues.
- Made the **Total Users** count dynamic.
- Tested the complete flow from Grint → AuthForge → user storage → Users dashboard.
- Continued fixing and stabilizing the existing V3 functionality.


 ## Upcoming Features:
 -Duplicate Username & Email Validation
 -JWT Authentication
 - Protected Routes
 - MongoDB Integration
 - Google OAuth
 - Github OAuth
 - Forgot Password
 - Email Verification
 - Role-Based Authntication
 - Crud Operations
 - Create Project Name
 - Generate Project API KEY
 - Create a test Project
 - 


## Author:
Developed by Ganesh as a personal project to learn and build a modern authentication systems with a passion towards the coding.
 
      
