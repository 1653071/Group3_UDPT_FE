import axios from 'axios';
import React,{useState, useEffect} from 'react'
import avatar from '../../../src/img/avatar.png'
import "./style.css"

export default function CardComment({ data, questionId, user }) {
    const [favoriteComments,setFavoriteComments] = useState([]);
    const [heartState, setHeartState] = useState(false);
    const {commentId, commentContent, num_of_likes, imgUrl, firstName, lastName } = data;
    
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/comment/get_favorite_comments/${questionId}/${user.user_id}`).then((res)=>{
            setFavoriteComments(res.data);
            setHeartState(getFavoriteState(res.data));
          })
    },[]);
    const likeComment = () => {
        console.log( commentId);
        console.log( user.user_id);
        console.log( questionId);
        axios({
            url:`http://localhost:8080/api/comment/like_comment`,
            method:"POST",
            data: {
                "forumId":questionId,
                "userId":user.user_id,
                "commentId":commentId,
            }
        }).then((res)=>{
            console.log(res.data);
            if(res.data.title === "liked comment") {
                setHeartState(true);
            } else {
                setHeartState(false);
            }
          })
    }

    const getFavoriteState = (favoriteComments) => {
        for(let i = 0 ; i<favoriteComments.length ; i++) {
            if(favoriteComments[i].isLiked === true && favoriteComments[i].commentId === commentId) {
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
                            ></i> {num_of_likes}
                            <i class="fa fa-flag"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="question_content">{commentContent}</div>
        </div>
    )
}
