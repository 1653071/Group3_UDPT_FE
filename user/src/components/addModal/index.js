import React from 'react'
import FilterModal from '../filterModal'

export default function AddModal() {
    return (
        <div className="modal fade" id="addModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                        <h4 className="modal-title">Create question</h4>
                        <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body filter_modal_body"
                    >
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
                    </div>
                    {/* <div style={{textAlign:"center", marginBottom: "20px"}}>
                        <button className="btn btn-success" data-toggle="modal" data-target="#filterModal">Add Tags</button>
                       
                    </div> */}
                    
                    {/* Modal footer */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
