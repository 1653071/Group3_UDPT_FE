import axios from 'axios';
import React,{useState, useEffect} from 'react'
import avatar from '../../../src/img/avatar.png'
import "./style.css"

export default function CardComment({ data, questionId, user }) {
    const [heartState, setHeartState] = useState(false);
    const {commentId, commentContent, num_of_likes, imgUrl, firstName, lastName } = data;
    const [numLike, setNumLike] = useState(num_of_likes);
    
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/comment/get_favorite_comments/${questionId}/${user.user_id}`).then((res)=>{
            setHeartState(getFavoriteState(res.data));
          })
    },[]);
    const likeComment = () => {
        axios({
            url:`http://localhost:8080/api/comment/like_comment`,
            method:"POST",
            data: {
                "forumId":questionId,
                "userId":user.user_id,
                "commentId":commentId,
            }
        }).then((res)=>{
            
            if(res.data.title === "liked comment") {
                setHeartState(true);
                setNumLike(prev => prev + 1);
            } else {
                setHeartState(false);
                setNumLike(prev => prev - 1);
            }
          })
    }

    const getFavoriteState = (favoriteComments) => {
        for(let i = 0 ; i<favoriteComments.length ; i++) {
            if(favoriteComments[i].liked === true && favoriteComments[i].commentId === commentId) {
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
                            <i class="fa fa-heart" style={{"color":  heartState === true ? "red" : "grey" }}
                                onClick={()=>{likeComment()}}
                            ></i> {numLike}
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="question_content">{commentContent}</div>
        </div>
    )
}
