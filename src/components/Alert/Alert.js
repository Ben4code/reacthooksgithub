import React from 'react'

const Alert = ({msg}) =>{
    return (
        <div className="alert">
            <i className="fa fa-info-circle"></i> <span>{msg}</span>            
        </div>
    )
}


export default Alert;