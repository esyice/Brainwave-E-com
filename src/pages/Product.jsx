import React, { useEffect, useState } from 'react'

function Product() {

    const [data ,setData] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then((res) => {
            if (!res.ok) {
              throw new Error('API failed');
            }
            return res.json();
          })
          .then((res) => setData(res))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
    

      const getLimitedTitle = (title) => {
        const words = title.split(' ');
        return words.slice(0, 4).join(' ') + (words.length > 4 ? '...' : '');
      }


      return (
        <div
          className="flex items-center bg-indigo-100 w-screen min-h-screen">
          <div className="container ml-auto mr-auto flex flex-wrap items-start">
    

    
            {data.map ((products)=>(
              <div key={products.id} className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 ">
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
                      <div className="text-lg text-white font-light">₹ {products.price}</div>
                      {products.count === 0 ? (
                          <button
                            onClick={() => handleIncrease(index)}
                            className="rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-800 transition duration-300 flex ml-auto"
                          >
                            Add
                          </button>
                        ) : (
                          <>
                            <button
                              onClick={() => handleDecrease(index)}
                              className="ml-auto rounded-full bg-red-600 text-white hover:bg-red-800 w-8 h-8 flex justify-center items-center transition duration-300"
                            >
                              -
                            </button>
                            <div className="text-lg text-white font-light mx-4">
                              {products.count}
                            </div>
                            <button
                              onClick={() => handleIncrease(index)}
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



//   return (

//     <>
//         {data.map((product) =>(
//             <div className='bg-slate-400' key={product.id}>
//                 <div >
//                     <img className='' src={product.image} alt="Product Image"/>
 
//                 </div>
//                 <div className="p-4">
//                     <h3 className="text-lg font-medium mb-2">{product.title}</h3>
//                     <p className="text-gray-600 text-sm mb-4">{product.description}.</p>
//                     <div className="flex items-center justify-between">
//                         <span className="font-bold text-lg">${product.price}</span>
//                         <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                             Buy Now
//                         </button>
//                     </div>
//                 </div>
//             </div>            
//         ))}
//     </>



//   )