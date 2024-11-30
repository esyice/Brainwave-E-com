import React, { useState } from 'react'
import ValueContext from './CartContext'

const CartContextProvider = ({children}) => {
    const [totalCount , setTotalCount] = useState ()
    return(
        <ValueContext.Provider value={{totalCount , setTotalCount}}>
            {children}
        </ValueContext.Provider >


    )

}

export default CartContextProvider