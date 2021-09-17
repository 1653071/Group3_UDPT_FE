import React from 'react'

export default function InfoAlert({info, isShown}) {
    return(
   <div>
       { isShown == true ? (
                  <div className="alert alert-success">
                  <strong>Success!</strong> {info}
                </div>
       )  : ""
}
       </div>
    )
}
