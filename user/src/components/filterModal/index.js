import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react'
import PaginationBar from '../paginationBar'
import "./style.css"

export default function FilterModal({ 
  title = "", 
  modalTarget, 
  BtnOK = "OK", 
  BtnCancel = "Close", 
  onGetTags = null ,
  initialSelectedTags,
  tagList,
}) {


    const ref = useRef({
      tagsArray: initialSelectedTags && initialSelectedTags.length > 0 ? initialSelectedTags : [] // store selected tags
    });

    useEffect(()=>{
      
      paginateTags(initialSelectedTags);
      if(initialSelectedTags)
      ref.current.tagsArray = [...initialSelectedTags];
    },[initialSelectedTags, tagList]);
    
    const [tags, setTags] = useState(tagList.slice(0,12));
    const [pageIndex, setPageIndex] = useState(1);

    const toggleTags = (tag) => {
        const index = tags.findIndex(item => item.id === tag.id);
        tags[index].selected = !tags[index].selected;
        const duplicateTags = ref.current.tagsArray.find((item) => item.id === tag.id);
        if(!duplicateTags) {
          ref.current.tagsArray.push(tag);
        } else {

          ref.current.tagsArray.splice(ref.current.tagsArray.findIndex(item => item.id === duplicateTags), 1);
        }
        const newArr = [...tags]; 
        setTags(newArr); 
    }

    const getFilteredTagList = (taglist) => {
        return taglist.map((item) => {
          if(item !== '' && item.selected === true) {
            return <div>
            <button className="modal_item"
            style = {{backgroundColor:"orange"}}
            onClick={()=>{toggleTags(item)}}
            >{item.name}</button>
        </div>
          } else if(item !== '') {
            return <div>
            <button className="modal_item"
            onClick={()=>{toggleTags(item)}}
            >{item.name}</button>
        </div>
          } else {
            return <div className="modal_item_empty"></div>;
          }  
        })
    }

    const paginateTags = (selectedTagArray) => {
      const start = (pageIndex - 1) * 12;
      const end = start === 0 ? 12 : (start * 2 || tagList.length);
      //.... show the state of tags if selected or not when pagegination
      if(selectedTagArray &&  selectedTagArray.length > 0) {
        for(let i = 0 ; i < tagList.length; i++) {
          if(selectedTagArray.find(item => item.id === tagList[i].id)) {
              tagList[i].selected = true;
          }
        }
      }
    //........
      const tempArray = [...tagList.slice(start, end)];
      const len = tempArray.length;
      for (let i = 0 ; i < 12 - len; i++) {
        tempArray.push('');
      }
      setTags(tempArray);
    }
   
    useEffect(() => {
      paginateTags(ref.current.tagsArray);
    }, [pageIndex]);
    
    return (
        <div className="modal" id={modalTarget}>
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">{title}</h4>
              <button type="button" className="close" data-dismiss="modal"
              onClick={() => {
                setPageIndex(1);
                ref.current.tagsArray = [];
                paginateTags([])
              }} 
              >×</button>
            </div>
            {/* Modal body */}
            <div className="modal-body filter_modal_body">
              {getFilteredTagList(tags)}
            </div>
            <PaginationBar numOfItem={tagList.length} setPageIndex={setPageIndex} selected={pageIndex}/>
            {/* Modal footer */}
            <div className="modal-footer">
            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => { onGetTags(ref.current.tagsArray) }}>{BtnOK}</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal"
              onClick={() => {
                  setPageIndex(1);
                  ref.current.tagsArray = [];
                  paginateTags([])
                }} 
                  >{BtnCancel}</button>
            </div>
          </div>
        </div>
      </div>
    )
}
