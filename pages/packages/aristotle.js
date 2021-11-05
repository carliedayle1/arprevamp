import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Aristotle = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Aristotle | Publishing Package </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Aristotle Publishing Package" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Aristotle Package</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
              </div>

              <h3>Price: $1,199</h3>
              <p style={{ marginTop: "1rem" }}>
                The Aristotle publishing service offers the best value for
                authors on a budget. It includes various book formats, from
                e-books to paperback. This package is perfect for all types of
                titles, from memoirs to works of fiction. It also gives you the
                freedom to customize your cover and interior with help from our
                professional graphic artists. Plus, you can take advantage of
                unlimited graphic insertions at your disposal and choose from
                our wide array of trim sizes. Our team will also handle the
                processing of your copyrights and LOC registration. As part of
                this package, authors receive complimentary copies of their
                book.
              </p>

              <h4 style={{ marginBottom: "1rem" }}>Inclusions:</h4>

              <Container>
                <Row>
                  <Col sm={6} md={6} lg={4}>
                    <h5>Available Format</h5>
                    <ul>
                      <li>
                        <h6>Paperback</h6>
                      </li>
                      <li>
                        <h6>E-Book</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={4}>
                    <h5>Cover</h5>
                    <ul>
                      <li>
                        <h6>Custom text and layout formatting</h6>
                      </li>
                      <li>
                        <h6> Author-designed cover</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={4}>
                    <h5>Interior Layout</h5>
                    <ul>
                      <li>
                        <h6>
                          Trim size: 6.0″ x 9.0″ and 5.5″ X 8.5″ and 8.5″ x
                          11.0″
                        </h6>
                      </li>
                      <li>
                        <h6>Standard Text & Layout Formatting</h6>
                      </li>
                      <li>
                        <h6>Unlimited Image Insertion</h6>
                      </li>
                      <li>
                        <h6>Unlimited Corrections – Production Stage</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={4}>
                    <h5>Registrations And Distribution</h5>
                    <ul>
                      <li>
                        <h6>Registration with Books In Print database</h6>
                      </li>
                      <li>
                        <h6>Copyrights Registrations</h6>
                      </li>
                      <li>
                        <h6>Assignment of ISBN</h6>
                      </li>
                      <li>
                        <h6>Library of Congress Registration</h6>
                      </li>
                      <li>
                        <h6>Worldwide Online Book Distribution</h6>
                      </li>
                      <li>
                        <h6>Online book sales and Royalty Accounting</h6>
                      </li>
                      <li>
                        <h6>Quarterly Royalty Payments</h6>
                      </li>
                      <li>
                        <h6>ARP Bookstore Availability</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={4}>
                    <h5>Add Ons</h5>
                    <ul>
                      <li>
                        <h6>
                          1 Paperback Author’s Copy and 3 Paperback Free Copies
                        </h6>
                      </li>
                      <li>
                        <h6>
                          Free Promotions on our blog site and social media
                          pages
                        </h6>
                      </li>
                      <li>
                        <h6>Lowest SRP (Guaranteed)</h6>
                      </li>
                      <li>
                        <h6>Author Discount for Bulk Book Orders</h6>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Aristotle;
