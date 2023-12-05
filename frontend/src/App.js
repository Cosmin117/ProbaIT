import './App.css';
import React from 'react';
import NavBar from './pages/HomePage/NavBar.jsx';
import Footer from './pages/HomePage/Footer.jsx';
import PopUpLogin from './pages/HomePage/PopUpLogin.jsx';
import PopUpCrAcc from './pages/HomePage/PopUpCrAcc.jsx'
import Poll from './pages/Polls/SglPoll.jsx'
import CreatePoll from './pages/HomePage/CreatePoll.jsx'
import styles from './pages/HomePage/HomePage.module.css'
import LogOut from './pages/HomePage/LogOut.jsx'
import NavBarLg from './pages/HomePage/NavBarLg.jsx';
import mihau from './images/testoasa.png'
import Navbartest from './pages/HomePage/navbartest.jsx'
import SglPoll from './pages/Polls/SglPoll.jsx'

function App() {
	// fetch("127.0.0.1:8080/getPolls").then(async(res) => {
	//   const ceva = await res.body.text();
	//   console.log(ceva);
	// });

	var IsLoggedIn = false;
	return (
		<>

			<link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
			<link href='./App.css' rel='stylesheet' />

			<div>

				{(IsLoggedIn == true) ? <NavBarLg /> : <NavBar />}

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

					<br></br><div class="row" >
						<div class="column">

							{/* {
								fetch ("http://localhost:8080/users")
									.then (response => response.json())
									.then (json => {
										let li = '<tr><th>Name</th><th>Email</th><th>Parola</th></tr>';

										json.forEach(user => {
											li += '<tr><td>${user.name}</td><td>${user.email}</td><td>${user.password}</td></tr>';
										});

									document.getElementById('users').innerHTML = li;
									
								})
							}

							<table id="users"></table> */}

						</div>
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
}

export default App;