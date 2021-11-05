import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";

const Plato = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Plato | Publishing Package </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Plato Publishing Package" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Plato Package</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
              </div>

              <h3>Price: $2,100</h3>
              <p style={{ marginTop: "1rem" }}>
                The Plato publishing service is the better deal for
                self-publishing authors. In addition to the paperback and E-book
                formats, it includes a hardback version and more complimentary
                copies for giveaways during book-signing or promotional events.
                This package combines the best services from or cover designs
                and guaranteed listing on large marketplace such as Amazon,
                Barnes & Noble, and Waterstones. This package offers a scaled-up
                publishing service to help accelerate the publication and
                release of your book to the market.
              </p>

              <h4 style={{ marginBottom: "1rem" }}>Inclusions:</h4>

              <Container>
                <Row>
                  <Col sm={6} md={6} lg={6}>
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
                  <Col sm={6} md={6} lg={6}>
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

                  <Col sm={6} md={6} lg={6}>
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
                  <Col sm={6} md={6} lg={6}>
                    <h5>Add Ons</h5>
                    <ul>
                      <li>
                        <h6>1 Paperback and hardback author’s copy</h6>
                      </li>
                      <li>
                        <h6>7 Paperbacks and 3 hardbacks (Free Copies)</h6>
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
                      <li>
                        <h6>Book Returns Insurance for 12 Months</h6>
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

export default Plato;
