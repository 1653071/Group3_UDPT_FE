import { type } from 'jquery';
import React, {useState, useEffect, useRef} from 'react'
import PaginationBar from '../paginationBar'
import "./style.css"

export default function FilterModal({ title = "", modalTarget, BtnOK = "OK", BtnCancel = "Close"}) {
    const tagList = [
        {id:0,name:'HTML',selected:false,},
        {id:1,name:'CSS',selected:false},
        {id:2,name:'JS',selected:false},
        {id:3,name:'React',selected:false},
        {id:4,name:'Java',selected:false},
        {id:5,name:'Python',selected:false},
        {id:6,name:'GraphQL',selected:false},
        {id:7,name:'C++',selected:false},
        {id:8,name:'Git',selected:false},
        {id:9,name:'JSON',selected:false},
        {id:10,name:'GraphQL',selected:false},
        {id:11,name:'C++',selected:false},
        {id:12,name:'Git',selected:false},
        {id:13,name:'JSON',selected:false},
    ]
    const ref = useRef({
      tagsArray: []
    });
    const [tags, setTags] = useState(tagList.slice(0,12));
    const [pageIndex, setPageIndex] = useState(1);

    const toggleTags = (tagId) => {
        const index = tags.findIndex(item => item.id === tagId);
        tags[index].selected = !tags[index].selected;
        const duplicateTags = ref.current.tagsArray.find((item) => item === tagId);
        if(!duplicateTags) {
          ref.current.tagsArray.push(tagId);
        } else {

          ref.current.tagsArray.splice(ref.current.tagsArray.findIndex(item => item === duplicateTags),1);
        }
        const newArr = [...tags]; 
        setTags(newArr); 
    }

    console.log(ref.current.tagsArray);
    const getFilteredTagList = (taglist) => {
        return taglist.map((item) => {
          if(item !== '' && item.selected === true) {
            return <div>
            <button className="modal_item"
            style = {{backgroundColor:"orange"}}
            onClick={()=>{toggleTags(item.id)}}
            >{item.name}</button>
        </div>
          } else if(item !== '') {
            return <div>
            <button className="modal_item"
            onClick={()=>{toggleTags(item.id)}}
            >{item.name}</button>
        </div>
          } else {
            return <div className="modal_item_empty"></div>;
          }  
        })
    }
    useEffect(() => {
      const start = (pageIndex - 1) * 12;
      const end = start === 0 ? 12 : (start * 2 || tagList.length);
      if(ref.current.tagsArray.length > 0) {
        for(let i = 0 ; i < tagList.length; i++) {
          if(ref.current.tagsArray.find(item => item === tagList[i].id)) {
              tagList[i].selected = true;
          }
        }
      }
    
      const tempArray = [...tagList.slice(start, end)];
      const len = tempArray.length;
      for (let i = 0 ; i < 12 - len; i++) {
        tempArray.push('');
      }
      setTags(tempArray);
    }, [pageIndex]);

    return (
        <div className="modal" id={modalTarget}>
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">{title}</h4>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            {/* Modal body */}
            <div className="modal-body filter_modal_body"
      
            >
              {getFilteredTagList(tags)}
            </div>
            <PaginationBar numOfItem={tagList.length} setPageIndex={setPageIndex} selected={pageIndex}/>
            {/* Modal footer */}
            <div className="modal-footer">
            <button type="button" className="btn btn-success" data-dismiss="modal">{BtnOK}</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">{BtnCancel}</button>
            </div>
          </div>
        </div>
      </div>
    )
}
