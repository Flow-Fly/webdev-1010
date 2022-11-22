import React, { useState } from "react"
import originalPokemons from "../../pokemons"
import PokeCard from "../PokeCard/PokeCard"

const List = () => {
	const [pokemons, setPokemons] = useState(originalPokemons)

	const handleSortByName = () => {
		const copy = [...pokemons]
		copy.sort((a, b) => a.name.localeCompare(b.name))
		setPokemons(copy)
	}

	const handleSortByLevel = () => {
		const copy = [...pokemons]
		copy.sort((a, b) => {
			return a.level - b.level
			if (a.level > b.level) {
				return 1
			} else if (a.level < b.level) {
				return -1
			} else {
				return 0
			}
		})
		setPokemons(copy)
	}

	const handleDelete = (name) =>
		setPokemons(pokemons.filter((poke) => poke.name !== name))
	// console.log(pokemons)
	return (
		<div>
			<h2>Pokemon list</h2>
			<div>
				<button onClick={handleSortByName}>Sort by name</button>
				<button onClick={handleSortByLevel}>Sort by level</button>
			</div>
			<ul>
				{pokemons.map((poke) => {
					return (
						// <PokeCard key={poke.name} {...poke} />
						<div key={poke.name} onClick={() => handleDelete(poke.name)}>
							<PokeCard
								name={poke.name}
								img={poke.img}
								color={poke.color}
								lvl={poke.level}
							/>
						</div>
						// 	key={poke.name}
						// 	className="card"
						// 	style={{ background: poke.color }}>
						// 	<picture>
						// 		<img src={poke.img} alt={poke.name} />
						// 	</picture>
						// 	<h2>{poke.name}</h2>
						// </div>
					)
				})}
			</ul>
		</div>
	)
}

export default List
