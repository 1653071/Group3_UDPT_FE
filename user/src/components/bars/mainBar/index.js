import React from 'react'
import "./style.css"

export default function MainBar() {
    return (
        <div className="mainBar row">
            <div className="col-sm-4"></div>
            <div className="search col-sm-3"><input type='text' placeholder="Search..."/></div>
            <div className="account_group col-sm-3">
                <button className="btn btn-default">Sign Up</button>
                <button className="btn btn-default">Sign In</button>
                <div className="account"></div>
            </div>
        </div>
    )
}
