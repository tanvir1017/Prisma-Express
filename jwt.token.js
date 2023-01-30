const crypto = require("crypto");

const randomNumber = crypto.randomBytes(20).toString("hex");
console.log(randomNumber);
