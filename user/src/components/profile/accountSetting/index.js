import React from 'react'
import avatar from "../../../img/avatar.png"
import "./style.css"

export default function AccountSetting() {
    return (
        <div className="account_setting row">
            <div className="avatar col-sm-5">
                <div className="card" style={{ width: '250px' }}>
                    <img className="card-img-top" src={avatar} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">Dang Vu</h4>
                        <a href="#" className="btn btn-primary">Change image</a>
                    </div>
                </div>
            </div>
            <div className="setting col-sm-4">
                <p>Username</p>
                <p className="username userdata">dangvuminh</p>
                <p>Email</p>
                <p className="email userdata">dangvuminh98@gmail.com</p>
                <button className="btn btn-primary">Edit</button>
            </div>
            <div className="col-sm-1"></div>

            <div className="info col-sm-2">
                <p>4 posts</p>
                <p>12 answers</p>
            </div>
        </div>
    )
}
