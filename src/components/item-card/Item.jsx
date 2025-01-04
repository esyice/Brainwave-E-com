import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

function Item({ products }) {
  const { getLimitedTitle, setProductId , handleIncrease } =
    useContext(CartContext);

  const [loding_icon, setLoding_icon] = useState(true);

  const loding = (id) => {
    setLoding_icon(false);
    setTimeout(() => {
      handleIncrease(id);
      setLoding_icon(true);
    }, 300);
  };

  return (
    <div
      key={products.id}
      className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 mt-4"
    >
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img src={products.image} className="h-64 ml-auto mr-auto" />
        </figure>
        <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
              {getLimitedTitle(products.title)}
            </h5>
            <div className="text-lg text-white font-light">
              $ {products.price}
            </div>
          </div>
          <div className="flex justify-evenly items-center">
            <button
              onClick={() => loding(products.id)}
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
            <Link to="/productPage">
              <button onClick={()=> setProductId(products.id)} className="mt-2 rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-800 transition duration-300">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
