import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Card from "../components/Card/Card"

// We want axios to make some requests to an API

const ListCharacters = () => {
	const [characters, setCharacters] = useState(null)

	useEffect(() => {
		// async function getCharacters() {
		// 	const response = await axios.get(
		// 		"https://rickandmortyapi.com/api/character"
		// 	)
		// 	setCharacters(response.data.results)
		// }
		// getCharacters()
		axios
			.get("https://rickandmortyapi.com/api/character")
			.then(({ data: { results } }) => {
				setCharacters(results)
			})
			.catch((err) => {
				console.error(err)
			})
	}, [])

	if (!characters) {
		return <div className="loading">Loading....</div>
	}
	return (
		<div className="ListCharacters">
			<h1>List Rick and Morty</h1>

			<ul>
				{characters.map((element) => {
					return <Card key={element.id} {...element} />
				})}
			</ul>
		</div>
	)
}

export default ListCharacters
