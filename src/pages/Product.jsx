import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext'

function Product() {

    const [data ,setData] = useState([])
    const [cartCount , setCartCount ] = useState(0)

    const {setTotalCount} = useContext(CartContext)



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

    useEffect(()=>{
      setTotalCount(cartCount)
    },[cartCount])

      const handleIncrease = (id) =>{
        const updateCount = data.map((product) => product.id === id ? {...product , count: product.count + 1} : product)  
        setData(updateCount)
        setCartCount(cartCount + 1)

        
      }

      const handleDecrease = (id) =>{
        const updateCount = data.map((product) => product.id === id && product.count > 0 ? {...product , count : product.count - 1} : product)
        setData(updateCount)
        setCartCount(cartCount - 1)


        
      }

      const getLimitedTitle = (title) => {
        const words = title.split(' ');
        return words.slice(0, 4).join(' ') + (words.length > 4 ? '...' : '')
      }



      return (
        <div
          className="flex items-center bg-indigo-100 w-screen min-h-screen">
          <div className="container ml-auto mr-auto flex flex-wrap items-start">
    

    
            {data.map ((products)=>(
              <div key={products.id} className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 mt-4">
                  <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                    <figure className="mb-2">
                        <img
                          src={products.image}
                          alt="iPhone 11 Pro Max"
                          className="h-64 ml-auto mr-auto"
                        />
                    </figure>
                  <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                    <div>
                      <h5 className="text-white text-2xl font-bold leading-none">
                        {getLimitedTitle(products.title)}
                      </h5>
                    </div>
                    <div className="flex items-center">
                      <div className="text-lg text-white font-light">$ {products.price}</div>
                    {products.count === 0 ? (
                    <button
                      onClick={() => handleIncrease(products.id)}
                      className="ml-auto rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-800 transition duration-300"
                    >
                      Add
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handleDecrease(products.id)}
                        className="ml-auto rounded-full bg-red-600 text-white hover:bg-red-800 w-8 h-8 flex justify-center items-center transition duration-300"
                      >
                        -
                      </button>
                      <div className="text-lg text-white font-light mx-4">
                        {products.count}
                      </div>
                      <button
                        onClick={() => handleIncrease(products.id)}
                        className="rounded-full bg-green-600 text-white hover:bg-green-800 w-8 h-8 flex justify-center items-center transition duration-300"
                      >
                        +
                      </button>
                    </>
                  )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
    
          </div>
        </div>
    );

      
}

export default Product



