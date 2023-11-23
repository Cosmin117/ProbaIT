import React from 'react';
import styles from './HomePage.module.css'

const PopUpLogin = () => {
    function UnBlurBody () {
        document.body.style.opacity = 1;
        var div = document.getElementById('PopUpLogin');

        if(div.style.display != 'none') {
            div.style.display = 'none';
        } else {
            div.style.display = 'block';
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
                    <label for="fname">Email Address</label><br/>
                    <input type="text" id="fname" name="fname"/><br/><br/>
                    <label for="lname">Password</label><br/>
                    <input type="text" id="lname" name="lname"/><br/><br/>
                    <button className={styles.b1}>Login</button><br/><br/>
                </form>
            </div>
        </>
    );
}

export default PopUpLogin;