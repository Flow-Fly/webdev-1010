import React, { useState, useEffect } from "react"
import service from "../api/ApiHandler"
import { Link } from "react-router-dom"

const ListStudents = () => {
	const [students, setStudents] = useState([])

	useEffect(() => {
		service.getAllStudents().then((data) => {
			console.log(data)
			setStudents(data)
		})
		// service
		// 	.get("/students")
		// 	.then((res) => {
		// 		setStudents(res.data)
		// 	})
		// 	.catch((e) => console.error(e))
	}, [])

	if (!students.length) {
		return <div className="loading">Loading...</div>
	}
	return (
		<ul>
			{students.map((element) => {
				return (
					<li key={element._id}>
						<img src={element.picture} alt="" />
						<Link to={`${element._id}`}>{element.name}</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default ListStudents
