import React from "react";
import Link from "next/link";

const BigdataFunFacts = () => {
  return (
    <div className="funfacts-area bg-image ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Team Up With Us</h2>
          <div className="bar"></div>
          <p style={{ fontSize: "17px" }}>
            Put your trust in an organization that knows exactly how to publish
            a book. Author Reputation Press is where you can find the most
            reliable team of author consultants with a combined experience of
            more than two decades in the industry. Through the years, we have
            helped independent authors across every genre shape their books with
            a bookstore-ready quality in all formats and distribute them
            worldwide. Our book publishers are available via phone and email
            during business hours to answer your questions, give you advice, and
            provide the support you need to get your book published. Our free
            publishing guide also offers a one-stop solution for those of you
            who are just starting your journey, a perfect way to launch your
            career as an author.
          </p>
        </div>

        <div className="contact-cta-box">
          <h3>Have any question about us?</h3>
          <p>Don't hesitate to contact us</p>

          <Link href="/contact-us">
            <a className="btn btn-primary">Contact Us</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigdataFunFacts;
