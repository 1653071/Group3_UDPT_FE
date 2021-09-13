import axios from 'axios'
import React,{ useEffect, useState } from 'react'
import CardComment from '../cardComment';
import Card from '../cards'
import "../comments/style.css"

export default function Comment({questionId}) {
//   const comments = [
//     {
//         id: 1,
//         title: 'How to deep copy object in JS',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida nisi id urna tincidunt.',
//         tag: [{name:'JS'}, {name: 'react'}],
//     },
//     {
//         id: 2,
//         title: 'Issue when git clone, it said: name too long??',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida nisi id urna tincidunt,',
//         tag: [{name:'git'}, {name: 'github'}],
//     },
//     {
//         id: 2,
//         title: 'Should I use Redux Saga for my medium-size project',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida nisi id urna tincidunt, quis elementum enim placerat. Cras dui eros, pellentesque non varius eget, lobortis sit amet massa. Nullam dapibus elit lacus, a varius enim gravida eget. Aenean ante tortor, sagittis eu commodo sed, finibus eu orci. Nulla sit amet dui vel tellus luctus blandit. Etiam sed mi nec massa ultricies varius sed ac ipsum. Vivamus aliquam pharetra hendrerit. Nam tincidunt molestie mi et porta. Nulla eu vehicula mauris, ut convallis massa. Fusce pharetra elit nec dolor volutpat, sit amet faucibus lacus porttitor. Pellentesque massa felis, vehicula consequat vestibulum eget, gravida at nisl. Sed scelerisque, felis vel volutpat hendrerit, massa velit pellentesque nulla, non dapibus sem enim vitae elit. Sed luctus elementum ex, at porttitor magna porttitor et.',
//         tag: [{name:'react'}, {name: 'js'}, {name: 'redex'}, {name: 'redux-saga'} ],
//     }
// ]
    const [comments,setComments] = useState([]);
    console.log(questionId);
    useEffect(()=>{
      axios.get(`http://localhost:8080/api/comment/get_comments/${questionId}`).then((res)=>{
        console.log(res.data);
        setComments(res.data);
      })
    },[])
    return (
        <div>
          <div className="comment_field">
            <input className="comment" type='text' size="70" placeholder="Comment.."></input>
            <i class="fa fa-paper-plane"></i>
            </div>
            <hr/>
             <div data-toggle="modal" data-target="#myModal">
                Other comments ....
            </div>
        <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              {comments.map((item) => {
                  return <CardComment type='comment' data={item}/>
              })}
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}
