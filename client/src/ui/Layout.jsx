import React from 'react';
import Header from './Header';
import Footer from './Footer'; 
import { Toaster } from "react-hot-toast";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Toaster 
      position="bottom-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      toastOptions={{
        style: {
          backgroundColor: "black",
          color: "white",
        },
      }}
      />
    </>
  );
};

export default Layout;
