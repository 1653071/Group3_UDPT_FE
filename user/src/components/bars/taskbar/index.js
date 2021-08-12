import React from 'react'
import FilterModal from '../../filterModal'

export default function TaskBar() {
    return (
        <div className="row mt-5">
            <div className="col"><button className="btn btn-primary">Create questions</button></div>
            <div className="col">
            <div className="row">
                <button className="btn col " data-toggle="modal" data-target="#filterModal"><i className="fa fa-filter"></i> Filter</button>
                <FilterModal />
                <button className="btn btn-secondary col">Latest <i class="fa fa-angle-down"></i></button>
            </div>
            </div>
        </div>
    )
}
