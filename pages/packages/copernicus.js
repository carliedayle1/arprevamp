import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Copernicus = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Copernicus | Publishing Package </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Copernicus Publishing Package" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Copernicus Package</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
              </div>

              <h3>Price: $1,399.00</h3>
              <p style={{ marginTop: "1rem" }}>
                The Copernicus publishing package is our most affordable service
                for a full-color book publication. It is the perfect option for
                a culinary guide, children’s book, or a photography compilation.
                With this package, you have total freedom to customize your own
                book cover and interior layout with the help of our professional
                graphic artists. This bundle also provides unlimited graphics
                insertions and a wide range of trim sizes for your book. Our
                team will handle all the legwork for your copyrights and LOC
                registration to save you time and efforts. This package also
                includes complimentary copies for giveaways during promotional
                events and book fairs. To learn more about this great publishing
                platform, talk to one of our Publishing Advisors today and find
                out why this option suits you best.
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
                        <h6> Author-designed cover</h6>
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

                  <Col sm={6} md={6} lg={6}>
                    <h5>Author Copies</h5>
                    <ul>
                      <li>
                        <h6>1 Paperback</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <h5>Package Free Copies</h5>
                    <ul>
                      <li>
                        <h6>3 Paperbacks</h6>
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
                        <h6>1 Advanced Illustration Service</h6>
                      </li>
                      <li>
                        <h6>Author Volume Discount for Book Order</h6>
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

export default Copernicus;
