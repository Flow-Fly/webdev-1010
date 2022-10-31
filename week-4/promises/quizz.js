// QUIZ

function sleep(ms, letter) {
	return new Promise((resolve) => {
		console.log("bye1" + letter)

		setTimeout(() => {
			resolve()
		}, ms)

		console.log("hello1" + letter)
	})
}

sleep(140, "A").then(() => console.log("helloAA"))
sleep(100, "B").then(() => console.log("helloBB"))
