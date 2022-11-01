const http = require("http")

const server = http.createServer((request, response) => {
	if (request.url.includes("main")) {
		response.statusCode = 200
		response.write("<h1>Main page!</h1>")
		response.end()
	}
	if (request.url.includes("about")) {
		response.statusCode = 200
		response.write("<h1>About page!</h1>")
		response.end()
	}
})

server.listen(3000)
