import React from "react";
import styles from "./HomePage.module.css";
import { useState } from "react";

const CreatePoll = () => {
	const [val, setVal] = useState([]);
	const handleAdd = () => {
		const abc = [...val, []]
		setVal(abc)
	}
	const handleChange = (onChangeValue, i) => {
		const inputdata = [...val]
		inputdata[i] = onChangeValue.target.value;
		setVal(inputdata)
	}
	const handleDelete = (i) => {
		const deletVal = [...val]
		deletVal.splice(i, 1)
		setVal(deletVal)
	}

	const [votingType, setVotingType] = useState("single");
	function handleVotingTypeChange(type) {
		setVotingType(type);
	}

	async function postData(url = "", data = {}) {
		const response = await fetch(url, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify(data),
		});

		return response.json();
	}

	async function postJSON(data) {
		try {
			console.log("Cosmin");
			const response = await fetch("http://localhost:8080/polls", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			
			const result = await response.json();
		  	console.log("Success:", result);
		} catch (error) {
			console.error("Error:", error);
		}
	}
	  

	const CreateNewPoll = () => {
		if (val.length >= 3) {
			let name = document.getElementById("Question").value;
			let sglCh1 = document.getElementById("sglCh").checked;
			let obj = Object.assign({}, val);

			let type;

			if (sglCh1 == true) {
				type = 0;
			} else {
				type = 1;
			}

			var Poll = [{
				title: name,
				votingType: type,
				options: obj
			}];

			
			postJSON(Poll);

			document.getElementById("CreatePoll").style.display = "none";
			document.getElementById("mainDiv").className = styles.mainDiv;
			//window.location.reload(false);
		} else {
			alert("Nu ai numarul necesar de optiuni pentru a crea un poll!");
		}

		console.log(val);
        document.body.style.overflow = "auto"; 
	};

	function UnBlurBody() {
		document.body.style.opacity = 1;
		var crPoll = document.getElementById('CreatePoll');
		var div = document.getElementById("mainDiv");

		if (crPoll.style.display != 'none') {
			div.className = styles.body;
			crPoll.style.display = 'none';
			document.body.style.overflow = "auto"; 
		}
	};

	return (
		<>
			<div className={styles.Poll} id="CreatePoll" style={{ display: "none" }}>
				<button className={styles.popUpXButton}
					onClick={UnBlurBody}>
					X
				</button>
				<br />

				<h2>Create a Poll</h2>
				<br></br>

				<div className={styles.forms}>
					<label>Title</label>
					<br />
					<input type="text" id="Question" placeholder="Poll's title"></input>

					<br />
					<br />

					<label>Voting Type</label>
					<br />
					<div>
						<label>
							<input
								type="radio"
								id="sglCh"
								name="votingType"
								checked={votingType === "single"}
								onChange={() => handleVotingTypeChange("single")}
							/>
							Single Choise
						</label>
						<br></br>
						<label>
							<input
								type="radio"
								name="votingType"
								id="multCh"
								checked={votingType === "multiple"}
								onChange={() => handleVotingTypeChange("multiple")}
							/>
							Multiple Choise
						</label>
					</div>

					<br />

					<button onClick={() => handleAdd()}>Add</button>
					<label>(Min. 3 options.)</label>

					<br></br>
					<br></br>

					{val.map((data, i) => {
						return (
							<div>
								<input value={data} onChange={e => handleChange(e, i)} />
								<button onClick={() => handleDelete(i)}>x</button>
							</div>
						)
					})}
				</div>

				<br></br>
				<br></br>

				<button className={styles.CrBtn} onClick={CreateNewPoll}>
					Create Poll
				</button>
			</div>
		</>
	);
};

export default CreatePoll;
