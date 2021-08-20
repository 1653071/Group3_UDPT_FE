import React,{useState} from 'react'
import FilterModal from '../filterModal'
import "./style.css"

export default function QuestionForm() {
    const [selectedTags,setSelectedTags] = useState([]);

    const removeTag = (id) => {
        const tempArr = [...selectedTags];
        const tagsArr = tempArr.filter(item => item.id !== id);
        setSelectedTags(tagsArr);
    }
    
    const renderTags = (tags) => {
        return tags.map((item) => {
            return <div className="tag_item">#{item.name}
                <div className="remove_icon" onClick={()=>{removeTag(item.id)}}></div>
             </div>
        })
    }
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
        <button className="btn btn-primary" data-toggle="modal" data-target="#addTagModal">
            Add tags
        </button>
        <div className="tagField">
            {renderTags(selectedTags)}
        </div>
        <FilterModal 
        title="Add Tags" 
        modalTarget="addTagModal" 
        BtnOK="OK" 
        onGetTags={setSelectedTags}
        initialSelectedTags={selectedTags}
        />
    </div>
    )
}
