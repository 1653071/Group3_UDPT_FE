import React from 'react'
import TaskBar from '../../components/bars/taskbar'
import Menu from '../../components/menu'
import Ranking from '../../components/ranking'

export default function Chart() {
    const rankings = [
        {
            id: 0,
            user:"Nguyen A",
            questions:10,
            answer:10,
            rank: 1,
        },
        {
            id: 1,
            user:"Nguyen B",
            questions:9,
            answer:9,
            rank: 2,
        },
        {
            id: 2,
            user:"Nguyen C",
            questions:8,
            answer:8,
            rank: 3,
        },
        {
            id: 3,
            user:"Nguyen D",
            questions:7,
            answer:7,
            rank: 4,
        },
    ]
    
    return (
        <div>
            <Menu 
            component={Ranking} 
            header="Ranking" 
            data={rankings}/>
        </div>
    )
}
