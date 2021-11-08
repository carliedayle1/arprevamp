import React, { useState, useContext } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ProductSlider from "@/components/Shop/ProductSlider";
import ProductsDetailsTabs from "@/components/Shop/ProductsDetailsTabs";
import { useRouter } from "next/router";
import { API_URL } from "config";
import { Form } from "react-bootstrap";
import CartContext from "context/CartContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ProductDetails = ({ product }) => {
  const router = useRouter();
  const { addItemToCart } = useContext(CartContext);

  const [bookTypePrice, setBookTypePrice] = useState("");
  const [selectedType, setSelectedType] = useState(null);

  const selectChangeHandler = (e) => {
    // setSelectBookType(e.target.value);
    // const book = bookType.find((book) => book.type == e.target.value);
    setBookTypePrice(product?.prices[e.target.value]);
    setSelectedType(e.target.value);
  };

  const backButtonHandler = () => {
    router.back();
  };

  const addToCartHandler = () => {
    if (selectBookType === "" || bookTypePrice === "") {
      Swal.fire("Oops!", "You must select a book type.", "info");
      return;
    }

    const cartItem = {
      cartId: Math.random().toString(36).slice(2),
      id: product?.id,
      title: product?.title,
      bookType: selectBookType,
      photo: product?.bookCover?.url,
      price: bookTypePrice,
      quantity: 1,
      total: parseFloat(bookTypePrice) * 1,
    };
    addItemToCart(cartItem);
    toast.success("Book Added in the Cart!");
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

                  {Object.keys(product?.prices).map((key) => (
                    <option value={key} key={key}>
                      {key}
                    </option>
                  ))}
                </Form.Select>

                {Object.keys(product?.prices).map((key) => (
                  <button
                    className={`btn btn-primary snipcart-add-item ${
                      selectedType !== key ? "hidden" : ""
                    }`}
                    data-item-id={`${product?.id}${key.split(" ").join("")}`}
                    data-item-price={product?.prices[key]}
                    data-item-url={`/products/${product?.slug}/`}
                    data-item-name={product?.title}
                    data-item-image={product?.bookCover?.url}
                    data-item-description={key}
                    // data-item-file-guid="02f7686a-007a-46d2-b960-696d3ef2f2f3"
                    data-item-weight={(
                      Number(product?.weight) * Number(453.592)
                    ).toFixed(2)}
                    data-item-shippable={String(key) !== "Ebook"}
                    key={key}
                  >
                    Add to Cart
                  </button>
                ))}

                {/* <div className="custom-payment-options">
                  <span>Guaranteed safe checkout:</span>

                  <div className="payment-methods">
                    <img
                      src="/images/payment-image/payment-img1.svg"
                      alt="image"
                    />
                    <img
                      src="/images/payment-image/payment-img2.svg"
                      alt="image"
                    />
                    <img
                      src="/images/payment-image/payment-img3.svg"
                      alt="image"
                    />
                    <img
                      src="/images/payment-image/payment-img4.svg"
                      alt="image"
                    />
                    <img
                      src="/images/payment-image/payment-img5.svg"
                      alt="image"
                    />
                    <img
                      src="/images/payment-image/payment-img6.svg"
                      alt="image"
                    />
                    <img
                      src="/images/payment-image/payment-img7.svg"
                      alt="image"
                    />
                  </div>
                </div> */}
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
