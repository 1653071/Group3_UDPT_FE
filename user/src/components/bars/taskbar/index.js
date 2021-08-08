import React from 'react'

export default function TaskBar() {
    return (
        <div className="row">
            <div className="col"><button className="btn btn-primary">Create questions</button></div>
            <div className="col">
            <div className="row">
                <button className="btn col">Filter</button>
                <button className="btn default col">Latest</button>
            </div>
            </div>
        </div>
    )
}
