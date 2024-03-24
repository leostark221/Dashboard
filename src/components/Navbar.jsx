import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import images from "../services/images";
import { useStateContext } from '../context';
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { address } = useStateContext();

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6 p-3">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#C0C0C0] rounded-[100px]">
        <input type="text" placeholder="Search for offers" className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />
        
        <div className="w-[72px] h-full rounded-[20px] bg-[#012269] flex justify-center items-center cursor-pointer">
          <img src={images.search} alt="search" className="w-[15px] h-[15px] object-contain"/>
        </div>
      </div>
      <div>{address}</div>
      <div className="sm:flex hidden flex-row justify-end gap-4">
      <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />

        <Link to="/">
          <div className="w-[52px] h-[52px] rounded-full bg-[#012269] flex justify-center items-center cursor-pointer">
            <img src={images.profile} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>

      {/* Small screen navigation */}
        <div className="sm:hidden flex justify-between items-center relative">
        <div className="flex justify-center items-center cursor-pointer">
          </div>

          <img 
            src={images.menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          />

          <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
            <div className="flex mx-4">
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar