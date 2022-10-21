import React from "react";
import "./ProductReviews.css";
import StarBar from "../StarBar";

const ProductReviews = ({ reviews }) => {
  return (
    <div className="py-4">
      {reviews.map((r, i) => (
        <div key={i} className="font-semibold product-review__elem">
          <h5>{r.title}</h5>
          <StarBar count={r.rate} w='w-4' />
          <p className="text-slate-600 font-normal ">{r.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;
