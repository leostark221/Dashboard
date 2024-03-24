import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import {FaBars} from "react-icons/fa"
import images from "../services/images";

export default function Header() {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);


 
  const menuItem = [
    { name: "Dashboard", icon: images.Home, route: "/dashboard" },
    { name: "Seller", icon: images.MessageMail, route: "/seller" },
    { name: "Buyer", icon: images.BarChartAnalysis, route: "/buyer" },
    { name: "Crypto", icon: images.exchange, route: "/Crypto" }
    // ... to be added
  ];

  return (
    <div className={`fixed inset-y-0 left-0 z-10 flex flex-col ${
        isOpen ? "w-64" : "w-20"
      }  transition-width duration-300`}>``
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="icon"><img  src={images.logoIcon} alt="logo icon" /></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item)=>(
                       <NavLink to={item.route} key={item.name} className="link" >
                           <div className="icon"><img src={item.icon} alt={"${item.name} Icon"}></img></div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
      </div>
  );
}
