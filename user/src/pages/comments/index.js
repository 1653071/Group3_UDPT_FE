import Axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router'
import TaskBar from '../../components/bars/taskbar'
import CardComment from '../../components/cardComment'
import Card from '../../components/cards'
import Menu from '../../components/menu'


export default function CommentPage() {
    const {forumId} = useParams();
    const [questionList,setQuestionList] = useState([]); 
    useEffect(()=>{
        Axios({
            method:"GET",
            url:`http://localhost:8080/api/comment/get_comments/${forumId}`
        }).then((res)=>{
            setQuestionList(res.data);
      })
    },[])
    return (
        <div>
            <Menu component={CardComment} header={TaskBar} data={questionList} questionId={forumId}/>
        </div>
    )
}
