import React from 'react'
import Menu from '../../components/menu'
import QuestionForm from '../../components/questionForm'

export default function AddQuestion() {
    return (
        <div>
            <Menu header="Create questions" component={QuestionForm} />
        </div>
    )
}
