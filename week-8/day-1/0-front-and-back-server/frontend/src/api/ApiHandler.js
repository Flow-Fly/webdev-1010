import axios from "axios"

const service = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL,
})

service.getAllStudents = function () {
	return service
		.get("/students")
		.then((res) => {
			return res.data
		})
		.catch((e) => console.log(e))
}

export default service
