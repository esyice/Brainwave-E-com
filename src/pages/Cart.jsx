import React, { useContext, useEffect, useState } from "react";

import CartContext from "../context/CartContext";

function Cart() {
  const { data, totalCount, getLimitedTitle, handleIncrease, handleDecrease } =
    useContext(CartContext);

  const [value, setValue] = "0";

  const totalPrice = data.reduce(
    (total, product) => total + product.price * product.count,
    0
  );

  return (
    <div className="font-[sans-serif] bg-[#5c5c5c]">
      <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
          <div className="relative h-full">
            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
              <div className="space-y-4">
                {totalCount != 0 ? (
                  data.map((product, index) =>
                    product.count > 0 ? (
                      <div
                        key={index}
                        className="flex items-start gap-4 bg-gray-700 p-4 rounded-md"
                      >
                        <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full object-contain"
                          />
                        </div>
                        <div className="w-full">
                          <h3 className="text-base text-white">
                            {getLimitedTitle(product.title)}
                          </h3>
                          <ul className="text-xs text-gray-300 space-y-2 mt-2">
                            <li className="flex flex-wrap gap-4">
                              Quantity{" "}
                              <button
                                onClick={() => handleDecrease(product.id)}
                                className="ml-auto rounded-full bg-red-600 text-white hover:bg-red-800 w-8 h-8 flex justify-center items-center transition duration-300"
                              >
                                -
                              </button>
                              <div className="text-lg text-white font-light mx-4">
                                {product.count}
                              </div>
                              <button
                                onClick={() => handleIncrease(product.id)}
                                className="rounded-full bg-green-600 text-white hover:bg-green-800 w-8 h-8 flex justify-center items-center transition duration-300"
                              >
                                +
                              </button>
                            </li>
                            <li className="flex flex-wrap gap-4">
                              Total Price{" "}
                              <span className="ml-auto">
                                ${product.count * product.price}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ) : null
                  )
                ) : (
                  <h3 className="text-white text-center">
                    No products available
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>
        {totalCount != 0 ? (
          <div className="cart">
            <div
              className="max-w-3xl mx-auto p-6 bg-[#bebaba] rounded shadow-sm my-6"
              id="invoice"
            >
              <div className="-mx-4 mt-8 flow-root sm:mx-0">
                <div className="flex flex-col divide-y divide-gray-200">
                  <div className="flex py-3 font-semibold text-gray-900">
                    <div className="flex-1">Items</div>
                    <div className="w-1/6 text-right">Quantity</div>
                    <div className="w-1/6 text-right mx-1">Price</div>
                    <div className="w-1/6 text-right mx-1">Amount</div>
                  </div>

                  {data.map((product, index) =>
                    product.count > 0 ? (
                      <div key={index} className="flex py-3">
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {product.title}
                          </p>
                        </div>
                        <div className="w-1/6 text-right text-sm text-gray-500">
                          {product.count}
                        </div>
                        <div className="w-1/6 text-right text-sm text-gray-500">
                          ${product.price}
                        </div>
                        <div className="w-1/6 text-right text-sm text-gray-500">
                          ${product.price * product.count}
                        </div>
                      </div>
                    ) : null
                  )}

                  <div className="flex pt-4">
                    <div className="flex-1"></div>
                    <div className="w-1/6 text-right text-sm font-bold text-gray-900">
                      Total
                    </div>
                    <div className="w-1/6 text-right text-sm text-gray-900"></div>
                    <div className="w-1/6 text-right text-sm font-bold text-gray-900">
                      ${totalPrice.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="text-white  text-2xl mt-4">Nothing to show </h1>
        )}
      </div>
    </div>
  );
}

export default Cart;
