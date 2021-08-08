import React from 'react'
import "./style.css"

export default function SideBar() {
    return (
        <div className="sidebar col-sm-2">
            <ul>
                <li><i class="fa fa-home"></i> <a href="/">Home</a></li>
                <li><i class="fa fa-chart-bar"></i><a href="#"> Chart </a></li>
                <li><i class="fa fa-tag"></i><a href="#"> Tags </a></li>
            </ul>
        </div>
    )
}
