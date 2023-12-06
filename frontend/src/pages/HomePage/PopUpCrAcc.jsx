import { React, useState } from 'react';
import styles from './HomePage.module.css'



const PopUpCrAcc = () => {
    function UnBlurBody() {
        document.body.style.opacity = 1;
        var SignIn = document.getElementById('PopUpSignIn');
        var div = document.getElementById("mainDiv");

        if (SignIn.style.display != 'none') {
            div.className = styles.mainDiv;
            SignIn.style.display = 'none';
            document.body.style.overflow = "auto";
        }
    };

    // function CrAcc() {
    //     var SignIn = document.getElementById('PopUpSignIn');
    //     var div = document.getElementById("mainDiv");
    //     // var nume = document.getElementById('nume').value;
    //     // // var ademail = document.getElementById('email').value;
        // var psswrd = document.getElementById('password').value;

        // const email = 

        // console.log(nume, ademail, psswrd);

        // // fetch("http://localhost:5001/users", {
        // //     method: "POST",

        // //     body: JSON.stringify({
        // //         email: ademail,
        // //         password: psswrd
        // //     }),

        // //     headers: {
        // //         "Content-type": "application/json; charset=UTF-8"
        // //     }
        // // })
        
        // //     .then(response => response.json())

        // //     .then(json => console.log(json));

        

    //     document.body.style.overflow = "auto";
    //     div.className = styles.mainDiv;
    //     SignIn.style.display = 'none';
    // }

  const[Email, setEmail] = useState("");
  const[Password, setPassword] = useState("");
  const[Eroare, setEroare] = useState("");  
  

    async function registerUser(event) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!(emailRegex.test(Email)) || Password.length < 8 ) {
            alert("Email sau parola incorecte");
        } else {
            event.preventDefault()
            const response = await fetch('http://localhost:5001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: Email,
                password: Password,
            }),
            
            })
            const data = await response.json()

            console.log(data);
            if(response.ok) {
            window.location.href = '/';
            }  else alert(data.message);
        }

        
    }


    return (
        <>
            <div className={styles.PopUp}
                id="PopUpSignIn"
                style={{ display: "none" }}>
                <button className={styles.popUpXButton}
                    onClick={UnBlurBody}>
                    X
                </button>
                <br />
                <form onSubmit={registerUser}>
                    <h2>Sign in</h2>

                    <label for="email">Email Address</label><br />
                    <input type="text" name="email" value={Email} onChange={(e) => setEmail(e.target.value)} required/><br /><br />
                    <label for="password">Password</label><br />
                    <input type="password" name="password" value={Password}  onChange={(e) => setPassword(e.target.value)} required/><br /><br />
                    {/* <label for="passwordConf">Confirm password</label><br />
                    <input type="password" id="passwordConf" name="passwordConf" /><br /><br /><br /> */}

                    <button className={styles.b1}
                        onClick={registerUser}>
                        Create Account
                    </button><br /><br />
                </form>
            </div>
        </>
    );
}

export default PopUpCrAcc;