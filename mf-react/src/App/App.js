import React from "react";
import "./App.css";
import { useGet } from "../utils/hooks";
import { getProductById } from "../api/api";
import StarBar from "../components/StarBar";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import {draftReviews} from "../api/dummy";

const App = ({ productId }) => {
  const { data: product, loading } = useGet(
    getProductById,
    { productId },
    { isObj: true, cancelFirstEffect: !productId }
  );

  console.log('product', product)
  
  return (
    product && (
      <>
        <div className="flex rounded-lg shadow-lg p-6 flex-wrap xl:flex-nowrap">
          <div className="flex-none w-48 md:w-80 mx-auto xl:mx-36 2xl:mx-56 my-6">
            <img src={product.image} alt="" />
          </div>
          <div className="p-6">
            <h1 className="text-base md:text-xl font-semibold">
              {product.title}
            </h1>
            <h4 className="text-slate-500 mt-2 text-sm md:text-base ">
              {product.category}
            </h4>
            <h2 className="mt-4 text-2xl">${product.price}</h2>
            <button className="mt-6 text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5">
              Add to cart
            </button>
            <p className='mt-4 text-slate-600'>{product.description}</p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg p-6 my-8">
          <h3 className="text-base font-semibold">
            Customer reviews
            <span className="ml-3 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {product.rating?.count} Reviews
            </span>
          </h3>
          <StarBar count={product.rating?.rate} />
          <ProductReviews reviews={draftReviews} />
        </div>
      </>
    )
  );
};

export default App;
