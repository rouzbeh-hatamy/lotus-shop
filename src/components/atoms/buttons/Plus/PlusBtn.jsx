import React from 'react'
import { myContext } from './../../../provider/LotusProvider';

function PlusBtn({id}) {
    const {  providerCartItems } = React.useContext(myContext);
    const [cartItems, setcartItems] = providerCartItems

    const addtoCart=()=>{
        setcartItems([...cartItems,id])
    }
    return (
        <div onClick={addtoCart}>
            +
        </div>
    )
}

export default PlusBtn
