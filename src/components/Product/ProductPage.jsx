import React from "react";
import { useContext ,useState } from "react";
import CartContext from "../../context/CartContext";

function productPage({productId}) {

  const { data ,handleIncrease } = useContext(CartContext)


    const [loding_icon, setLoding_icon] = useState(true);
  
    const loding = (id) => {
      setLoding_icon(false);
      setTimeout(() => {
        handleIncrease(id);
        setLoding_icon(true);
      }, 300);
    };


  const item = data.find((product)=> product.id === productId)

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        {item ? (
          <div
            key={item.id}
            className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16"
          >
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full max-w-full object-cover"
                      src={item.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                {item.title}
              </h1>

              <div className="mt-5 flex items-center">
                {/* <div className="flex items-center">
                  <svg
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    rating of product rating-rate 
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                </div> */}
                <p className="ml-2 text-sm font-medium text-gray-500">
                  {/* total review of product given by user  in api is rating-count */}
                  {item.rating.count} Reviews
                </p>
              </div>

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  {/* price of te product  */}
                  <h1 className="text-3xl font-bold">${item.price} </h1>
                </div>
                <button
                  onClick={() => loding(item.id)}
                  className="mt-2 rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-800 transition duration-300"
                >
                  {loding_icon ? (
                    <p>Add to Cart</p>
                  ) : (
                    <div
                      className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                      role="status"
                    >
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                      </span>
                    </div>
                  )}
                </button>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="mt-8 flow-root sm:mt-12">
                {/* product dicripition heading */}
                <h1 className="text-3xl font-bold">Delivered To Your Door</h1>

                {/* product dicripition  */}
                <p className="mt-4">{item.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <h1>we gat a error</h1>
        )}
      </div>
    </section>
  );
}

export default productPage;
