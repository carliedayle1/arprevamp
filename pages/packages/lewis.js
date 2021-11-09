import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Lewis = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Lewis | Publishing Package </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Lewis Publishing Package" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Lewis Package</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
              </div>

              <h3>Price: $5,999.00 </h3>
              <p style={{ marginTop: "1rem" }}>
                Children’s Books not only help tickle the imagination of kids,
                they also play a vital role in nurturing their vocabulary and
                language skills. Bearing this in mind will do authors good as
                they tell their story to kids through text and illustrations. On
                top of those considerations, spicing up your book with humor is
                a sure way to gain momentum in this segment.
              </p>

              <p style={{ marginTop: "1rem" }}>
                However, that is only the first step, Creating an attractive
                cover design, designing a thorough plan, and formulating an
                effective marketing strategy are equally important for your
                book’s success. At Author Reputation Press, we’ve got you
                covered with our children’s book package that is tailored to
                your requirements.
              </p>

              <p style={{ marginTop: "1rem" }}>
                Regale your young readers with stories of magical creatures or
                animated objects. Let us help you turn those tales in to print
                with our Seuss publishing package, complete with your desired
                illustrations and other inclusions. See the full package
                inclusion below:
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
                    <h5>Deisgn and Content</h5>
                    <ul>
                      <li>
                        <h6>Custom interior layout</h6>
                      </li>
                      <li>
                        <h6>Custom cover design</h6>
                      </li>
                      <li>
                        <h6>Unlimited Image Insertion</h6>
                      </li>
                      <li>
                        <h6>Unlimited corrections</h6>
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
                        <h6>1 Hardbacks</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <h5>Package Free Copies</h5>
                    <ul>
                      <li>
                        <h6>20 Paperbacks</h6>
                      </li>
                      <li>
                        <h6>15 Hardbacks</h6>
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
                        <h6>AR Press Bookstore Availability</h6>
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
                    </ul>
                  </Col>

                  <Col sm={6} md={6} lg={6}>
                    <h5>Timeframe</h5>
                    <ul>
                      <li>
                        <h6>
                          2 – 3 months depending on the author’s responsiveness
                          and availability of the manuscript.
                        </h6>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <h5>Add Ons</h5>
                    <ul>
                      <li>
                        <h6>Lowest SRP (Guaranteed)</h6>
                      </li>
                      <li>
                        <h6>10 Basic Illustrations</h6>
                      </li>
                      <li>
                        <h6>Author Volume Discount for Bulk Book Orders</h6>
                      </li>
                      <li>
                        <h6>Advanced Web Design</h6>
                      </li>
                      <li>
                        <h6>12-month Booksellers Return Program.</h6>
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

export default Lewis;
