import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ProductCard from "@/components/Shop/ProductCard";
import { API_URL } from "config";

const Bookstore = ({ total }) => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Bookstore" />

      <ProductCard total={total} />

      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const total = await fetch(`${API_URL}/books/count`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const totalRes = await total.json();

  if (!total.ok) {
    throw new Error("Error in fetching all books");
  }

  return {
    props: {
      total: totalRes,
    },
  };
}

export default Bookstore;
