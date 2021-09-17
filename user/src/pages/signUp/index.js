import axios from 'axios';
import React, { useState } from 'react'
import ErrorAlert from '../../components/alert/ErrorAlert';
import InfoAlert from '../../components/alert/InfoAlert';
import ERROR_MSG from '../../constants';
import communicationPic from '../../img/communication.jpeg'
import "./style.css"

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [shownErrorAlert, setShowErrorAlert] = useState(false);
    const [errAlertMsg, setErrorAlertMsg] = useState("");
    const [shownInfoAlert, setShowInfoAlert] = useState(false);
    const [infoAlertMsg, setInfoAlertMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "") {
            setErrorAlertMsg(ERROR_MSG.EMAIL_REQUIRED_MSG);
            setShowErrorAlert(true);
            setShowInfoAlert(false);
        } else if (username === "") {
            setErrorAlertMsg(ERROR_MSG.USERNAME_REQUIRED_MSG);
            setShowErrorAlert(true);
            setShowInfoAlert(false);
        } else if (firstName === "") {
            setErrorAlertMsg(ERROR_MSG.FIRST_NAME_REQUIRED_MSG);
            setShowErrorAlert(true);
            setShowInfoAlert(false);
        } else if (lastName === "") {
            setErrorAlertMsg(ERROR_MSG.LAST_NAME_REQUIRED_MSG);
            setShowErrorAlert(true);
            setShowInfoAlert(false);
        } else if (password === "") {
            setErrorAlertMsg(ERROR_MSG.PASSWORD_REQUIRED_MSG);
            setShowErrorAlert(true);
            setShowInfoAlert(false);
        } else if (repassword === "") {
            setErrorAlertMsg(ERROR_MSG.REPASSWORD_REQUIRED_MSG);
            setShowErrorAlert(true);
            setShowInfoAlert(false);
        } else if (password !== repassword) {
            setErrorAlertMsg(ERROR_MSG.FAIL_REPASSWORD_MSG);
            setShowErrorAlert(true);
            setShowInfoAlert(false);
        } else {
            axios({
                url: "http://localhost:8080/api/user/signUp",
                method: "POST",
                data: {
                    "username": username,
                    "password": password,
                    "first_name": firstName,
                    "last_name": lastName,
                    "email": email,
                    "is_admin": false
                }
            }).then((res) => {
                console.log(res.data);
                if (res.data.statusCode !== 403) {
                    setInfoAlertMsg("You have created an account");
                    setInfoAlertMsg(true);
                    setTimeout(() => {
                        window.open('/signin',"_parent");
                    }, 1500);
                } else {
                    setErrorAlertMsg(ERROR_MSG.USERNAME_INVALID);
                    setShowErrorAlert(true);
                    setShowInfoAlert(false);
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }
    return (
        <div className="signUp">
            <div className='intro_img'>
                <img src={communicationPic} />
            </div>
            <div className='signUp_form'>
                <form onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">User Name:</label>
                        <input type="text" className="form-control" value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name:</label>
                        <input type="text" className="form-control" value={firstName}
                            onChange={(e) => {
                                setFirstname(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" className="form-control" value={lastName}
                            onChange={(e) => {
                                setLastname(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Confirm Password:</label>
                        <input type="confirmPassword" className="form-control" value={repassword}
                            onChange={(e) => {
                                setRepassword(e.target.value);
                            }}
                        />
                    </div>
                    <InfoAlert info={infoAlertMsg} isShown={shownInfoAlert} />
                    <ErrorAlert error={errAlertMsg} isShown={shownErrorAlert} />
                    <br></br>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                    <br></br>
                    <a href="/signin">You have an account ? Let's sign in.</a>
                </form>
            </div>
        </div>
    )
}
