import React, { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ProductSlider from "@/components/Shop/ProductSlider";
import ProductsDetailsTabs from "@/components/Shop/ProductsDetailsTabs";
import { useRouter } from "next/router";
import { API_URL } from "config";
import { Form } from "react-bootstrap";
import Link from "next/link";
import * as Icon from "react-feather";

const ProductDetails = ({ product }) => {
  const router = useRouter();

  const [bookTypePrice, setBookTypePrice] = useState("");
  const [selectedType, setSelectedType] = useState(null);

  const selectChangeHandler = (price, name) => {
    setBookTypePrice(price);
    setSelectedType(name);
  };

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Navbar />
      <PageBanner pageTitle={product?.title} />

      <div className="shop-details-area ptb-80">
        <div className="container">
          <button className="btn btn-primary" onClick={backButtonHandler}>
            Go Back
          </button>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <ProductSlider images={[product?.bookCover?.url]} />
            </div>

            <div className="col-lg-7">
              <div className="products-details">
                <h3>{product?.title}</h3>

                <div className="price">{product?.priceRange}</div>

                {/* Rating */}
                {/* 
                <ul className="rating">
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                  <li>
                    <i className="flaticon-star-1"></i>
                  </li>
                </ul> */}

                <div>
                  <h2>{bookTypePrice !== "" ? `$ ${bookTypePrice}` : ""}</h2>
                </div>

                <div className="row ">
                  {product?.book_types.map((type) => (
                    <div
                      className="col-lg-3 col-sm-3 col-md-3"
                      key={type?.id}
                      onClick={() =>
                        selectChangeHandler(type?.price, type?.name)
                      }
                    >
                      <div className="single-solutions-box">
                        <h3>{type?.name}</h3>
                        <h6>{type?.price}</h6>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <Form.Select
                  aria-label="Book Type"
                  style={{ marginBottom: "2rem", maxWidth: "30rem" }}
                  value={selectedType ? selectedType : "Select book type"}
                  onChange={selectChangeHandler}
                >
                  <option disabled>Select book type</option>

                  {product?.book_types.map((type) => (
                    <option value={type?.id} key={type?.id}>
                      {type?.name}
                    </option>
                  ))}
                </Form.Select> */}
                {/* <p>
                  Select a book type to reveal the <strong>Add to Cart</strong>{" "}
                  button and the <strong>Price</strong>
                </p> */}

                {product?.book_types.map((type) => (
                  <button
                    key={type?.id}
                    className={`btn btn-primary snipcart-add-item ${
                      selectedType !== type?.name ? "hidden" : ""
                    }`}
                    data-item-id={`${product?.id}${type?.name}`}
                    data-item-price={type?.price}
                    data-item-url={`/products/${product?.slug}/`}
                    data-item-name={product?.title}
                    data-item-image={product?.bookCover?.url}
                    data-item-description={type?.name}
                    data-item-file-guid={
                      type?.name === "Ebook"
                        ? "c0fe4c16-9cbb-47b0-b872-60a5048edf41"
                        : null
                    }
                    data-item-weight={Math.ceil(
                      Number(type?.weight) * Number(453.592)
                    )}
                    data-item-length={Math.ceil(Number(type?.bookLength))}
                    data-item-width={Math.ceil(Number(type?.width))}
                    data-item-height={Math.ceil(Number(type?.height))}
                    data-item-shippable={type?.name !== "Ebook"}
                  >
                    Add to Cart
                  </button>
                ))}
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <ProductsDetailsTabs product={product} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    const query = await fetch(`${API_URL}/books?slug=${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const queryResult = await query.json();

    if (queryResult.length > 0) {
      return {
        props: {
          product: queryResult[0],
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export default ProductDetails;
