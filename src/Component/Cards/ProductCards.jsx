import React from "react";
import { Link } from "react-router-dom";

function ProductCards(props) {
  
    const id = props.id;
    const title = props.title;
    const badgeDesc = props.badgeDesc;
    const image = props.image;
    const description = props.description;
    const price = props.price;
    const link = props.link;
    const linkDesc = props.linkDesc;
    const duration = props.duration;
  return (
    <div>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl shadow-slate-700/[.7]">
        <img
          className="w-full h-auto rounded-t-xl"
          src={image}
          alt="Image Description"
        />
        <div className="p-4 md:p-5">
          <div className="flex justify-between items-center gap-1">
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-[#ffb606] text-[#ffb606]">
              {badgeDesc}
            </span>
          </div>
          <div className="flex items-center gap-1 my-4">
            <div className="text-xl">
                🕑
            </div>
            :
            <div className="text-xl font-[500]">
                {duration}
            </div>
          </div>
          <p className="mt-1 text-gray-500">{description}</p>
          <div className="flex justify-between items-center gap-1">
            <span className="font-bold text-3xl text-gray-800">
                {price}
            </span>
            <Link
              to={`/products/${id}`}
              className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#ffb606] text-white hover:bg-[#ffb606]700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-"
              href="#"
            >
              {linkDesc}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
