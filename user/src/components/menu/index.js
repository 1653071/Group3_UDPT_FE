import React from 'react'
import SideBar from '../bars/sidebar'
import "./style.css"

export default function Menu({data, setQuestionList, questionId,component: Component, header: Header, header}) {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="menu">
            <div className="menu_content row">
                <SideBar />
                <div className="col-sm-6">
                    {typeof header !== 'string' ? <Header setQuestionList={setQuestionList} /> : <div><h3>{header}</h3><hr/></div>}
                    {console.log(data)}
                    { data ? Array.isArray(data) ? data.map((item, index) => {
                        return <Component data={item} index={index} type="question" user={user} questionId={questionId}/>
                    }) : 
                         <Component data={data}/>
                       : <Component data={data}/>
                    } 
                    {/* {renderComponent(data)} */}
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}
