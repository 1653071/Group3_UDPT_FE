import React from 'react'
import FilterModal from '../filterModal'

export default function QuestionForm() {
    return (
        <div>
        <div className="form-group">
            <label htmlFor="usr">Title:</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="form-group">
            <label htmlFor="pwd">Body:</label>
            <textarea className="form-control" rows="7" />
        </div>
        <div className="form-group" data-toggle="modal" data-target="#addTagModal">
            <label htmlFor="pwd">Tags:</label>
            <textarea className="form-control" rows="7" />
        </div>
        <FilterModal title="Add Tags" modalTarget="addTagModal" BtnOK="OK"/>
    </div>
    )
}
