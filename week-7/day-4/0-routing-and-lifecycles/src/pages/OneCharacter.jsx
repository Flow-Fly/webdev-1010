import React from "react"
import { useParams, useNavigate } from "react-router-dom"

const OneCharacter = () => {
	const params = useParams()
	const navigate = useNavigate()
	const id = params.id
	return (
		<h1 onClick={() => navigate(`/characters/${+id + 1}`)}>Character {id}</h1>
	)
}

export default OneCharacter
