import axios from 'axios'
import React,{ useEffect, useState } from 'react'
import ErrorAlert from '../alert/ErrorAlert';
import InfoAlert from '../alert/InfoAlert';
import CardComment from '../cardComment';
import ERROR_MSG from "../../constants/index";
import "../comments/style.css"

export default function Comment({questionId, questionTitle}) {


    const [comments,setComments] = useState([]);
    const [inputComments,setInputComments] = useState("");
    const [shownErrorAlert,setShowErrorAlert] = useState(false);
    const [errAlertMsg,setErrorAlertMsg] = useState("");
    const [shownInfoAlert,setShowInfoAlert] = useState(false);
    const [infoAlertMsg,setInfoAlertMsg] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const getCommentList = () => {
      axios.get(`http://localhost:8080/api/comment/get_comments/${questionId}`).then((res)=>{
        setComments(res.data);
      })
    }
    const sendComment = () => {
      if(inputComments !== '') {
        axios({
          url:"http://localhost:8080/api/comment/create_comment",
          method:"POST",
          data: {
            "userId": user.user_id,
            "forumId": questionId,
            "commentContent":inputComments,
          }
        }).then((res)=>{
          if(+res.data.statusCode === 204) {
              setInputComments('');
              setInfoAlertMsg(res.data.message);
              setShowInfoAlert(true);
              setShowErrorAlert(false);
              getCommentList();
              setTimeout(()=>{
                setShowInfoAlert(false);
              },1500)
          } else {
            setErrorAlertMsg(res.data.message);
            setShowInfoAlert(false);
            setShowErrorAlert(true);
          }
        })
      } else {
        setErrorAlertMsg(ERROR_MSG.COMMENT_CONTENT_REQUIRED);
        setShowInfoAlert(false);
        setShowErrorAlert(true);
      }
     
    }
    return (
        <div>
          <div className="comment_field">
            <input className="comment" type='text' size="70" placeholder="Comment.."  value={inputComments}
            onChange={(e)=>{
              setInputComments(e.target.value);
            }}
            ></input>
            <i class="fa fa-paper-plane" onClick={()=>{sendComment()}}></i>
            </div>
            <InfoAlert info={infoAlertMsg} isShown={shownInfoAlert} />
            <ErrorAlert error={errAlertMsg} isShown={shownErrorAlert}/>
            <hr/>
             <div data-toggle="modal" data-target="#myModal"
             onClick={()=>{window.open(`get_comments/${questionId}`,"_parent")}}
             >
                Other comments ....
            </div>
      </div>
    )
}
