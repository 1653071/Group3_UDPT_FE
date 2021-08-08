import React from 'react'
import SideBar from '../../components/bars/sidebar'
import TaskBar from '../../components/bars/taskbar'
import Card from '../../components/cards'
import "./style.css"

export default function Home() {
    return (
        <div className="home">
            <div className="home_content row">
                <SideBar />
                <div className="col-sm-6">
                    <TaskBar />
                    <Card />
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}
