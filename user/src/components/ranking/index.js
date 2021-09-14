import React from 'react'
import avartar from "../../img/avatar.png"
import crown from "../../img/crown.png"
import "./style.css"

export default function Ranking(props) {
    const { numOfLikes, numOfComments, username } = props.data;
    return (
        <div className="ranking">
            <div className="user_info">
            <div className="index">{props.index + 1} </div>
            <div className="username">{username}</div>
            <div><img src={avartar} /></div>
            </div>
            {+props.index + 1 === 1 ? <div><img src={crown} /></div> : ''}
            <div className="detail">
                <a>{numOfComments} answers</a>
                <a>{numOfLikes} <i class="fa fa-heart"></i></a>
            </div>
        </div>
    )
}
