import bcrypt from "bcrypt";
const passward = "password@123";
const NO_OF_ROUNDS = 10;
const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
const hashedPassword = await bcrypt.hash(passward, salt);
console.log(salt);
console.log(hashedPassword);
