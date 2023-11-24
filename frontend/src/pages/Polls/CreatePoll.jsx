import React from 'react'
import styles from './Polls.module.css'
import Option from './Option.jsx'
import ReactDOM from 'react-dom/client';
import AddDynamicInput from './Option.jsx';

const CreatePoll = () => {
    var pollNr = 2;

    function AddOption () {
        const MaxPoll = 6;
        pollNr++;       

        if (pollNr > MaxPoll) {
            alert('Poti avea maxim ' + MaxPoll + ' optiuni'); 
            pollNr--;
        } else {
            return <Option number={pollNr}/>;
        }
    } 

    function RemoveOption () {
        const MinPoll = 2;
        pollNr--;       

        if (pollNr < MinPoll) {
            alert('Poti avea minim ' + MinPoll + ' optiuni');
            pollNr++;
        }
    }

    return (
        <>
            <div className={styles.Poll}>
                <h2>Create a Poll</h2>
                
                <form action=""
                    className={styles.forms}>
                    <label>Title</label><br/>
                    <input type="text"
                            id="Question"></input><br/><br/>
                    <label>Voting Type</label><br/>
                    <input type="radio"></input>
                    <label>Single Choise</label>
                    <br></br>
                    <input type="radio"></input>
                    <label>Multiple Choise</label><br/><br/><br/>

                    <input type="text" placeholder="Option 1" />
                    <br/>
                    <input type="text" placeholder="Option 2" />
                    <br/>

                    <AddDynamicInput/>
                </form>
                
                <button className={styles.CrBtn}>Create Poll</button>
            </div>
        </>
    );
}

export default CreatePoll;