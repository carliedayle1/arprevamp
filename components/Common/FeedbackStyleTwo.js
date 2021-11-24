import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: false,
  nav: false,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  autoplayTimeout: 5000,
  items: 1,
};

const FeedbackStyleTwo = ({ books }) => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="feedback-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>My Books</h2>
          <div className="bar"></div>
          <p>
            These books are curated and published by Author Reputation Press and
            is available in the bookstore
          </p>
        </div>

        {display ? (
          <OwlCarousel
            className="testimonials-slides owl-carousel owl-theme"
            {...options}
          >
            {books.map((book) => (
              <div className="single-feedback-item" key={book.id}>
                <Link href={`/products/${book?.slug}`}>
                  <a>
                    <div className="client-info align-items-center">
                      <div className="">
                        <img
                          src={book?.bookCover?.url}
                          alt="book"
                          //   height={200}
                          //   width={200}
                          //   layout="fixed"
                        />
                      </div>
                    </div>

                    <h3>{book?.title}</h3>
                  </a>
                </Link>
              </div>
            ))}
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
      <div className="shape4">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape5">
        <img src="/images/shape5.png" alt="shape" />
      </div>
      <div className="shape6 rotateme">
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

export default FeedbackStyleTwo;
