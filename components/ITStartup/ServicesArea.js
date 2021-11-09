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
                  <Link href="/services/content-creativity/full-color">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Codesandbox /> Full Color
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/content-creativity/childrens-book">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Codesandbox /> Children's Book Packages
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/content-creativity/advanced-editorial-service">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Codesandbox /> Advanced Editorial Services
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/content-creativity/copy-editing">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Codesandbox /> Copy Editing
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/content-creativity/book-indexing">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Codesandbox /> Book Indexing Services
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/content-creativity/illustration-services">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Codesandbox /> Illustration Services
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/content-creativity/image-enhancement-manipulation">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Codesandbox /> Image Enhancement and Manipulation
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6">
                  <Link href="/services/content-creativity/translation-service-spanish">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Codesandbox /> Translation Service - Spanish
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/content-creativity/audiobook-service">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Codesandbox /> Audiobook Service
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/content-creativity/data-entry">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Codesandbox /> Data Entry
                    </div>
                  </Link>
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
