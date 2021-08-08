import React from 'react'
import avatar from '../../../src/img/avatar.png'
import "./style.css"

export default function Card() {
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
            <h3>Title</h3>
            <div className="question_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida nisi id urna tincidunt, quis elementum enim placerat. Cras dui eros, pellentesque non varius eget, lobortis sit amet massa. Nullam dapibus elit lacus, a varius enim gravida eget. Aenean ante tortor, sagittis eu commodo sed, finibus eu orci. Nulla sit amet dui vel tellus luctus blandit. Etiam sed mi nec massa ultricies varius sed ac ipsum. Vivamus aliquam pharetra hendrerit. Nam tincidunt molestie mi et porta. Nulla eu vehicula mauris, ut convallis massa. Fusce pharetra elit nec dolor volutpat, sit amet faucibus lacus porttitor. Pellentesque massa felis, vehicula consequat vestibulum eget, gravida at nisl. Sed scelerisque, felis vel volutpat hendrerit, massa velit pellentesque nulla, non dapibus sem enim vitae elit. Sed luctus elementum ex, at porttitor magna porttitor et.</div>
        
            <input className="comment" type='text' placeholder="Comment.."></input>
            <hr/>

        </div>
    )
}
