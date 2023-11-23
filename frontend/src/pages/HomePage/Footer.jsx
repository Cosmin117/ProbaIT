import React from 'react'
import styles from "./HomePage.module.css"
import instagram from "../../images/mdi_instagram.png";
import facebook from "../../images/uil_facebook.png";
import twitch from "../../images/mdi_twitch.png";

const Footer = () => {
    const MyStyle = {
        width : "2em",
    };
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <a href="https://www.instagram.com/cosmin.gaicu/" target="_blank"><img src={instagram} style={MyStyle}/></a>
                    </div>
                    <div className={styles.column}>
                        <a href="https://www.facebook.com/cosmin.gaicu.7" target="_blank"><img src={facebook}  style={MyStyle}/></a>
                    </div>
                    <div className={styles.column}>
                        <a href="" target="_blank"><img src={twitch} style={MyStyle}/></a>
                    </div>
                </div>
            </div>     
        </>  
    );
}

export default Footer;