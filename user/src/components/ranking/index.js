import React from 'react'
import avartar from "../../img/avatar.png"
import "./style.css"

export default function Ranking(props) {
    const { questions, answer, user, rank } = props.data;
    return (
        <div className="ranking">
            <div className="user_info">
            <p>{rank}.</p>
            <p>{user}</p>
            <img src={avartar} />
            </div>
            <div className="detail">
                <a>{questions} questions</a>,
                <a>{answer} answers</a>
            </div>
        </div>
    )
}
