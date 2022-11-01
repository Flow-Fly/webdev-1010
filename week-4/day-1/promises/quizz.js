// QUIZ

function sleep(ms, letter) {
	return new Promise((resolve) => {
		console.log("hello" + letter)

		setTimeout(() => {
			resolve()
		}, ms)

		console.log("bye" + letter)
	})
}

sleep(140, "A").then(() => console.log("helloAA"))
sleep(100, "B").then(() => console.log("helloBB"))
sleep(0, "C").then(() => console.log("helloCC"))

// Guess the order of all the console.log
