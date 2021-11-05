import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ProductCard from "@/components/Shop/ProductCard";

const Bookstore = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Bookstore" />

      <ProductCard />

      <Footer />
    </>
  );
};

export default Bookstore;
