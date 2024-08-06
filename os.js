const os = require("os"); // importing
function converTOGB(num) {
  num = num / 1024 ** 3;
  return `${num.toFixed(2)} GB`;
}
// console.log(os.freemem() / 1024 / 1024 / 1024); // how much free
// console.log(os.totalmem() / 1024 / 1024 / 1024); // how much total
console.log(converTOGB(os.freemem())); // how much free
console.log(converTOGB(os.totalmem())); // how much total

let full = (os.freemem * 100) / os.totalmem;
console.log(full.toFixed(1) + "%");
console.log(os.version());
console.log(os.cpus());
