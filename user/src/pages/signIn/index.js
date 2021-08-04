import React from 'react'
import communicationPic from '../../img/communication.jpeg'
import "./style.css"

export default function SignIn() {

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open('/','_parent');
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
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                    <br></br>
                    <a href="/signup">You don't have an account ? Sign up now.</a>
                </form>
            </div>
        </div>
    )
}
