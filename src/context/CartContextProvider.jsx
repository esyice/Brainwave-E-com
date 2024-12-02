import React, { useState , useEffect } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({children}) => {
    const [totalCount , setTotalCount] = useState (0)

    const [data ,setData] = useState([])





    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then((res) => {
            if (!res.ok) {
              throw new Error('API failed')
            }
            return res.json();
          })
          .then((res) => setData(res.map((product) => ({...product , count: 0}))))
          .catch((error) => console.error('Error fetching data:', error))
      }, [])


    return(
        <CartContext.Provider value={{totalCount , setTotalCount , data , setData}}>
            {children}
        </CartContext.Provider >


    )

}

export default CartContextProvider