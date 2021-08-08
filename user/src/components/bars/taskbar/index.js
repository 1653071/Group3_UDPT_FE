import React from 'react'

export default function TaskBar() {
    return (
        <div className="row mt-5">
            <div className="col"><button className="btn btn-primary">Create questions</button></div>
            <div className="col">
            <div className="row">
                <button className="btn col "><i className="fa fa-filter"></i> Filter</button>
                <button className="btn btn-secondary col">Latest <i class="fa fa-angle-down"></i></button>
            </div>
            </div>
        </div>
    )
}
