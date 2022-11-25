import React from "react"
import "./PokeCard.css"

const PokeCard = ({ name, color, img, lvl }) => {
	return (
		<div key={name} className="PokeCard" style={{ background: color }}>
			<picture>
				<img src={img} alt={name} />
			</picture>
			<h2>{name}</h2>
			<p>Level: {lvl}</p>
		</div>
	)
}

export default PokeCard
