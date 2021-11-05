import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const Services = () => {
  return (
    <div className="bigdata-services-area ptb-80 bg-eef6fd">
      <div className="container">
        <div className="section-title">
          <h2>WHY YOU SHOULD PUBLISH WITH US</h2>
          <div className="bar"></div>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="single-services-box-item">
              <div className="icon">
                <img src="/images/royalty/excellence.png" alt="image" />
              </div>
              <h3>
                <a>Up to 100% Royalties</a>
              </h3>
              <p>
                You will receive a royalty of between 80% and 100% of the net
                profit from your published book. We offer a higher percentage of
                book sales than most other publishing companies.
              </p>

              <div className="shape">
                <img
                  src="/images/bigdata-analytics/rectangle.png"
                  alt="image"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="single-services-box-item">
              <div className="icon">
                <img src="/images/royalty/trust.png" alt="image" />
              </div>
              <h3>
                <a> Full Ownership</a>
              </h3>
              <p>
                Authors retain the full rights to their work so they have total
                control over the content and design of their book. Most other
                publishers take over the creative ownership of your book.
              </p>

              <div className="shape">
                <img
                  src="/images/bigdata-analytics/rectangle.png"
                  alt="image"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="single-services-box-item">
              <div className="icon">
                <img src="/images/royalty/team.png" alt="image" />
              </div>
              <h3>
                <a>Network of Partners</a>
              </h3>
              <p>
                ARP prides itself in having a broad network of partners
                responsible for the marketing of your book. Our vast array of
                connections will help you easily reach your target audience.
              </p>

              <div className="shape">
                <img
                  src="/images/bigdata-analytics/rectangle.png"
                  alt="image"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="single-services-box-item">
              <div className="icon">
                <img src="/images/royalty/list.png" alt="image" />
              </div>
              <h3>
                <a>Flexible Payment Plan</a>
              </h3>
              <p>
                We provide a flexible payment scheme that fits your unique
                requirements. You can choose to pay in installments depending on
                your budget, plus enjoy big discounts on our packages.
              </p>

              <div className="shape">
                <img
                  src="/images/bigdata-analytics/rectangle.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
