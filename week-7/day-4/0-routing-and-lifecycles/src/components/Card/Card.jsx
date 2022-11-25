import React from "react"
import "./Card.css"
import { Link } from "react-router-dom"
const Card = ({ name, id, image }) => {
	return (
		<article className="Card">
			<picture>
				<img src={image} alt={name} />
			</picture>
			<div className="content">
				<h3>{name}</h3>
				<Link to={`${id}`}>More infos</Link>
			</div>
		</article>
	)
}

export default Card
