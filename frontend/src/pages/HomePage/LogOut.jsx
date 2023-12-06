import React from 'react'
import styles from './HomePage.module.css'
// import { history } from 'react-router-dom';

const LogOut = () => {
    function No () {
        document.getElementById('LogOut').style.display = "none";
        document.getElementById("mainDiv").className = styles.Body;
        document.body.style.overflow = "auto"; 
    }

    const logout = async () => {
        try {
            const res = await fetch("http:localhost:5001/logout", {
                method: "GET",
            })

            return await res.json();
        } catch (error) {
            console.log(error);
        }

        localStorage.removeItem("jwt");
        localStorage.removeItem("user");

        document.getElementById('LogOut').style.display = "none";
        document.getElementById("mainDiv").className = styles.Body;
        document.body.style.overflow = "auto"; 
        
       window.location.href = '/';
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
                        onClick={logout}>
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