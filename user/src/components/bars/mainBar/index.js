import React from 'react'
import ProfileIcon from '../../profile/profileIcon'
import "./style.css"

export default function MainBar() {
    const isLogin = localStorage.getItem('isLogin');
    return (
        <div className="mainBar row">
            <div className="col-sm-2"></div>
            <div className="search col-sm-3"><input type='text' placeholder="Search..."/></div>
            {
                isLogin === 'false' ?
            <div className="account_group col-sm-3">
                <button className="btn btn-default" onClick={()=>{window.open("/signup",'_parent')}}>Sign Up</button>
                <button className="btn btn-default" onClick={()=>{window.open("/signin",'_parent')}}>Sign In</button>
            </div>
            :
            <div className="account_group col-sm-3">
                <button className="btn btn-default" onClick={()=>{
                    window.open("/signin",'_parent')
                    localStorage.setItem("isLogin",false);
                    }}><i className="fa fa-cog"></i>Log out</button>
            </div>
}
            <div className="account col-sm-2">
                    <ProfileIcon />
                </div>
        </div>
    )
}
