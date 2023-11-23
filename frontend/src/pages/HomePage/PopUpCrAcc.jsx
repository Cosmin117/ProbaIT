import React from 'react';
import styles from './HomePage.module.css'

const PopUpCrAcc = () => {
    return (
        <>
            <div className={styles.PopUp}
                id="PopUpLogin"
                style={{display: "none"}}>
                <button className={styles.popUpXButton}
                        >X</button>
                <br/> 
                <form action="">
                    <h4>Login</h4>
                    <label for="fname">Email Address</label><br/>
                    <input type="text" id="fname" name="fname"/><br/><br/>
                    <label for="lname">Password</label><br/>
                    <input type="text" id="lname" name="lname"/><br/><br/>
                    <label for="lname">Confirm password</label><br/>
                    <input type="password" id="lname" name="lname"/><br/><br/>
                    <button className={styles.b1}>Create Account</button><br/><br/>
                </form>
            </div>
        </>
    );
}

export default PopUpCrAcc;