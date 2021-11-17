import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import * as Icon from "react-feather";

const TraditionalPublishing = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Traditional Publishing</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Powerhouse Platform" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h2>Traditional Publishing</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h4>Your Book Needs a Powerful Query Letter</h4>
                <p style={{ marginTop: "1rem" }}>
                  Our team of bestselling writers, former Big-5 acquisitions
                  editors, and experienced publishing strategists employs a
                  comprehensive and nurturing approach to the book-writing and
                  publishing process to ensure an exceptional result for
                  authors, agents, publishers and readers alike.
                </p>

                <div className="funfacts-area" style={{ marginTop: "3rem" }}>
                  <div className="container">
                    <div className="row" style={{ marginTop: "2rem" }}>
                      <div className="col-lg-4 col-md-4 ">
                        <div className="funfact">
                          <h3>310+</h3>
                          <p>National Bestsellers</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 ">
                        <div className="funfact">
                          <h3>2,100+</h3>
                          <p>Traditionally Published Books</p>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 ">
                        <div className="funfact">
                          <h3>75 million</h3>
                          <p>Books Sold</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="features-area   ">
                  <h5 style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    Why Chose Us
                  </h5>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="single-features">
                          <div className="icon">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>Agency Connections</h6>
                          </h3>
                          <p>
                            We work directly with top literary agents and
                            publishers, allowing us to connect you with the
                            perfect advocate for your book.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="single-features">
                          <div className="icon  bg-eb6b3d">
                            <Icon.Layout />
                          </div>
                          <h3>
                            <h6>Quality Service</h6>
                          </h3>
                          <p>
                            When it comes to grabbing the attention of a
                            literary agent or publisher, the strength of your
                            query letter or book proposal is nearly as important
                            as the quality of your manuscript itself. Our team
                            of publishing insiders know how to write query
                            letters that sell. Take the next step in your
                            publishing journey!
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="single-features">
                          <div className="icon bg-c679e3">
                            <Icon.LifeBuoy />
                          </div>
                          <h3>
                            <h6>Work With Industry Experts</h6>
                          </h3>
                          <p>
                            Our team includes former literary agents, Big-5
                            acquisitions editors, and #1 New York
                            Times-bestselling authors.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Take the next step in your publishing journey</h5>
                  <p>
                    The hard part’s over. Your manuscript is complete. But the
                    next part—getting published—requires a totally different set
                    of skills. Our collaborative query letter will give your
                    book the best possible chance of getting the attention it
                    deserves from literary agents and publishers. You’ve come
                    this far. Get in touch with us and we’ll take your book
                    across the finish line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default TraditionalPublishing;
