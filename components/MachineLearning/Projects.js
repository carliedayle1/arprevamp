import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import useSWR from "swr";
import { API_URL } from "config";
import { Loader, LoadingOverlay } from "react-overlay-loader";

const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  margin: 30,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

const Projects = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  const bookFetcher = async () => {
    const res = await fetch(`${API_URL}/books?featured=true`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  };

  const { data: products, error } = useSWR(
    `${API_URL}/books?featured=true`,
    bookFetcher
  );

  return (
    <div className="ml-projects-area pt-5 ptb-80">
      <div className="container">
        <div className="section-title st-fs-28">
          <h2>Featured Books</h2>
          <div className="bar"></div>
          <p>
            our Featured Books Section is curated by our editorial team and will
            be updated every month. Choose any title from the carousel below
          </p>
        </div>
      </div>

      <div className="container-fluid">
        {display ? (
          <OwlCarousel
            className="ml-projects-slides owl-carousel owl-theme"
            {...options}
          >
            {!products ? (
              <LoadingOverlay
                style={{
                  width: 200,
                  height: 200,
                  backgroundColor: "papayawhip",
                }}
              >
                <Loader loading={!products} />
              </LoadingOverlay>
            ) : error ? (
              <h1>{error}</h1>
            ) : (
              products.map((product) => (
                <div className="single-ml-projects-box" key={product?.slug}>
                  <Image
                    src={product?.bookCover?.url}
                    alt={product?.title}
                    width="350%"
                    height="350%"
                    layout="intrinsic"
                  />
                  <div className="plus-icon">
                    <Link href={`/products/${product?.slug}`}>
                      <a>
                        <span></span>
                      </a>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>

      {/* Shape Images */}
      <div className="shape1">
        <img src="/images/shape1.png" alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
      <div className="shape3">
        <img src="/images/shape3.svg" alt="shape" />
      </div>
      <div className="shape4">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape7">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
    </div>
  );
};

export default Projects;
