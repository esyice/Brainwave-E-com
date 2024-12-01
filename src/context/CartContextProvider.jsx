import React, { useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({children}) => {
    const [totalCount , setTotalCount] = useState (0)
    return(
        <CartContext.Provider value={{totalCount , setTotalCount}}>
            {children}
        </CartContext.Provider >


    )

}

export default CartContextProvider