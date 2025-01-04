import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext'
import Item from '../components/item-card/Item'

function Product() {

    const { data }  = useContext(CartContext)

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
        <div className="flex items-center bg-indigo-100 w-screen">
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
              <Item key={products.id} products={products}/>


            ))}
    
          </div>
        </div>
    );

      
}

export default Product



