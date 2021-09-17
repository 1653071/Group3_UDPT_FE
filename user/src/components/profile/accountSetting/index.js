import axios from 'axios';
import { EEXIST } from 'constants';
import React, { useEffect, useState } from 'react'
import avatar from "../../../img/avatar.png"
import Card from '../../cards';
import "./style.css"

export default function AccountSetting({ data }) {
    const { user_id } = data;
    const [numOfQuestions, setNumOfQuestions] = useState(0);
    const [numOfComments, setNumOfComments] = useState(0);
    const [myQuestions, setMyQuestions] = useState([]);
    const [emailChange, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [user, setUser] = useState("");
    useEffect(() => {
        axios(`http://localhost:8080/api/user/get_user/${user_id}`).then((res) => {
            setUser(res.data);
            setEmail(res.data.email);
            setFirstName(res.data.first_name);
            setLastName(res.data.last_name);
        })
        axios(`http://localhost:8080/api/forum/get_num_forums_by_user/${user_id}`).then((res) => {
            setNumOfQuestions(res.data);
        });
        axios(`http://localhost:8080/api/comment/num_of_comments/${user_id}`).then((res) => {
            setNumOfComments(res.data);
        });
    }, [])

    const getMyQuestion = () => {
        axios(`http://localhost:8080/api/forum/get_forum_by_user/${user_id}`).then((res) => {
            setMyQuestions(res.data);
        });
    }

    const renderMyQuestions = () => {
        return myQuestions && myQuestions.map((item) => {
            return <Card data={item} type="question" />
        })
    }

    const updateProfile = () => {
        axios({
            url: "http://localhost:8080/api/user/update_profile",
            method: "PUT",
            data: {
                "userId": user_id,
                "firstName": firstName,
                "lastName": lastName,
                "email": emailChange
            }
        }).then(() => {
            // use nested then() to make sure the DB updated then we can get the latest change .......
            axios(`http://localhost:8080/api/user/get_user/${user_id}`).then((res) => {
                setUser(res.data);
            })
        })
       
    }

    return (
        <div>
            <div className="account_setting row">
                <div className="avatar col-sm-5">
                    <div className="card" style={{ width: '250px' }}>
                        <img className="card-img-top" src={avatar} alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">{user.first_name} {user.last_name}</h4>
                            <a href="#" className="btn btn-primary">Change image</a>
                        </div>
                    </div>
                </div>
                <div className="setting col-sm-4">
                    <p>Username</p>
                    <p className="username userdata">{user.username}</p>
                    <p>Email</p>
                    <p className="email userdata">{user.email}</p>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#profileModal">Edit</button>
                    <div className="modal fade" id="profileModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                {/* Modal Header */}
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal Heading</h4>
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                </div>
                                {/* Modal body */}
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="firstname">First Name:</label>
                                        <input type="text" className="form-control" value={firstName}
                                            onChange={(e) => {
                                                setFirstName(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">Last Name:</label>
                                        <input type="text" className="form-control" value={lastName}
                                            onChange={(e) => {
                                                setLastName(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input type="confirmPassword" className="form-control" value={emailChange}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                    </div>
                                    {/* Modal footer */}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success" data-dismiss="modal"
                                        onClick={()=>{updateProfile()}}
                                        >Update</button>
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1"></div>

                <div className="info col-sm-2">
                    {numOfQuestions > 0 ? <a href="#" onClick={() => { getMyQuestion() }}>{numOfQuestions} posts</a> : <p>{numOfQuestions} posts</p>}
                    <p>{numOfComments} answers</p>
                </div>

                <div className="myQuestions">
                    {renderMyQuestions()}
                </div>
            </div>
        </div>
    )
}
