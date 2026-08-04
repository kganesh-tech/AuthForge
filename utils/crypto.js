const crypto = require("crypto");

function generateResetToken(){
const generateToken = crypto.randomBytes(32).toString("hex");

const resetTokenExpiry = 
   Date.now() + 15* 60 * 1000;
   return {
    generateToken, 
    resetTokenExpiry
   };
}

module.exports = {
    generateResetToken
};