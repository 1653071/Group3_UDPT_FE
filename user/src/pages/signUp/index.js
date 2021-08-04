import React from 'react'
import communicationPic from '../../img/communication.jpeg'
import "./style.css"

export default function SignUp() {

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open('/signin');
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
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">User Name:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Confirm Password:</label>
                        <input type="confirmPassword" className="form-control" />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                    <br></br>
                    <a href="/signin">You have an account ? Let's sign in.</a>
                </form>
            </div>
        </div>
    )
}
