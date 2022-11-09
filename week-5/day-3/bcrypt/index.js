const bcrypt = require("bcryptjs")

const password = `hello-squad-1010`
const otherPass = "Whats up"

const salt = 12

const generatedSalt = bcrypt.genSaltSync(salt)

console.log("Salt: ", generatedSalt)

const hashedPassword = bcrypt.hashSync(password, generatedSalt)

console.log(hashedPassword)

console.log("Comparing passwords")

const samePassword = bcrypt.compareSync(password, hashedPassword)
const samePass = bcrypt.compareSync(otherPass, hashedPassword)

console.log("First pass: ", samePassword)
console.log("Second pass: ", samePass)
