import React from "react";
import logo from "./logo.svg";
import "./App.css";
//json-server --watch db.json --port 4000
// <img src="/xxxxxx" onerror="alert('xxs')"/>
function App() {
	const [people, setPeople] = React.useState([]);
	const [person, setPerson] = React.useState("");

	React.useEffect(updateUsers, []);

	function updateUsers() {
		fetch("http://localhost:4000/person")
			.then(e => e.json())
			.then(data => setPeople(data));
	}

	async function addUser() {
		fetch("http://localhost:4000/person", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name: person })
		}).then(updateUsers);
	}

	return (
		<div className="App">
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<input value={person} onChange={e => setPerson(e.target.value)} />
			<button onClick={addUser}>Opret mig</button>

			<h4>ALL PEOPLE</h4>
			{people.length > 0 && people.map(p => <p>{p.name}</p>)}
		</div>
	);
}

export default App;
