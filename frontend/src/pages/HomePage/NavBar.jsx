import React from 'react'
import styles from './HomePage.module.css';
import logo from '../../images/logo.png';

const NavBar = () => {
    function LoginBlur () {
        document.body.style.opacity = 0.5;
        var Login = document.getElementById('PopUpLogin');        
        var SignIn = document.getElementById('PopUpSignIn');

        if(Login.style.display == 'none') {
            SignIn.style.display = 'none';
            Login.style.opacity = 1.0;
            Login.style.display = 'block';
            document.getElementById('PopUpLogin').style.opacity = 1.0;
        }
    };

    function SignInBlur () {
        document.body.style.opacity = 0.5;
        var Login = document.getElementById('PopUpLogin');        
        var SignIn = document.getElementById('PopUpSignIn');

        if(SignIn.style.display == 'none') {
            SignIn.style.display = 'block';
            Login.style.display = "none";
            SignIn.style.opacity = 1.0;
            document.getElementById('PopUpSignIn').style.opacity = 1.0;
        }
    };

    function UnBlurBody () {
        document.body.style.opacity = 1;
        var Login = document.getElementById('PopUpLogin');

        if(Login.style.display != 'none') {
            Login.style.display = 'none';
        }
    };

    return (
        <>
            <div>
                <ul className={styles.navBar}>
                    <li>
                        <div className={styles.navBarImg}>
                            <img className={styles.divImg} src={logo} alt="mortii tai"/>
                        </div>
                    </li>
                    <li>
                        <button className={styles.navBarButton}
                                onClick={LoginBlur}>
                            <h3>Login</h3>
                        </button>
                    </li>
                    <li>
                        <button className={styles.navBarButton}
                                onClick={SignInBlur}>
                            <h3>Sign in</h3>
                        </button>
                    </li>
                </ul>
            </div>
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

export default NavBar;