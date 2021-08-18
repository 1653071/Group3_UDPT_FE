import React from 'react'
import SideBar from '../bars/sidebar'
import "./style.css"

export default function Menu({data, component: Component, header: Header, header}) {
    return (
        <div className="menu">
            <div className="menu_content row">
                <SideBar />
                <div className="col-sm-6">
                    {typeof header !== 'string' ? <Header /> : <div><h3>{header}</h3><hr/></div>}
                    { Array.isArray(data) ? data.map((item) => {
                        return <Component data={item} type="question"/>
                    }) : 
                         <Component />
                    } 
                    {/* {renderComponent(data)} */}
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}
