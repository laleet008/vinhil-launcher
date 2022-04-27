import React from "react";
import Footer from "./Footer";
import Heading from "./Heading";

const Layout = ({ children }) => {
  return (
    <>
      <Heading />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
