import React, { useState } from "react";
import Images from "../../services/images";

export default function SalonService() {
  const [salonData, setSalondata] = useState([
    {
      images: Images.foundation1,
    },

    {
      images: Images.lipstick1,
    },
    {
      images: Images.mascara1,
    },
  ]);
  return (
    <div className=" max-w-screen-xl mx-auto">
      <div className="flex gap-4">
        {salonData.map((item, index) => (
          <div
            key={index}
            className="mt-20 flex  w-60 h-60 gap-4 flex-col cursor-pointer active:opacity-50 justify-center items-center bg-sidebar"
          >
            <img src={item.images} alt="" className="h-32" />
            <div className="font-bold text-xl">Eyes Products</div>
          </div>
        ))}
        <div className="mt-20 flex  w-60 h-60 gap-4 flex-col cursor-pointer active:opacity-50 justify-center items-center bg-sidebar">
          <img src={Images.addMore} alt="" className="h-32" />
          <div className="font-bold text-xl">Eyes Products</div>
        </div>
      </div>
    </div>
  );
}
