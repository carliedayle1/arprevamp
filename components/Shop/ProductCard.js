import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import useSWR from "swr";
import { API_URL } from "config";
import { Loader } from "react-overlay-loader";
import { PER_PAGE } from "config";

const ProductCard = ({ total }) => {
  const [page, setPage] = useState(1);

  const [category, setCategory] = useState("");

  const [start, setStart] = useState(
    Number(page) === 1 ? 0 : (Number(page) - 1) * Number(PER_PAGE)
  );

  const categoryFetcher = async () => {
    const res = await fetch(`${API_URL}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  };

  const bookQuery = () => {
    if (category === "") {
      return `${API_URL}/books?_limit=${PER_PAGE}&_start=${start}`;
    } else {
      return `${API_URL}/books?_limit=${PER_PAGE}&_start=${start}&categories.id=${category}`;
    }
  };

  const bookFetcher = async () => {
    const res = await fetch(bookQuery(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return data;
  };

  const { data: products, error: categoryError } = useSWR(
    bookQuery(),
    bookFetcher
  );

  const { data: categories, error } = useSWR(
    `${API_URL}/categories`,
    categoryFetcher
  );

  const lastPage = useMemo(() =>
    Number(
      Math.ceil(
        Number(category === "" ? total : products?.length) / Number(PER_PAGE)
      )
    )
  );

  const nextButtonHandler = () => {
    let next = +page + 1;
    setPage(page + 1);
    setStart(Number(next) === 1 ? 0 : (Number(next) - 1) * Number(PER_PAGE));
  };

  const prevButtonHandler = () => {
    let prev = +page - 1;
    setPage(page - 1);
    setStart(Number(prev) === 1 ? 0 : (Number(prev) - 1) * Number(PER_PAGE));
  };

  const getPaginationText = () => {
    var start = (page - 1) * PER_PAGE + 1;
    var end = Math.min(
      start + PER_PAGE - 1,
      category === "" ? total : products?.length
    );

    return `${start} - ${end} of ${category === "" ? total : products?.length}`;
  };

  return (
    <div className="shop-area ptb-80">
      <div className="container">
        <div
          className="col-lg-12 features-details"
          style={{ marginBottom: "3rem" }}
        >
          <div className="features-details-desc">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <h2>Categories</h2>
                <div className="bar"></div>
              </div>

              <div className="row">
                <div
                  className="col-lg-3 col-md-6 pointer"
                  onClick={() => setCategory("")}
                >
                  <div className={`box ${category === "" && "active"}`}>
                    <Icon.Star /> All
                  </div>
                </div>

                {categoryError && <div>{categoryError}</div>}

                {categories &&
                  categories.map((cat) => (
                    <div
                      className="col-lg-3 col-md-6 pointer"
                      onClick={() => setCategory(cat?.id)}
                      key={cat?.id}
                    >
                      <div
                        className={`box ${category === cat?.id && "active"}`}
                      >
                        <Icon.Star /> {cat?.name}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="woocommerce-topbar">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-7 col-sm-7">
              <div className="woocommerce-result-count">
                {products?.length > 0 ? (
                  <p>Showing {getPaginationText()} results</p>
                ) : (
                  <p>Nothing to show</p>
                )}
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-5 col-sm-5">
              <div className="woocommerce-topbar-ordering">
                <select className="form-select">
                  <option value="1">Sort by Popularity</option>
                  <option value="2">Sort by Average Rating</option>
                  <option value="3">Sort by Latest</option>
                  <option value="4">Sort by price: Low to High</option>
                  <option value="5">Sort by price: High to Low</option>
                  <option value="6">Sort by New</option>
                </select>
              </div>
            </div> */}
          </div>
        </div>

        <div className="row justify-content-md-center">
          {!products || !categories ? (
            <Loader fullPage loading />
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            products.map((product) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={product.id}>
                <div className="single-products">
                  <Link href={`/products/${product.slug}`}>
                    <div className="products-image">
                      <img src={product?.bookCover?.url} alt={product.title} />
                    </div>
                  </Link>

                  <div className="products-content">
                    <h3>
                      <Link href={`/products/${product?.slug}`}>
                        <a>{product?.title}</a>
                      </Link>
                    </h3>
                    <span>{product?.priceRange}</span>

                    {/* Ratings */}
                    {/* <ul>
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

                    {/* <AddToCartBtn {...product} /> */}
                    <Link href={`/products/${product?.slug}`}>
                      <button className="add-to-cart-btn mr-2">See more</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Pagination */}
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="pagination-area">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  {page > 1 && (
                    <li className="page-item">
                      <button className="page-link" onClick={prevButtonHandler}>
                        Prev
                      </button>
                    </li>
                  )}

                  {/* <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li> */}

                  {page < lastPage && (
                    <li className="page-item">
                      <a className="page-link" onClick={nextButtonHandler}>
                        Next
                      </a>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
