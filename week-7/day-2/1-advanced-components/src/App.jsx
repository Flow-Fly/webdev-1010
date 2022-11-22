// import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Container from "./components/Container/Container"
import Card from "./components/Card/Card"

function App() {
	const someDucks = [
		{
			name: "Lala",
			image:
				"https://res.cloudinary.com/dfo6ncbmb/image/upload/v1658572762/pfqpws9oax81lqqq7kfy.jpg",
		},
		{
			name: "Lalo",
			image:
				"https://res.cloudinary.com/dfo6ncbmb/image/upload/v1658572856/zqaxdubmpwjwatzgrrwg.jpg",
		},
		{
			name: "Lola",
			image:
				"https://res.cloudinary.com/dfo6ncbmb/image/upload/v1658572855/lgq7nv1irachtdcumbkk.jpg",
		},
		{
			name: "Laol",
			image:
				"https://res.cloudinary.com/dfo6ncbmb/image/upload/v1658572855/lgq7nv1irachtdcumbkk.jpg",
		},
		{
			name: "Loal",
			image:
				"https://res.cloudinary.com/dfo6ncbmb/image/upload/v1658572762/ipgsaf2wj42fpvaa5r5j.jpg",
		},
		{
			name: "Allo",
			image:
				"https://res.cloudinary.com/dfo6ncbmb/image/upload/v1658571651/zvqjgdesffw0njhckf0k.jpg",
		},
	]
	return (
		<div>
			<Navbar Card={Card} />

			<Container>
				<Card name="Riri" image="/1937-riri-fifi-loulou-20.jpg" />
				<Card name="Fifi" image="/index.jpeg" />
				<Card name="Loulou" image="/loulou.jpeg" />
			</Container>

			<Container>
				{someDucks.map((duck) => (
					<>
						<h2>This is a duck!</h2>
						<Card name={duck.name} image={duck.image} />
					</>
				))}
			</Container>
		</div>
	)
}

export default App
