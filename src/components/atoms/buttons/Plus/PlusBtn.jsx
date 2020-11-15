import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { myContext } from './../../../provider/LotusProvider';
import './plus.scss'
function PlusBtn({id}) {
    const {  providerCartItems } = React.useContext(myContext);
    const [cartItems, setcartItems] = providerCartItems

    const addtoCart=()=>{
        setcartItems([...cartItems,id])
    }
    return (
        <div onClick={addtoCart} className="plus-btn">
          <FontAwesomeIcon icon={faPlus}/>
        </div>
    )
}

export default PlusBtn
