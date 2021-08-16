import React from 'react'
import Menu from '../../components/menu'
import AccountSetting from '../../components/profile/accountSetting'

export default function Account() {
    return (
        <div className="Account">
            <Menu header="Account Setting" component={AccountSetting} />
        </div>
    )
}
