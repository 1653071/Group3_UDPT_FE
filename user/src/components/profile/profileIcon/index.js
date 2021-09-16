import React from 'react'
import avatar from "../../../img/avatar.png"
import "./style.css"

export default function ProfileIcon() {
    return (
        <div className="dropdown" >
        <img src={avatar} alt="no-img" className="dropdown-toggle" data-toggle="dropdown"/>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Dang Vu</a>
          <a className="dropdown-item" href="/account"><i className="fa fa-cog"></i>Account Settings</a>
          <a className="dropdown-item" href="#"><i className="fa fa-power-off"></i> Log out</a>
        </div>
      </div>
    )
}
