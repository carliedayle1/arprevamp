import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Button, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import Image from "next/image";

const GetStarted = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Get Author's Guide </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Get Author's Guide" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Get Author's Guide</h2>
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
                <h5>
                  Your guide will be emailed to the address you enter below
                </h5>

                <Row className="mr-2">
                  <Col lg={6} md={6} className="center">
                    <Form style={{ width: "30rem", maxWidth: "30rem" }}>
                      <Form.Group className="mb-3">
                        <Form.Label> Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter phone number"
                        />
                      </Form.Group>

                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Address"
                        className="mb-3"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                        />
                      </FloatingLabel>

                      <Button variant="primary" type="submit">
                        Send
                      </Button>
                    </Form>
                  </Col>
                  <Col lg={6} md={6} className="center mr-2">
                    <Image
                      src="/images/books/authorsguide.jpg"
                      className="animate__animated animate__fadeInUp animate__delay-0.6s"
                      alt="Authors Guide"
                      width={500}
                      height={650}
                      layout="intrinsic"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GetStarted;
