import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const MainBanner = () => {
  return (
    <div className="bigdata-analytics-banner">
      <div className="container" style={{ marginBottom: "100px" }}>
        <div className="bigdata-analytics-content">
          <h1>Fulfill Your Publishing Goals</h1>
          <p>
            Author Reputation Press is where you can find the most reliable team
            of author consultants with a combined experience of more than two
            decades in the industry.
          </p>

          <Link href="/#">
            <a className="btn btn-primary">Get Started</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
