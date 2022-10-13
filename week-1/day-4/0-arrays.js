// Declaring an Array
const studentsNames = ["Amelie", "Ines", "Olesya", "Sam", "Vitchet", "Hugo"]
console.log(studentsNames)

// Add new elements to an Array
const resultOfPushMethod = studentsNames.push("Leo")
console.log(resultOfPushMethod)
console.log(studentsNames)
studentsNames.unshift("Baptiste")
console.log(studentsNames)
console.log(studentsNames[3], studentsNames[99])
// Reassigning / Adding elements to an Array
for (let i = 0; i < 50; i++) {
	if (studentsNames[i]) {
		console.log("yay")
	} else {
		console.log("nay", i)
	}
}
console.log(typeof NaN)
console.log(!isNaN("hey"))

// Modifying elements from an Array

studentsNames[8] = "We do now exist"
studentsNames[5] = "This has just been modified"

console.log(studentsNames)

// Removing elements from an Array

// Use splice

const resultOfSplice = studentsNames.splice(5, 1)
console.log(resultOfSplice)
console.log(studentsNames)
studentsNames.splice(5, 0, "Chams")
console.log(studentsNames)

// Copying an array

const partialCopyOfStudents = studentsNames.slice(2, 4)
console.log(studentsNames)
console.log(partialCopyOfStudents)

/**
 * Most used methods:
 * push / pop
 * slice / splice
 */
