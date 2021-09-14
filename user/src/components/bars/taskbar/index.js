import axios from 'axios';
import React,{useState, useEffect} from 'react'
import FilterModal from '../../filterModal'

export default function TaskBar() {
    const [tagList, setTagList] = useState([]);
    const getTagList= () => {
        axios.get("http://localhost:8080/api/tag/get_tags").then((res)=>{
            console.log(res.data);
            const newTags = res.data.map((item)=>({
              id:item.tagId,
              name:item.tagName,
              selected:false
            }))
            setTagList(newTags);
          })
    }
    return (
        <div className="row mt-5">
            <div className="col"><button className="btn btn-primary" onClick={()=>{window.open("/create_question","_parent")}}>Create questions</button></div>
            <div className="col">
            <div className="row">
                <button className="btn col " data-toggle="modal" data-target="#filterModal"
                onClick={()=>getTagList()}
                ><i className="fa fa-filter"></i> Filter</button>
                <FilterModal modalTarget="filterModal" BtnOK="Filter" BtnCancel="Cancel" tagList={tagList}/>
                <button className="btn btn-secondary col">Latest <i class="fa fa-angle-down"></i></button>
            </div>
            </div>
        </div>
    )
}
