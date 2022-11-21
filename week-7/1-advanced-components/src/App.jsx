// import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Container from "./components/Container/Container"
import Card from "./components/Card/Card"

function App() {
	const someDucks = [
		{
			name: "Lala",
			image: "Lala",
		},
		{
			name: "Lala",
			image: "Lala",
		},
		{
			name: "Lala",
			image: "Lala",
		},
		{
			name: "Lala",
			image: "Lala",
		},
		{
			name: "Lala",
			image: "Lala",
		},
		{
			name: "Lala",
			image: "Lala",
		},
		{
			name: "Lala",
			image: "Lala",
		},
	]
	return (
		<div>
			<Navbar />

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
