import React from 'react'
import styles from './HomePage.module.css';
import logo from '../../images/logo.png';

const NavBar = () => {
    function BlurBody () {
        document.body.style.opacity = 0.5;
        var div = document.getElementById('PopUpLogin');

        if(div.style.display != 'none') {
            div.style.display = 'none';

        } else {
            div.style.opacity = 1;
            div.style.display = 'block';
        }
    };

    const MyButtons = {
        
    }   

    return (
        <>
            <div>
                <ul className={styles.navBar}>
                    <li><div className={styles.navBarImg}><img src={logo} alt="mortii tai"/></div></li>
                    <li><button className={styles.navBarButton}
                                id=""
                                onClick={BlurBody}>
                            <h3>Log In</h3>
                        </button></li>
                    <li><button className={styles.navBarButton}>
                        <h3>Sign in</h3>
                        </button></li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;