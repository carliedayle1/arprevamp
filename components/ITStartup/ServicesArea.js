import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";

const ServicesArea = () => {
  return (
    <>
      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <h2>Content and Creativity</h2>
                <div className="bar"></div>
                <p>
                  Choose any of our wide array of services that will help you in
                  publishing your literary works!
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <Link href="/services/content-creativity/black-and-white">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Codesandbox /> Black and White Package
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Codesandbox /> Full Color
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Codesandbox /> Children's Book Packages
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Codesandbox /> Advanced Editorial Services
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Codesandbox /> Copy Editing
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Codesandbox /> Book Indexing Services
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Codesandbox /> Illustration Services
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Codesandbox /> Image Enhancement and Manipulation
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Codesandbox /> Translation Service - Spanish
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Codesandbox /> Audiobook Service
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Codesandbox /> Data Entry
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesArea;
