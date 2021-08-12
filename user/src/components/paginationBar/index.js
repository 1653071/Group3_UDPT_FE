import React from 'react'
import "./style.css"

export default function PaginationBar({numOfItem}) {
    const getPageNumber = () => {
        const numPage = numOfItem + 1;
        if(numPage < 12) return 1;
        if(Number.isInteger(numPage/12)) return numOfItem;
        return parseInt(numPage/12) + 1;
    }

    const drawPagination = () => {
        const arr = [...Array(getPageNumber()).keys()]
        return arr.map((item) => {
            return <span>{item + 1}</span>
        })
    }
    return (
        <div className="pagination">
            <div className="pagination_content">{drawPagination()}</div>
        </div>
    )
}
