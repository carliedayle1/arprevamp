import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Button, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import Image from "next/image";

const RefundPolicy = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Refund Policy </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Company" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Refund Policy</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
              </div>

              <div className="mr-2">
                <h5>PUBLISHING PACKAGES</h5>

                <ol style={{ lineHeight: "2rem" }}>
                  <li>Before manuscript has been submitted</li>
                  <ul>
                    <li>
                      0-90 calendar days after paying for the service: 100% of
                      purchase price, less $150 or 10% of the total purchase
                      price (Administrative/Processing Fee) will be refunded,
                      whichever is higher.
                    </li>
                    <li>
                      91-180 calendar days after paying for the service: 50% of
                      purchase price will be refunded.
                    </li>
                    <li>
                      More than 180 calendar days after the paying for the
                      service: No refund will be issued.
                    </li>
                  </ul>
                  <li>
                    After manuscript has been submitted but before author’s
                    final approval:
                  </li>
                  <ul>
                    <li>
                      After manuscript is submitted but before actual work
                      begins: 50% of total purchase price will be refunded.
                    </li>
                    <li>
                      After actual work started but before giving final
                      approval: 25% of total purchase price will be refunded.
                    </li>
                  </ul>
                  <li>After author has given final approval of the work:</li>
                  <ul>
                    <li>No refund will be issued.</li>
                  </ul>
                </ol>
              </div>

              <div className="mr-2">
                <p>
                  Manuscript in this contract means any text, images, or
                  multimedia content. If at any time, Author Reputation Press
                  terminates the Service Agreement because the manuscript and/or
                  author’s work do not comply with our Content Guidelines, we
                  will refund 100% of the purchase price, less content
                  evaluation fee or administrative fee.
                </p>
              </div>

              <div className="mr-2">
                <h5>MARKETING SERVICES</h5>

                <ol style={{ lineHeight: "2rem" }}>
                  <li>Before We start fulfillment of marketing service/s:</li>
                  <ul>
                    <li>
                      0-90 calendar days after paying for the service: 100% of
                      purchase price, less $150 or 10% of the total purchase
                      price (Administrative/Processing Fee) will be refunded,
                      whichever is higher.
                    </li>
                    <li>
                      91-180 calendar days after paying for the service: 50% of
                      purchase price will be refunded.
                    </li>
                    <li>
                      More than 180 calendar days after paying for the service:
                      No refund will be issued.
                    </li>
                  </ul>
                  <li>After We start fulfillment of marketing service/s:</li>
                  <ul>
                    <li>No refund will be issued.</li>
                  </ul>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RefundPolicy;
