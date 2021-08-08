import React from 'react'
import avatar from '../../../src/img/avatar.png'
import Comment from '../comments'
import RepliedComments from '../comments/repliedComment';
import "./style.css"

export default function Card({ data, type }) {

    const {content, title, tag} = data;
    return (
        <div className="card">
            <div className="row">
                <div className="col">
                    <img src={avatar} /> Vu Minh Dang
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
            { type === 'question' ? <h3>{title}</h3> : '' }
            <div className="question_content">{content}</div>
            <div className="tagList">
            { 
                tag && tag.map((item) => {
                    return <div className="tag_item btn btn-primary">{item.name}</div>
                })
            }
        </div>
            <input className="comment" type='text' placeholder="Comment.."></input>
            <hr/>
            {type === 'question' ? <Comment questionTitle={title} /> : (type !== 'replies' ? <RepliedComments /> : '') }
        </div>
    )
}
