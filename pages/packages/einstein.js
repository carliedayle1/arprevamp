import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";

const Einstein = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Einstein | Publishing Package </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Einstein Publishing Package" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Einstein Package</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
              </div>

              <h3>Price: $6,899.00</h3>
              <p style={{ marginTop: "1rem" }}>
                The Einstein publishing package offers all the advantages of our
                premium publishing and marketing services suitable for colored
                books. This service provides plenty of ways to get your book to
                the hands of readers, leveraging the full potential of both
                traditional media platforms and the internet with the goal of
                expanding the visibility of your work in the market. Your book
                also gets number of complimentary copies and fully customized
                features from the book cover to interior layout formatting.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Our Einstein publishing platform is the best in the market to
                get your book the bookshelves fast. Talk to one of our Author
                Consultants today to learn more.
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
                        <h6>Trim sizes: 8.5″ X 8.5″ and 8.5″ x 11.0″</h6>
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
                        <h6>15 Paperbacks</h6>
                      </li>
                      <li>
                        <h6>5 Hardbacks </h6>
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
                        <h6>Book Returns Insurance for 24 months.</h6>
                      </li>
                      <li>
                        <h6>
                          Free promotions on our blog site and social media
                          pages.
                        </h6>
                      </li>
                      <li>
                        <h6>5 Advanced Illustration Services</h6>
                      </li>
                      <li>
                        <h6>Advanced Web Design</h6>
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

export default Einstein;
