import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './pages/HomePage/NavBar.jsx';
import Footer from './pages/HomePage/Footer.jsx';
import PopUpLogin from './pages/HomePage/PopUpLogin.jsx';
import PopUpCrAcc from './pages/HomePage/PopUpCrAcc.jsx';
import CreatePoll from './pages/HomePage/CreatePoll.jsx'
import LogOut from './pages/HomePage/LogOut.jsx'
import NavBarLg from './pages/HomePage/NavBarLg.jsx';
import mihau from './images/testoasa.png'
// const jwt = require('jsonwebtoken');
import styles from './poll.module.css'
import PollList from './pages/Polls/PollList.js'

function App() {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionChange = (option) => {
		setSelectedOption(option);
	};

	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleOptionToggle = (option) => {
		const isSelected = selectedOptions.includes(option);

		if (isSelected) {
			// Deselect the option
			setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
		} else {
			// Select the option
			setSelectedOptions([...selectedOptions, option]);
		}
	};


	const getLoggedInUser = async () => {
		//try {
		const res = await fetch("http:localhost:5001/getLoggedInUser", {
			method: "GET",
		})

		return await res.json();
		// } catch (error) {
		// 	throw new Error("Please login to continue");
		// }
	}

	var IsLoggedIn;

	const token = localStorage.getItem('jwt');

	if (!token) {
		IsLoggedIn = false;
	} else {
		IsLoggedIn = true;
	}

	// var polls; 	

	// fetch("http://localhost:5001/polls")
	// 	.then((response) => {
	// 		if (!response.ok) {
	// 			throw new Error(`HTTP error! Status: ${response.status}`);
	// 		}
	// 		return response.json();
	// 	})
	// 	.then((data) => {
	// 		polls = data.polls;
	// 	})
	// 	.catch((error) => {
	// 		console.error("Fetch error:", error);
	// 	});

	// const Polls = polls;


	return (
		<>
			<link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
			<link href='./App.css' rel='stylesheet' />

			<div>

				{(IsLoggedIn == true) ? <NavBarLg style={{height:"2em"}}/> : <NavBar style={{height:"2em"}}/>}

				<PopUpLogin />
				<PopUpCrAcc />
				<CreatePoll />
				<LogOut />

				<div class="mainDiv">

					<div class="Body" id="mainDiv"></div>
					<div class="row" >
						<div class="column">
							<p class="text">Opiniile sunt mai importante ca niciodată. Platformele de sondaje permit organizatorilor să culeagă feedback direct de la audiența lor și să înțeleagă mai bine nevoile și dorințele acesteia.</p>
						</div>
						<div class="column" style={{ flexBasis: "40%" }}>
							<img class="mihau" src={mihau} />
						</div>
					</div>

					<br></br>
						<PollList/>

				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;