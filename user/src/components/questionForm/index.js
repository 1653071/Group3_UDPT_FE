import axios from 'axios';
import React,{useState, useEffect} from 'react'
import FilterModal from '../filterModal'
import "./style.css"

export default function QuestionForm() {
    const [selectedTags,setSelectedTags] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [categories, setCategories] = useState([]);
    const [categoryId,chooseCategory] = useState({});
    const [tagList, setTagList] = useState([]);
    const [user, setUser] = useState({});
   
    useEffect(()=>{
        axios("http://localhost:8080/api/forum/get_categories").then((res)=>{
            setCategories(res.data);
        })
        axios.get("http://localhost:8080/api/tag/get_tags").then((res)=>{
            console.log(res.data);
            const newTags = res.data.map((item)=>({
              id:item.tagId,
              name:item.tagName,
              selected:false
            }))
            setTagList(newTags);
          })
          setUser(JSON.parse(localStorage.getItem('user')));
    },[])
    
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

    const renderCategories = () => {
        return categories.map((item)=>{
            return <option value={item.category_id}>{item.category_name}</option>
        })
    }

    const convertTagListToString = (tagListArr) => {
        let tagString = '';
        for(let i = 0 ; i < tagListArr.length; i++) {
            tagString += tagListArr[i].name + ',';
        }
        return tagString
        .slice(0,tagString.length-1);
    }
   
    return (
        <div>
        <div className="form-group">
        <div className="form-group">
        <label htmlFor="sel1">Select list:</label>
        <select className="form-control" id="sel1"  onChange={(e)=>{ chooseCategory(e.target.value) }}>
          {renderCategories()}
        </select>
      </div>
            <label htmlFor="usr">Title:</label>
            <input
            required 
            onChange={((e)=>{
                setTitle(e.target.value);
            })}
            type="text" className="form-control"/>
        </div>
        <div className="form-group">
            <label htmlFor="pwd">Body:</label>
            <textarea className="form-control" rows="7" 
            required
            onChange={((e)=>{
                setBody(e.target.value);
            })}
            />
        </div>
        <button 
        className="btn btn-primary" data-toggle="modal" data-target="#addTagModal">
            Add tags
        </button>
        <button 
        onClick={()=>{
            console.log(user.user_id);
            axios({
                method:"POST",
                url:"http://localhost:8080/api/forum/create_question",
                data: {
                    forum_name: title,
                    forum_content: body,
                    user_id_fk: user.user_id,
                    category_id_fk: +categoryId,
                    tags: convertTagListToString(selectedTags)
                }
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        }}
        className="btn btn-success">
            Submit
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
        tagList={tagList}
        />

    </div>
    )
}
