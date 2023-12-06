import React, { useState, useEffect } from 'react';
import SingleChoicePoll from './SingleChoicePoll.js'; // Replace with the actual path
import MultipleChoicePoll from './MultipleChoicePoll.js'; // Replace with the actual path
import styles from './Polls.module.css';

const PollList = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await fetch('http://localhost:5001/polls');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPolls(data.polls);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchPolls();
  }, []); 


  return (
    <div className={styles.maomor}>
      {polls.map((poll) => (
        <div key={poll._id}>
          {poll.type === false? (
            <SingleChoicePoll poll={poll} />
          ) : (
            <MultipleChoicePoll poll={poll} />
          )}
        </div>
      ))}
    </div>
  );
};

export default PollList;
