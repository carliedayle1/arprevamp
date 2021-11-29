import React, { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ProductSlider from "@/components/Shop/ProductSlider";
import ProductsDetailsTabs from "@/components/Shop/ProductsDetailsTabs";
import { useRouter } from "next/router";
import { API_URL } from "config";
import { Form } from "react-bootstrap";

const ProductDetails = ({ product }) => {
  const router = useRouter();

  const [bookTypePrice, setBookTypePrice] = useState("");
  const [selectedType, setSelectedType] = useState(null);

  const selectChangeHandler = (e) => {
    const types = product?.book_types;

    const type = types.filter((ty) => ty?.id == e.target.value);
    setBookTypePrice(type[0]?.price);
    setSelectedType(type[0]?.name);
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
                </ul>

                <div>
                  <h2>{bookTypePrice !== "" ? `$ ${bookTypePrice}` : ""}</h2>
                </div>
                <Form.Select
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
                </Form.Select>

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

export async function getStaticProps({ params }) {
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
        revalidate: 10,
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const query = await fetch(`${API_URL}/books`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const queryResult = await query.json();

  const slugs = queryResult.map((book) => book.slug);

  const slugParams = slugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths: slugParams,
    fallback: "blocking",
  };
}

export default ProductDetails;
