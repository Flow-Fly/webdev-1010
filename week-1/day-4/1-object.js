// Declare an Object

const cat = {}

// Add new keys to an Object

cat.name = "The cat"
cat.address = {}
cat.address.street = "Street of cats"
cat["hobbies"] = ["Sleeping", "Sleeping again", "maow"]
console.log(cat)

// Assign new value to a key

cat.name = "Brendan Ei Kitty"
console.log(cat)

// Remove keys

// cat.address = undefined
console.log(cat)

// delete cat.address
console.log(cat)

// Loops

const keysOfTheCatObject = Object.keys(cat)
console.log(keysOfTheCatObject)

const valuesOfTheCatObject = Object.values(cat)
console.log(valuesOfTheCatObject)

const allTheEntriesOfTheCatObject = Object.entries(cat)
console.log("==================== ALL ENTRIES ====================")
console.log(allTheEntriesOfTheCatObject)
