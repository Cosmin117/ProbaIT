import { React, useState } from 'react';
import styles from './HomePage.module.css';
// import {useHistory} from 'react-router-dom';

const PopUpLogin = () => {
    function UnBlurBody () {
        var Login = document.getElementById('PopUpLogin');
        var div = document.getElementById("mainDiv");

        if(Login.style.display != 'none') {
            div.className = styles.Body;
            Login.style.display = 'none';
            document.body.style.overflow = "auto"; 
        }
    };

    function Login () {
        var Login = document.getElementById('PopUpLogin');
        var div = document.getElementById("mainDiv");
        div.className = styles.Body;
        Login.style.display = 'none';
        document.body.style.overflow = "auto"; 
    }

    const[Email, setEmail] = useState("");
    const[Password, setPassword] = useState("");
    const[Eroare, setEroare] = useState("");  
  
    async function loginUser(event) {
      console.log(Email, Password);
      event.preventDefault()
  
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        
        // credentials:"include",
        
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          email: Email,
          password: Password,
        }),
        
      })
      const data = await response.json();

    if(response.ok) {  
      console.log(data);
      localStorage.setItem('jwt', data.token);
      localStorage.setItem('user', Email)
        alert("You are logged in successfully");
       window.location.href = '/';
      console.log(response.ok)
    }  else alert(data.message);
  }

    return (
        <div id="Background">
            <div className={styles.PopUp}
                id="PopUpLogin"
                style={{display: "none"}}>
                <button className={styles.popUpXButton}
                        onClick={UnBlurBody}> 
                    X
                </button>
                <br/> 
                <form onSubmit={loginUser}>
                    <h4>Login</h4> 
                    <label for="email">Email Address</label>
                    <br/>
                    <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                    <br/><br/>
                    <label for="password">Password</label>
                    <br/>
                    <input type="password"  name="psswrd" value={Password}  onChange={(e) => setPassword(e.target.value)}/>
                    <br/><br/>
                    <button className={styles.b1} onClick={loginUser}>Login</button>
                    <br/><br/>
                </form>
            </div>
        </div>
    );
}

export default PopUpLogin;