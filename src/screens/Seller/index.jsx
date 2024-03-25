import React from "react";
import { useState } from "react";
import Images from "../../services/images";

export default function Seller() {
  const [userData, setUserdata] = useState([
    {
      profilePic: Images.profilePic,
      name: "Andrew Bojangles",
      phoneNumber: "+79000010101",
      Email: "Email",
      Activity: "2 days ago",
    },
    {
      profilePic: Images.profilePic,
      name: "Andrew Bojangles",
      phoneNumber: "+79000010101",
      Email: "Email",
      Activity: "2 days ago",
    },
    {
      profilePic: Images.profilePic,
      name: "Andrew Bojangles",
      phoneNumber: "+79000010101",
      Email: "Email",
      Activity: "2 days ago",
    },
    {
      profilePic: Images.profilePic,
      name: "Andrew Bojangles",
      phoneNumber: "+79000010101",
      Email: "Email",
      Activity: "2 days ago",
    },
    {
      profilePic: Images.profilePic,
      name: "Andrew Bojangles",
      phoneNumber: "+79000010101",
      Email: "Email",
      Activity: "2 days ago",
    },
    {
      profilePic: Images.profilePic,
      name: "Andrew Bojangles",
      phoneNumber: "+79000010101",
      Email: "Email",
      Activity: "2 days ago",
    },
    {
      profilePic: Images.profilePic,
      name: "Andrew Bojangles",
      phoneNumber: "+79000010101",
      Email: "Email",
      Activity: "2 days ago",
    },
    {
      profilePic: Images.profilePic,
      name: "Andrew Bojangles",
      phoneNumber: "+79000010101",
      Email: "Email",
      Activity: "2 days ago",
    },
    {
      profilePic: Images.profilePic,
      name: "Andrew Bojangles",
      phoneNumber: "+79000010101",
      Email: "Email",
      Activity: "2 days ago",
    },
    {
      profilePic: Images.profilePic,
      name: "Andrew Bojangles",
      phoneNumber: "+79000010101",
      Email: "Email",
      Activity: "2 days ago",
    },
    {
      profilePic: Images.profilePic,
      name: "Andrew Bojangles",
      phoneNumber: "+79000010101",
      Email: "Email",
      Activity: "2 days ago",
    },
    {
      profilePic: Images.profilePic,
      name: "Andrew Bojangles",
      phoneNumber: "+79000010101",
      Email: "Email",
      Activity: "2 days ago",
    },
  ]);
  return (
    <div className="flex flex-col  bg-pink h-full  mb-10     max-w-screen-xl mt-10 mx-auto ">
      <div className="flex w-full p-10 justify-between">
        <div className="gap-5 flex ">
          <img src={Images.unTicked} alt="" className=" h-5" />
          <div className="text-textColor font-semibold"> User</div>
        </div>
        <div className=" flex justify-evenly w-80p">
          <div className="text-textColor">Phone number</div>
          <div className="text-textColor">Email</div>
          <div className="text-textColor">Activity</div>
        </div>
      </div>
      <div className="flex flex-col ml-5 mr-5 gap-6 pb-10  ">
        {userData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex gap-5 items-center">
              <img src={item.profilePic} alt="" className="rounded-full h-12" />
              <div className="font-semibold">{item.name}</div>
            </div>
            <div className=" ml-24">{item.phoneNumber}</div>
            <div className=" ml-10">{item.Email}</div>
            <div className=" ml-4">{item.Activity}</div>
            <img
              src={Images.extend}
              alt=""
              className="cursor-pointer active:opacity-50"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
