import React from 'react';
import styles from './HomePage.module.css'

const PopUpLogin = () => {
    function UnBlurBody () {
        var Login = document.getElementById('PopUpLogin');
        var div = document.getElementById("mainDiv");

        if(Login.style.display != 'none') {
            div.className = styles.Body;
            Login.style.display = 'none';
        }
    };

    function Login () {
        var Login = document.getElementById('PopUpLogin');
        var div = document.getElementById("mainDiv");
        div.className = styles.Body;
        Login.style.display = 'none';
    }

    return (
        <div id="Background">
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
        </div>
    );
}

export default PopUpLogin;