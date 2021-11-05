import React from "react";
import Link from "next/link";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <div className="iot-features-area ptb-80 bg-f7fafd">
        <div className="container">
          <h5 style={{ marginBottom: "3rem" }}>
            Author Reputation Press’ publishing guide provides a step-by-step
            method of bringing your manuscript from scratch to completion as
            well as harness our broad distribution network for books, reaching
            millions of readers worldwide.
          </h5>
          <div className="row align-items-center">
            <div className="col-lg-6 iot-features-content">
              <h3>Get Your Author's Guide</h3>
              <p>
                Sign up for the Author’s Guide to Successful Publishing today!
                Inside, you’ll have access to a proven roadmap to take your work
                from idea to a professionally published book.
              </p>

              <Link href="#">
                <a className="btn btn-primary">Sign Up Now</a>
              </Link>
            </div>

            <div className="col-lg-6 iot-features-image">
              <img
                src="/images/books/authorsguide.jpg"
                className="animate__animated animate__fadeInUp animate__delay-0.6s"
                alt="Authors Guide"
                width="70%"
                height="100%"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
