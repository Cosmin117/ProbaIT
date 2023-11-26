import React from 'react'
import styles from './HomePage.module.css';
import logo from '../../images/logo.png';

const NavBar = () => {
    function LoginBlur () {
        var Login = document.getElementById('PopUpLogin');        
        var SignIn = document.getElementById('PopUpSignIn');
        var div = document.getElementById('mainDiv')

        if(Login.style.display == 'none') {
            div.className = styles.Modal;
            Login.className = styles.PopUp;
            Login.style.display = 'block';
        }
    }

    function SignInBlur () {
        var Login = document.getElementById('PopUpLogin');        
        var SignIn = document.getElementById('PopUpSignIn');
        var div = document.getElementById('mainDiv')

        if(SignIn.style.display == 'none') {
            div.className = styles.Modal;
            Login.className = styles.PopUp;
            SignIn.style.display = 'block';
        }
    }

    return (
        <>
            <div>
                <ul className={styles.navBar}>
                    <li>
                        <div className={styles.navBarImg}>
                            <img className={styles.divImg} src={logo}/>
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
        </>
    );
}

export default NavBar;