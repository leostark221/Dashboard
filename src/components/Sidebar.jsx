import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import images from "../services/images";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItem = [
    {
      name: "Users",
      notActive: images.user,
      activeImg: images.selectedUser,
      route: "/",
    },
    {
      name: "Product Seller",
      notActive: images.pediCure,
      activeImg: images.selectedpediCure,
      route: "/seller",
    },
    {
      name: "Salon Services",
      notActive: images.hairDry,
      activeImg: images.selectedHairdry,
      route: "/Service",
    },
  ];

  return (
    <div className="fixed inset-y-0 left-0 bg-sidebar w-60 z-10 flex flex-col">
      <div className="items-center flex flex-col mt-40">
        {menuItem.map((item) => (
          <NavLink
            to={item.route}
            key={item.name}
            className={`cursor-pointer h-20 ${
              location.pathname === item.route
                ? "text-activeText"
                : "text-black"
            }`}
          >
            <div className="gap-3 flex items-center w-40">
              <div className="w-10  ">
                {location.pathname === item.route ? (
                  <img src={item.activeImg} alt={item.name}></img>
                ) : (
                  <img src={item.notActive} alt={item.name}></img>
                )}
              </div>
              <div className="font-semibold ">{item.name}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
