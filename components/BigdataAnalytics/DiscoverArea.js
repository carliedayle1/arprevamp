import React from "react";
import Link from "next/link";

const DiscoverArea = () => {
  return (
    <div className="discover-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="discover-image">
              <img
                src="/images/bigdata-analytics/discover-img1.png"
                alt="image"
              />
              <img
                src="/images/bigdata-analytics/discover-img2.jpg"
                alt="image"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="discover-content">
              <h2>Take The Easy Path To Publish Your Work.</h2>
              <p>
                Author Reputation Press’ publishing guide provides a
                step-by-step method of bringing your manuscript from scratch to
                completion.
              </p>

              <Link href="#">
                <a className="btn btn-primary">Discover More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="analytics-shape1">
        <img src="/images/bigdata-analytics/analytics-shape1.png" alt="image" />
      </div>
    </div>
  );
};

export default DiscoverArea;
