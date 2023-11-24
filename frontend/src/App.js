import './App.css';
import React from 'react';
import NavBar from './pages/HomePage/NavBar.jsx';
import Footer from './pages/HomePage/Footer.jsx';
import PopUpLogin from './pages/HomePage/PopUpLogin.jsx';
import PopUpCrAcc from './pages/HomePage/PopUpCrAcc.jsx'
import Poll from './pages/Polls/Poll.jsx'
import CreatePoll from './pages/Polls/CreatePoll.jsx'

function App () {
  // fetch("127.0.0.1:8080/getPolls").then(async(res) => {
  //   const ceva = await res.body.text();
  //   console.log(ceva);
  // });

	var IsLoggedIn = true;

	return (
		<>
			<NavBar/>
				<PopUpLogin/>
				<PopUpCrAcc/>
			<div class="mainDiv">
				<CreatePoll/>
				<Poll/>
			</div>
			<Footer/>
		</>
  	);
}

export default App;