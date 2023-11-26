import React from 'react';
import styles from './HomePage.module.css';
import logo from '../../images/logo.png';

const NavBarLg = () => {
    function CreatePollBlur () {
        var CreatePoll = document.getElementById('CreatePoll');
        var div = document.getElementById('mainDiv')

        if(CreatePoll.style.display == 'none') {
            div.className = styles.Modal;
            CreatePoll.className = styles.PopUp;
            CreatePoll.style.display = 'block';
        }
    }

    function LogOutBlur () {
        var LogOut = document.getElementById('LogOut');
        var div = document.getElementById('mainDiv')

        if(LogOut.style.display == 'none') {
            div.className = styles.Modal;
            LogOut.className = styles.PopUp;
            LogOut.style.display = 'block';
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
                                onClick={LogOutBlur}>
                            <h3>Log Out</h3>
                        </button>
                    </li>
                    <li>
                        <button className={styles.navBarButton}
                                onClick={CreatePollBlur}>
                            <h3>Create a Poll</h3>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NavBarLg;
