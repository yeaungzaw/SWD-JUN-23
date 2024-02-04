import React from "react";
import { GiSelfLove } from "react-icons/gi";
import { MdZoomIn } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";
import { MdAddShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const ProductListComponents = ({ data }) => {
  return (
    <div className="hover:shadow-2xl duration-300 p-4 bg-white border h-fit w-fit mx-auto">
      <div className="relative">
        <img src={data.img} />
        <h1 className="text-orange-600 text-lg absolute top-2 translate-x-[320%]">
          $ 56.20
        </h1>
      </div>
      <div className="py-4">
        <h1 className="text-center font-semibold text-gray-600">
          {data.title}
        </h1>
        <div className="py-2 flex justify-center gap-1">
          <span>
            <FaStar className="fill-red-400 text-[12px]" />
          </span>
          <span>
            <FaStar className="fill-red-400 text-[12px]" />
          </span>
          <span>
            <FaStar className="fill-red-400 text-[12px]" />
          </span>
          <span>
            <FaStar className="text-[12px]" />
          </span>
          <span>
            <FaStar className="text-[12px]" />
          </span>
        </div>
      </div>
      <div className="flex bg-gray-100">
        <button className="w-1/4 text-gray-800 border-r border-r-gray-300 py-2 flex justify-center">
          <GiSelfLove className="text-[14px]" />
        </button>
        <button className="w-1/4 text-gray-800 border-r border-r-gray-300 py-2 flex justify-center">
          <MdZoomIn className="text-[18px]" />
        </button>
        <button className="w-1/4 text-gray-800 border-r border-r-gray-300 py-2 flex justify-center">
          <LuRefreshCw className="text-[14px]" />
        </button>
        <button className="w-1/4 text-gray-800 py-2 flex justify-center">
          <MdAddShoppingCart className="text-[14px]" />
        </button>
      </div>
    </div>
  );
};

export default ProductListComponents;
