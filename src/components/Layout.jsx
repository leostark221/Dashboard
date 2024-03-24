import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
