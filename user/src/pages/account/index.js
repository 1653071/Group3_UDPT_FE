import React from 'react'
import Menu from '../../components/menu'
import AccountSetting from '../../components/profile/accountSetting'

export default function Account() {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className="Account">
            <Menu header="Account Setting" data={user} component={AccountSetting} />
        </div>
    )
}
