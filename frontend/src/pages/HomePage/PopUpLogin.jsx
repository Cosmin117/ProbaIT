import React from 'react';
import styles from './HomePage.module.css'

const PopUpLogin = () => {
    function UnBlurBody () {
        document.body.style.opacity = 1;
        var Login = document.getElementById('PopUpLogin');

        if(Login.style.display != 'none') {
            Login.style.display = 'none';
        }
    };

    return (
        <>
            <div className={styles.PopUp}
                id="PopUpLogin"
                style={{display: "none"}}>
                <button className={styles.popUpXButton}
                        onClick={UnBlurBody}> 
                    X
                </button>
                <br/> 
                <form action="">
                    <h4>Login</h4>
                    <label for="email">Email Address</label>
                    <br/>
                    <input type="text" id="email" name="fname"/>
                    <br/><br/>
                    <label for="password">Password</label>
                    <br/>
                    <input type="password" id="password" name="lname"/>
                    <br/><br/>
                    <button className={styles.b1}>Login</button>
                    <br/><br/>
                </form>
            </div>
        </>
    );
}

export default PopUpLogin;