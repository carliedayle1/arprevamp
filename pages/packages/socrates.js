import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";

const Socrates = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Socrates | Publishing Package </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Socrates Publishing Package" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back">
                  <h2>Socrates Package</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
              </div>

              <h3>Price: $3,100</h3>
              <p style={{ marginTop: "1rem" }}>
                The Socrates publishing package offers the best-in-class
                combination of publishing and marketing services to give your
                book the best treatment possible while offering great value for
                your investment. As a premium service, the Socrates bundle
                provides plenty of both traditional media platforms and the
                internet. This bundle also includes the most number
                complimentary copies.
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
                        <h6>Hardback</h6>
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
                        <h6>Custom-designed cover</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={4}>
                    <h5>Interior Layout</h5>
                    <ul>
                      <li>
                        <h6>
                          Trim sizes: 6.0 “x 9.0” and 5.5″ X 8.5″ and 8.5″ x
                          11.0″
                        </h6>
                      </li>
                      <li>
                        <h6>Custom Text & Layout Formatting</h6>
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
                        <h6>1 Paperback and 1 Hardback Author’s Copy</h6>
                      </li>
                      <li>
                        <h6>15 Paperbacks and 5 Hardbacks (free copies)</h6>
                      </li>
                      <li>
                        <h6>
                          Free promotions on our blog site and social media
                          pages.
                        </h6>
                      </li>
                      <li>
                        <h6>Lowest SRP (Guaranteed)</h6>
                      </li>
                      <li>
                        <h6>Author Discount for Bulk Book Orders</h6>
                      </li>
                      <li>
                        <h6>Book Returns Insurance for 24 months.</h6>
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

export default Socrates;
