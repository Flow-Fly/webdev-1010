import "./App.css"
import cuteCat from "./assets/cat-2.jpeg"

const getRandomColor = () => {
	return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
		Math.random() * 255
	})`
}

const Avatar = ({ size, url }) => {
	// const borderColor = getRandomColor()
	return (
		<picture
			className={size}
			style={{
				borderColor: getRandomColor(),
			}}>
			{/* This is url */}
			{/* "https://plus.unsplash.com/premium_photo-1661508614319-b5e40d1143bb" */}
			<img src={url} alt="cat picture" />
		</picture>
	)
}

const Card = (props) => {
	const size = Math.random() > 0.5 ? "big" : "small"
	return (
		<div className="cat">
			<h3 className="name">{props.name}</h3>
			{/* This is props.url */}
			{/* "https://plus.unsplash.com/premium_photo-1661508614319-b5e40d1143bb" */}
			<Avatar url={props.url} size={size} />
			<p>Age: {props.age}</p>
		</div>
	)
}
const Card2 = ({ url, name, age }) => {
	const size = Math.random() > 0.5 ? "big" : "small"
	return (
		<div className="cat">
			<h3 className="name">{name}</h3>
			<Avatar url={url} size={size} />
			<p>Age: {age}</p>
		</div>
	)
}

// ;<Card
// 	name="Olivia"
// 	age={6}
// 	url="https://plus.unsplash.com/premium_photo-1661508614319-b5e40d1143bb"
// />

function App() {
	const greet = (name) => `Hello ${name}`
	const students = [<li>Alice</li>, <li>Bob</li>, <li>John</li>]

	const cat1 = {
		name: "Neandre",
		age: 5,
		isCute: "veryTrue",
	}
	const cat2 = {
		name: "Loopy",
		age: "1",
		isCute: true,
	}

	const hiAntho = greet("Antho")
	return (
		<div className="App">
			<div>
				<h1>Hello squad 1010</h1>
				<p>{hiAntho}</p>
				<p>{greet("myself")}</p>
				<ul>{students}</ul>

				<p>Some expressions that can't be rendered!</p>
				<p>Undefined: {undefined}</p>
				<p>Null: {null}</p>
				<p>Booleans: {true}</p>
				<p>Booleans: {false}</p>
				<p>Numbers work ! {0}</p>
				<h2>Antho's cat</h2>
				<div className="cat">{cat1.name}</div>

				<div className="cat">
					<h3 className="name">{cat1.name}</h3>
					<picture>
						<img src="/cat-1.jpeg" alt=" cat picture" />
					</picture>
					<p>Age: {cat1.age}</p>
				</div>
				<div className="cat">
					<h3 className="name">{cat2.name}</h3>
					<picture>
						<img src={cuteCat} alt=" cat picture" />
					</picture>
					<p>Age: {cat2.age}</p>
				</div>
			</div>
			<Card
				name="Hector"
				age={42}
				url="https://images.unsplash.com/photo-1573865526739-10659fec78a5"
			/>
			<Card
				name="Alfeed"
				age={2}
				url="https://images.unsplash.com/photo-1573865526739-10659fec78a5"
			/>
			<Card
				name="Olivia"
				age={6}
				url="https://plus.unsplash.com/premium_photo-1661508614319-b5e40d1143bb"
			/>
			<Card
				name="Olivia"
				age={6}
				url="https://plus.unsplash.com/premium_photo-1661508614319-b5e40d1143bb"
			/>
		</div>
	)
}

export default App
