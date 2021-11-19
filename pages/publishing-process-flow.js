import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Button, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import Image from "next/image";

const PublishingProcessFlow = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Publishing Process Flow </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Company" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Publishing Process Flow</h2>
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
                <h5>Contract Signing</h5>
                <p>
                  Before the publishing process starts, the author needs to sign
                  the contract and publishing agreement with Author Reputation
                  Press (the publisher).{" "}
                </p>
              </div>

              <div className="mr-2">
                <h5>Fulfillment Officer Contact </h5>
                <p>
                  After the author affixes his/her signature to pertinent
                  documents, the senior fulfillment officer or publishing
                  specialist will initiate communication with the author to
                  begin the publication procedure.
                </p>
              </div>

              <div className="mr-2">
                <h5>Submission of Publishing Materials </h5>
                <p>
                  This step involves the submission of manuscript including its
                  interior, cover and images, if any, to the publishing
                  specialist. The text portion of the manuscript must be sent in
                  digital formats such as MS Word or Rich Text Format (RTF).
                </p>
              </div>

              <div className="mr-2">
                <h5>Book Design and Layout </h5>
                <p>
                  AThe company’s fulfillment team will comply with the author’s
                  requested design, layout, style, and possible changes from the
                  original manuscript.
                </p>
              </div>
              <div className="mr-2">
                <h5>Design Preview </h5>
                <p>
                  A digital version of the book galley will be sent to the
                  author in digital format for review. The author may request
                  modifications, revisions, or any changes to the layout and
                  design of the galley. These changes will then be applied to
                  the digital copy of the book by our fulfillment team.
                </p>
              </div>

              <div className="mr-2">
                <h5>Design Approval </h5>
                <p>
                  The author must give his or her final approval to the book’s
                  design and layout before it is forwarded to the printer for
                  production.
                </p>
              </div>

              <div className="mr-2">
                <h5>Proof of Print </h5>
                <p>
                  Once approved by the author, the final version of the
                  manuscript will be printed out and then shipped to the author
                  in accordance with the publishing package he or she availed
                  of.
                </p>
              </div>

              <div className="mr-2">
                <h5>Post-Production Revision </h5>
                <p>
                  The author is entitled to one free round of revision to the
                  printed copy, if any.
                </p>
              </div>

              <div className="mr-2">
                <h5>Book Cover and Interior Approval Form</h5>
                <p>
                  The author must sign the book cover and interior approval form
                  before the revised manuscript is sent back to the printer.
                  Once the necessary corrections are complied, the final proof
                  of print will then be shipped to the author. A post-production
                  fee of $250 will be charged to the author for further
                  revisions.
                </p>
              </div>

              <div className="mr-2">
                <h5>Global Distribution </h5>
                <p>
                  The book will be distributed through online retailers and
                  bookstores worldwide.{" "}
                </p>
              </div>

              <div className="mr-2">
                <h5>Post-Fulfillment Service </h5>
                <p>
                  Author Reputation Press will closely monitor the marketing and
                  sales of the book as well as send royalties to the author on a
                  quarterly basis.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PublishingProcessFlow;
