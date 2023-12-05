import React from 'react';
import styles from './HomePage.module.css';
import logo from '../../images/logo.png';

const NavBarLg = () => {
    function CreatePollBlur () {
        
        window.scrollTo ({top: 0, behavior: "smooth"});
        var CreatePoll = document.getElementById('CreatePoll');
        var div = document.getElementById('mainDiv')

        if(CreatePoll.style.display == 'none') {
            div.className = styles.Modal;
            document.body.style.overflow = "hidden";
            CreatePoll.className = styles.PopUp;
            CreatePoll.style.display = 'block';
        }
    }

    function LogOutBlur () {
        window.scrollTo ({top: 0, behavior: "smooth"});
        var LogOut = document.getElementById('LogOut');
        var div = document.getElementById('mainDiv')

        if(LogOut.style.display == 'none') {
            div.className = styles.Modal;
            document.body.style.overflow = "hidden";
            LogOut.className = styles.PopUp;
            LogOut.style.display = 'block';
        }
    }

    return (
        <>
            <header  style={{backgroundColor: "white", height: "8%"}}>
                <div className={styles.navBarImg}>
                    <img className={styles.divImg} src={logo}/>
                </div>

                <input type="checkbox" id="menu-bar"/>
                <label for="menu-bar">&#9776;</label>

                <nav className={styles.navbar}>
                    <ul>
                        <li>
                            <button
                                onClick={LogOutBlur}>
                                <h3>Log Out</h3>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={CreatePollBlur}>
                                <h3>Create a poll</h3>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default NavBarLg;
