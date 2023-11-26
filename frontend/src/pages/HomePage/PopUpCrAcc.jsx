import React from 'react';
import styles from './HomePage.module.css'

const PopUpCrAcc = () => {
    function UnBlurBody () {
        document.body.style.opacity = 1;
        var SignIn = document.getElementById('PopUpSignIn');
        var div = document.getElementById("mainDiv");

        if(SignIn.style.display != 'none') {
            div.className = styles.mainDiv;
            SignIn.style.display = 'none';
        }
    };

    function CrAcc () {
        var SignIn = document.getElementById('PopUpSignIn');
        var div = document.getElementById("mainDiv");
        var nume = document.getElementById('nume').value;
        var ademail = document.getElementById('email').value;
        var psswrd = document.getElementById('password').value;
     //   UserModel.create({name: nume, emai: ademail, password: psswrd});
    
        
        div.className = styles.mainDiv;
        SignIn.style.display = 'none';
    }

    return (
        <>
            <div className={styles.PopUp}
                id="PopUpSignIn"
                style={{display: "none"}}>
                <button className={styles.popUpXButton}
                        onClick={UnBlurBody}>
                            X
                </button>
                <br/> 
                <form action="">
                    <h2>Sign in</h2>
                
                    <label for="name" id='laba'>Name</label><br/>
                    <input type="nume" id="nume" name="nume"/><br/><br/>
                    <label for="email">Email Address</label><br/>
                    <input type="text" id="email" name="email"/><br/><br/>
                    <label for="password">Password</label><br/>
                    <input type="password" id="password" name="password"/><br/><br/>
                    <label for="passwordConf">Confirm password</label><br/>
                    <input type="password" id="passwordConf" name="passwordConf"/><br/><br/><br/>
                    
                    <button className={styles.b1}
                            onClick={CrAcc}>
                                Create Account
                    </button><br/><br/>
                </form>
            </div>
        </>
    );
}

export default PopUpCrAcc;