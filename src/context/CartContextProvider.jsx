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




      const handleIncrease = (id) =>{
        const updateCount = data.map((product) => product.id === id ? {...product , count: product.count + 1} : product)  
        setData(updateCount)
        setTotalCount(totalCount + 1)

      }

      const handleDecrease = (id) =>{
        const updateCount = data.map((product) => product.id === id && product.count > 0 ? {...product , count : product.count - 1} : product)
        setData(updateCount)
        setTotalCount(totalCount - 1)

      }

      const getLimitedTitle = (title) => {
        const words = title.split(' ');
        return words.slice(0, 4).join(' ') + (words.length > 4 ? '...' : '')
      }




    return(
        <CartContext.Provider value={{totalCount , setTotalCount , data , setData , getLimitedTitle , handleIncrease , handleDecrease  }}>
            {children}
        </CartContext.Provider >


    )

}

export default CartContextProvider