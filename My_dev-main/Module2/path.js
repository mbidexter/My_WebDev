let path = require("path");

let ext = path.extname(path.join(__dirname,"abc.js"));
console.log("ext",ext);

let name = path.basename(__dirname,"abc.js");
console.log(name);

name = path.basename(path.join(__dirname, "abc.js"));
console.log(name);