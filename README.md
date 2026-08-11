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

## Day 8:
-Designed and implemented resetPassword.html
-Created a clean and responsive Reset Password UI.
-Added new Password input fields.
-Prepare the frontend for secure password reset using token-based authtntication
-Organized the project structure for the upcoming password update flow.

## Day 9:
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
## DAY-13:
- Implemented JWT Token generation during users login
- Stored the generated JWT securely in LocalStorage on the client side
- Added the JWT to protected API requests using the Bearer Token format
- Implemented JWT Authentication middleware on the backend
- Protected the /users route using JWT verification
- Verified the token before allowing access to protected resources.
- Tested the complete verification flow from login to accessing protected routes.

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



## Author:
Developed by Ganesh as a personal project to learn and build a modern authentication systems with a passion towards the coding.
 
      
