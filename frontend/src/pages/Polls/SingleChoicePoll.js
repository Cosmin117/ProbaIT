import React, {useState} from 'react';
import styles from './Polls.module.css';

const SingleChoicePoll = ({ poll }) => {
    const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionChange = (option) => {
		setSelectedOption(option);
	};

	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleOptionToggle = (option) => {
		const isSelected = selectedOptions.includes(option);

		if (isSelected) {
			setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
		} else {
			setSelectedOptions([...selectedOptions, option]);
		}
	};

    async function Delete() {
        const user = localStorage.getItem("user");
        if(user == null) {
            alert("nu esti conectat");
        } else {
            if(user != poll.voteUser) {
                alert("Nu poti sterge acest poll");
            } else {
                
                try {
                    const response = await fetch(`http://localhost:5001/polls/${poll.title}`, {
                      method: 'DELETE',
                    });
              
                    if (!response.ok) {
                      throw new Error(`HTTP error! Status: ${response.status}`);
                    }
              
                    console.log('Poll deleted successfully');
                  } catch (error) {
                    console.error('Fetch error:', error);
                }
                window.location.href='/'
            }
        }
    }

    async function vote() {
        const user = localStorage.getItem('user');

        if (user === null) {
            alert("Nu puteti vota, trebuie sa va conectati mai intai");
        } else {
                var cont = 0;
                for (const [key, value] of Object.entries(poll.options)) {
                    const isChecked = selectedOptions.includes(key);
                    cont += 1;
                    if (isChecked === true) poll.votes[key] += 1;
                }

                var arr = poll.votes;
                console.log(arr);
            
                for (const [key, value] of Object.entries(poll.options)) {
                    console.log(poll.votes[key]);
                }

                
                const path = encodeURIComponent(poll.title);

                try {
                    const response = await fetch(`http://localhost:5001/polls/${path}/votes`, {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ votes: arr }),
                    });
                
                    if (!response.ok) {
                      throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                
                    const data = await response.json();
                    console.log('Poll votes updated successfully:', data.updatedPoll);
              } catch (error) {
                    console.error('Fetch error:', error);
                  }

            }

    }

  return (
    <div className={styles.Poll}>
      <h3>{poll.title}</h3>
      <ul>
        {Object.entries(poll.options).map(([key, value]) => (
          <li key={key}>
          <label>
          <input
              type="radio"
              name="singleChoice"
              checked={selectedOptions.includes(key)}
              onChange={() => handleOptionToggle(key)}
              />{value}
              </label>
          </li>
        ))}
      </ul>
      <br></br>
	<div>
        <button onClick={vote}>Vote</button></div>
   
    <div>
        <button onClick={Delete}>Delete</button></div>
    </div>
  );
};

export default SingleChoicePoll;