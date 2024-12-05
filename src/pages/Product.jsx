import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext'

function Product() {

    const { data , getLimitedTitle , handleIncrease , handleDecrease}  = useContext(CartContext)

    const [ selectedCategory , setSelectedCategory] = useState('All Category')
    const [sort , setSort] = useState('Sort')

    const categorys = ['All Category' , ...new Set(data.map((product)=> product.category))]


    const filter = selectedCategory ===  'All Category' ? data : data.filter((product)=> product.category === selectedCategory) ;
    

    const sorted = [...filter].sort((a,b)=>{
      if (sort === "asc") return a.price - b.price 
      if (sort === "desc") return b.price - a.price 
      return 0
    })



      return (
        <div className="flex items-center bg-indigo-100 w-screen min-h-screen">
          <div className="container ml-auto mr-auto flex flex-wrap items-start">

            <div className='flex w-full mb-4 p-4 justify-around '>

              <select className='px-4 py-2 rounded-md ' value={selectedCategory} onChange={(e)=> setSelectedCategory(e.target.value)}>
                {categorys.map((category)=>(
                  <option key={category} value={category}>{category}</option>
                ))
                }

              </select>
              <select className='px-4 py-2 rounded-md'value={sort} onChange={(e)=>setSort(e.target.value)}>
                <option value="none">Sort by Price</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>

            </div>

            {sorted.map ((products)=>(
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



