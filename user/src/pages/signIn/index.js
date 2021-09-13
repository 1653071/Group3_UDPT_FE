import axios from 'axios';
import React,{useState} from 'react'
import communicationPic from '../../img/communication.jpeg'
import "./style.css"

export default function SignIn() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errMsg,setErrMsg] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            username: username,
            password: password
        }
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        }
        axios.post("http://localhost:8080/api/user/signIn", body,headers).then((res)=>{
            localStorage.setItem("user",JSON.stringify(res.data));
            setErrMsg("");
            window.open('/','_parent');
        }).catch((err) => {
            setErrMsg("Username or password is not correct !")
        });
    }
    return (
        <div className="signIn">
            <div className='intro_img'>
                <img src={communicationPic} />
            </div>
            <div className='signIn_form'>
                <form onSubmit={handleSubmit}>
                    <h3>Sign In</h3>
                    <div className="form-group">
                        <label htmlFor="username">User Name:</label>
                        <input 
                        onChange={(e)=>{
                            setUsername(e.target.value);
                        }}
                        type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input 
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                        type="password" className="form-control" />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                    <p className="errMsg" style={{"color":"red"}}>{errMsg}</p>
                    <br></br>
                    <a href="/signup">You don't have an account ? Sign up now.</a>
                </form>
            </div>
        </div>
    )
}
