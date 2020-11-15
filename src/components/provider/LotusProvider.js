import React, { useState } from 'react'


export const myContext = React.createContext()

function PishtazProvider({ children }) {
    //---------------------------------------------------------------global states 
   const [cartItems, setcartItems] = useState([])

    //---------------------------------------------------------------use effects 

    //--------------------------------------------------------------- funcs 
   
    //--------------------------------------------------------------- return 
    return (
        <myContext.Provider value={{
           providerCartItems:[cartItems, setcartItems]
        }}>
            {children}
        </myContext.Provider>
    )
}

export default PishtazProvider
