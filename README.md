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
 
      
