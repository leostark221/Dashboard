import React, { useState } from "react";
import images from "../services/images";

const Navbar = () => {
  return (
    <div className="flex  max-w-screen-2xl mx-auto ">
      <div className="flex mt-10 w-full justify-between ">
        <div className="w-80p h-14 flex items-center rounded-lg bg-sidebar">
          <img src={images.search} alt="" className="h-5  pl-4 pr-4" />
          <input
            type="text"
            className="focus:outline-none h-12 w-80p bg-sidebar"
            placeholder="Search"
          />
        </div>
        <div
          className="bg-sidebar flex items-center justify-evenly h-14 cursor-pointer active:opacity-50
        rounded-lg  w-40"
        >
          <img src={images.notify} alt="" className="w-5" />
          <div className="font-semibold">Notification</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
