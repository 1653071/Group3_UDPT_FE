import React from 'react'

export default function ErrorAlert({error, isShown}) {
    return(
   <div>
       { isShown == true ? (
                  <div className="alert alert-danger">
                  <strong>Error!</strong> {error}
                </div>
       )  : ""
}
       </div>
    )
}
