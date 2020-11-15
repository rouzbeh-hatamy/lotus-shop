import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './minus.scss'
function MinusBtn() {
    return (
        <div className="minus-btn">
           <FontAwesomeIcon icon={faMinus}/>
        </div>
    )
}

export default MinusBtn
