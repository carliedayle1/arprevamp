import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Newton = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Newton | Publishing Package </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Newton Publishing Package" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Newton Package</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
              </div>

              <h3>Price: $2,799.00</h3>
              <p style={{ marginTop: "1rem" }}>
                The Newton publishing platform is ideal for authors who want to
                take advantage of more format availability in a cost-effective
                manner, unique customization options, and the security of our
                Book Returns Insurance. This package combines the best features
                our standard services for a full color and layout. This bundle
                is also a surefire way to expand the availability of your book
                across large marketplaces such as Amazon and Waterstones, both
                in paperback and hardback formats.
              </p>
              <p style={{ marginTop: "1rem" }}>
                The Newton Publishing package offers the best value for your
                investment. it comprises our standard services for a full color
                book. Talk to one of our Author Consultants today to learn more.
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
                        <h6>Custom-Designed Cover</h6>
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
                    <h5>Interior Layout</h5>
                    <ul>
                      <li>
                        <h6>Trim size: 8.5″ x 8.5″ and 8.5″ x 11.0″</h6>
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

                  <Col sm={6} md={6} lg={6}>
                    <h5>Author Copies</h5>
                    <ul>
                      <li>
                        <h6>1 Paperback</h6>
                      </li>
                      <li>
                        <h6>1 Hardback </h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <h5>Package Free Copies</h5>
                    <ul>
                      <li>
                        <h6>7 Paperbacks</h6>
                      </li>
                      <li>
                        <h6>3 Hardbacks </h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <h5>Add Ons</h5>
                    <ul>
                      <li>
                        <h6>Lowest SRP-Guaranteed</h6>
                      </li>
                      <li>
                        <h6>Author Discount for Bulk Book Orders</h6>
                      </li>
                      <li>
                        <h6>3 Advanced Illustration Service</h6>
                      </li>
                      <li>
                        <h6>Book Returns Insurance for 12 months.</h6>
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

export default Newton;
