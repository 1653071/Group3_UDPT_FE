import Axios from 'axios'
import React,{useEffect, useState} from 'react'
import TaskBar from '../../components/bars/taskbar'
import Card from '../../components/cards'
import Menu from '../../components/menu'


export default function Home() {
    if(localStorage.getItem("isLogin" ) === 'false')
    window.location.replace("/signin");
    const [questionList,setQuestionList] = useState([]); 
    useEffect(()=>{
        Axios({
            method:"GET",
            url:"http://localhost:8080/api/forum/get_legal_questions"
        }).then((res)=>{
            setQuestionList(res.data);
      })
    },[])
    return (
        <div>
            <Menu component={Card} header={TaskBar} data={questionList} setQuestionList={setQuestionList}/>
        </div>
    )
}
