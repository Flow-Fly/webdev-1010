import React from "react"

const Avatar = ({ image }) => {
	return (
		<picture className="Avatar">
			<img src={image} alt="Ducks" />
		</picture>
	)
}

export default Avatar
