import React from "react"
import Avatar from "../Avatar/Avatar"

const Card = ({ name, image }) => {
	return (
		<div className="Card">
			<h3>{name}</h3>
			<Avatar image={image} />
		</div>
	)
}

export default Card
