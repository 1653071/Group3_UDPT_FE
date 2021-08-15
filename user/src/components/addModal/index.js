import React from 'react'

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
                        </div>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal" >Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
