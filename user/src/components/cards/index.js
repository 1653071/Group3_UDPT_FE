import React from 'react'
import avatar from '../../../src/img/avatar.png'
import Comment from '../comments'
import RepliedComments from '../comments/repliedComment';
import "./style.css"

export default function Card({ data, type }) {

    const {forum_name, forum_content, tagList, lastName, firstName, imgUrl, forum_id} = data;
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
                            <i class="fa fa-heart"></i>
                            <i class="fa fa-flag"></i>
                        </div>
                    </div>
                </div>
            </div>
            { type === 'question' ? <h3>{forum_name}</h3> : '' }
            <div className="question_content">{forum_content}</div>
            <div className="tagList">
            { 
                tagList && tagList.split(',').map((item) => {
                    return <div className="tag_item btn btn-primary">{item.name}</div>
                })
            }
        </div>
            {type === 'question' ? <Comment questionTitle={forum_name} questionId={forum_id}/> : (type !== 'replies' ? <RepliedComments /> : '') }
        </div>
    )
}
