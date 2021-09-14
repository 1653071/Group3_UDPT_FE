import Axios from 'axios'
import React,{useEffect, useState} from 'react'
import TaskBar from '../../components/bars/taskbar'
import Card from '../../components/cards'
import Menu from '../../components/menu'


export default function Home() {

    const [questionList,setQuestionList] = useState([]); 
    // const questionList = [
    //     {
    //         id: 1,
    //         title: 'How to deep copy object in JS',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida nisi id urna tincidunt, quis elementum enim placerat. Cras dui eros, pellentesque non varius eget, lobortis sit amet massa. Nullam dapibus elit lacus, a varius enim gravida eget. Aenean ante tortor, sagittis eu commodo sed, finibus eu orci. Nulla sit amet dui vel tellus luctus blandit. Etiam sed mi nec massa ultricies varius sed ac ipsum. Vivamus aliquam pharetra hendrerit. Nam tincidunt molestie mi et porta. Nulla eu vehicula mauris, ut convallis massa. Fusce pharetra elit nec dolor volutpat, sit amet faucibus lacus porttitor. Pellentesque massa felis, vehicula consequat vestibulum eget, gravida at nisl. Sed scelerisque, felis vel volutpat hendrerit, massa velit pellentesque nulla, non dapibus sem enim vitae elit. Sed luctus elementum ex, at porttitor magna porttitor et.',
    //         tag: [{name:'JS'}, {name: 'react'}],
    //     },
    //     {
    //         id: 2,
    //         title: 'Issue when git clone, it said: name too long??',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida nisi id urna tincidunt, quis elementum enim placerat. Cras dui eros, pellentesque non varius eget, lobortis sit amet massa. Nullam dapibus elit lacus, a varius enim gravida eget. Aenean ante tortor, sagittis eu commodo sed, finibus eu orci. Nulla sit amet dui vel tellus luctus blandit. Etiam sed mi nec massa ultricies varius sed ac ipsum. Vivamus aliquam pharetra hendrerit. Nam tincidunt molestie mi et porta. Nulla eu vehicula mauris, ut convallis massa. Fusce pharetra elit nec dolor volutpat, sit amet faucibus lacus porttitor. Pellentesque massa felis, vehicula consequat vestibulum eget, gravida at nisl. Sed scelerisque, felis vel volutpat hendrerit, massa velit pellentesque nulla, non dapibus sem enim vitae elit. Sed luctus elementum ex, at porttitor magna porttitor et.',
    //         tag: [{name:'git'}, {name: 'github'}],
    //     },
    //     {
    //         id: 2,
    //         title: 'Should I use Redux Saga for my medium-size project',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida nisi id urna tincidunt, quis elementum enim placerat. Cras dui eros, pellentesque non varius eget, lobortis sit amet massa. Nullam dapibus elit lacus, a varius enim gravida eget. Aenean ante tortor, sagittis eu commodo sed, finibus eu orci. Nulla sit amet dui vel tellus luctus blandit. Etiam sed mi nec massa ultricies varius sed ac ipsum. Vivamus aliquam pharetra hendrerit. Nam tincidunt molestie mi et porta. Nulla eu vehicula mauris, ut convallis massa. Fusce pharetra elit nec dolor volutpat, sit amet faucibus lacus porttitor. Pellentesque massa felis, vehicula consequat vestibulum eget, gravida at nisl. Sed scelerisque, felis vel volutpat hendrerit, massa velit pellentesque nulla, non dapibus sem enim vitae elit. Sed luctus elementum ex, at porttitor magna porttitor et.',
    //         tag: [ {name:'react'}, {name: 'js'}, {name: 'redex'}, {name: 'redux-saga'} ],
    //     }
    // ]
    useEffect(()=>{
        Axios({
            method:"GET",
            url:"http://localhost:8080/api/forum/get_legal_questions"
        }).then((res)=>{
            console.log(res.data);
            setQuestionList(res.data);
      })
    },[])
    return (
        <div>
            <Menu component={Card} header={TaskBar} data={questionList}/>
        </div>
    )
}
