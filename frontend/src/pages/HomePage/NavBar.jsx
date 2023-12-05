import React from 'react'
import styles from './HomePage.module.css';
import logo from '../../images/logo.png';

const NavBar = () => {
    function LoginBlur () {
        window.scrollTo ({top: 0, behavior: "smooth"});
        var Login = document.getElementById('PopUpLogin');        
        var SignIn = document.getElementById('PopUpSignIn');
        var div = document.getElementById('mainDiv')

        if(Login.style.display == 'none') {
            document.body.style.overflow = 'hidden';
            div.className = styles.Modal;
            Login.className = styles.PopUp;
            Login.style.display = 'block';
        }
    }

    function SignInBlur () {
        window.scrollTo ({top: 0, behavior: "smooth"});
        var Login = document.getElementById('PopUpLogin');        
        var SignIn = document.getElementById('PopUpSignIn');
        var div = document.getElementById('mainDiv')

        if(SignIn.style.display == 'none') {
            div.className = styles.Modal;
            document.body.style.overflow = 'hidden';
            Login.className = styles.PopUp;
            SignIn.style.display = 'block';
        }
    }

    return (
        <>
            <header style={{backgroundColor: "white", height: "8%"}}>
                <div className={styles.navBarImg}>
                    <img className={styles.divImg} src={logo} />
                </div>

                <input type="checkbox" id="menu-bar"/>
                <label for="menu-bar">&#9776;</label>

                <nav className={styles.navbar}>
                    <ul>
                        <li>
                            <button
                                onClick={LoginBlur}>
                                <h3>Login</h3>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={SignInBlur}>
                                <h3>Sign in</h3>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default NavBar;