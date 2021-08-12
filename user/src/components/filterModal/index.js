import React from 'react'
import PaginationBar from '../paginationBar'
import "./style.css"

export default function FilterModal() {
    const tags = [
        {id:0,name:'HTML'},
        {id:1,name:'CSS'},
        {id:2,name:'JS'},
        {id:3,name:'React'},
        {id:4,name:'Java'},
        {id:5,name:'Python'},
        {id:6,name:'GraphQL'},
        {id:7,name:'C++'},
        {id:8,name:'Git'},
        {id:9,name:'JSON'},
        {id:10,name:'GraphQL'},
        {id:11,name:'C++'},
        {id:12,name:'Git'},
        {id:13,name:'JSON'},
    ]
    const getFilteredTagList = () => {
        return tags.map((item) => {
            return <div>
                <button className="modal_item">{item.name}</button>
            </div>
        })
    }
    return (
        <div className="modal" id="filterModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Filter</h4>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            {/* Modal body */}
            <div className="modal-body filter_modal_body ">
              {getFilteredTagList()}
            </div>
            <PaginationBar numOfItem={tags.length}/>
            {/* Modal footer */}
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
}
