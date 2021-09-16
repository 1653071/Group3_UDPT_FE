import axios from 'axios';
import React,{useState, useEffect} from 'react'
import avatar from '../../../src/img/avatar.png'
import Comment from '../comments'
import RepliedComments from '../comments/repliedComment';
import "./style.css"

export default function Card({ data, type }) {

    const {forum_name, forum_content, tagList, lastName, firstName, imgUrl, forum_id, num_of_likes} = data;

    const [heartState, setHeartState] = useState(false);
    const [numLike, setNumLike] = useState(num_of_likes);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/forum/get_favorite_forums/${forum_id}/${user.user_id}`).then((res)=>{
            setHeartState(getFavoriteState(res.data));
          })
    },[]);
    const likeForum = () => {
        axios({
            url:`http://localhost:8080/api/forum/like_forum`,
            method:"POST",
            data: {
                "forumId":forum_id,
                "userId":user.user_id,
            }
        }).then((res)=>{
            
            if(res.data.title === "liked") {
                setHeartState(true);
                setNumLike(prev => prev + 1);
            } else {
                setHeartState(false);
                setNumLike(prev => prev - 1);
            }
          })
    }

    const getFavoriteState = (favoriteForums) => {
        for(let i = 0 ; i<favoriteForums.length ; i++) {
            if(favoriteForums[i].liked === true && favoriteForums[i].forumId === forum_id) {
                return true;
            }
        }
        return false;
    }
    return (
        <div className="cardInfo">
            <div className="row">
                <div className="col">
                    <img src={imgUrl ? imgUrl : avatar} />{firstName} {lastName}
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col-5"></div>
                        <div className="col-5">
                            <i class="fa fa-heart" style={{"color": heartState === true ? "red" : "grey"}}
                            onClick={()=> {likeForum()}}
                            ></i>{numLike}
                        
                        </div>
                    </div>
                </div>
            </div>
            { type === 'question' ? <h3>{forum_name}</h3> : '' }
            <div className="question_content">{forum_content}</div>
            <div className="tagList">
            { 
                tagList && tagList.split(',').map((item) => {
                    return <div className="tag_item btn btn-primary">#{item}</div>
                })
            }
        </div>
            {type === 'question' ? <Comment questionTitle={forum_name} questionId={forum_id} /> : (type !== 'replies' ? <RepliedComments /> : '') }
        </div>
    )
}
