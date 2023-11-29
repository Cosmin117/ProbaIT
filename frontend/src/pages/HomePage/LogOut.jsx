import React from 'react'
import styles from './HomePage.module.css'

const LogOut = () => {
    function LogOut () {

    }

    function No () {
        document.getElementById('LogOut').style.display = "none";
        document.getElementById("mainDiv").className = styles.Body;
    }

    return (
        <>
            <div className={styles.LogOut} id='LogOut' style={{display: "none"}}>
                <h2>Log Out</h2>
                <label>Do you want to log out?</label>
                <br></br>
                <br></br>
                <br></br>
                <button className={styles.b1}
                        onClick={LogOut}>
                            Yes
                </button>
                
                <button className={styles.b1}
                        onClick={No}>
                            No
                </button>
            </div>
        </>
    );
}

export default LogOut;