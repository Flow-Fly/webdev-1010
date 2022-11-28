import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import service from "../api/ApiHandler"

const OneStudent = () => {
	const [student, setStudent] = useState(null)
	const { id } = useParams()

	useEffect(() => {
		service
			.get(`/students/${id}`)
			.then((response) => {
				setStudent(response.data)
			})
			.catch((e) => {
				console.error(e.message)
			})
	}, [])

	if (!student) return <div className="loading">Loading...</div>
	return (
		<div>
			<h3>{student.name}</h3>
			<img src={student.picture} alt="" />
			<p>Favorite language: {student.favoriteLanguage}</p>
		</div>
	)
}

export default OneStudent
