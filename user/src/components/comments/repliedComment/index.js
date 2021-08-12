import React, {useState} from 'react'
import Card from '../../cards'
import "../../comments/style.css"

export default function RepliedComments({ type }) {
    const  [isShownReplies, setShowReplies] = useState(false);
    const replies = [
        {
            id: 1,
            title: 'How to deep copy object in JS',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida nisi id urna tincidunt.',
            tag: [{name:'JS'}, {name: 'react'}],
        },
        {
            id: 2,
            title: 'Issue when git clone, it said: name too long??',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida nisi id urna tincidunt,',
            tag: [{name:'git'}, {name: 'github'}],
        },
        {
            id: 2,
            title: 'Should I use Redux Saga for my medium-size project',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida nisi id urna tincidunt, quis elementum enim placerat. Cras dui eros, pellentesque non varius eget.',
            tag: [{name:'react'}, {name: 'js'}, {name: 'redex'}, {name: 'redux-saga'} ],
        }
    ]
    let isShown = isShownReplies;
    return (
        <div>
            <div className="comment_field">
            <input className="comment" type='text' size="40" placeholder="Comment.."></input>
            <i class="fa fa-paper-plane"></i>
            </div>
            <hr/>
            {replies && isShownReplies
            ? 
            <div onClick={() => setShowReplies(!isShown)}>
            Hide replies..
            </div>
            : 
            <div onClick={() => setShowReplies(!isShown)}>
            Show replies..
            </div>
        }
            {replies && isShownReplies && replies.map((item) => {
                return <Card data={item} type="replies"/>
            })}
        </div>
    )
}
