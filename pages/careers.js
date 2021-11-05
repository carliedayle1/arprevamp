import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Head from "next/head";
import * as Icon from "react-feather";
import { useState } from "react";
import { Modal, Form, Row, Col, FloatingLabel } from "react-bootstrap";

export default function Careers() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleApplyNow = () => {};

  return (
    <>
      <Head>
        <title>Careers | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Join our Growing Team!" />

      <div className="features-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/business/joinus.jpg"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <div className="col-lg-12 col-md-12 services-content">
                  <div className="section-title">
                    <h2>Why join us?</h2>
                    <div className="bar"></div>
                    <p>
                      We provide our employees with unlimited opportunities. We
                      have been able to retain stability and profitability in an
                      unbridled flow of change and expansion.
                    </p>
                    <p style={{ marginTop: "20px" }}>
                      We offer an unrivaled choice of customized products to our
                      customers all over the world, according to our
                      considerable industry knowledge. We are constantly
                      striving to meet the demands of our customers by providing
                      high-quality, consistent products backed up by devoted
                      service.
                    </p>
                    <p style={{ marginTop: "20px" }}>
                      Your function is vital wherever you work within the
                      organization, and your contribution is recognized and
                      respected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <div className="col-lg-12 col-md-12 services-content">
                  <div className="section-title">
                    <h2>The ideal place to work at</h2>
                    <div className="bar"></div>
                    <p>
                      You come to work in a focused, highly collaborative
                      atmosphere and benefit from the experienced and
                      internationally diversified colleagues you'd expect to
                      find in a growing, inventive, and professional
                      organization.
                    </p>

                    <p style={{ marginTop: "20px" }}>
                      Every day, we are proud of what we accomplish. We
                      appreciate working in an informal and flat organization,
                      where we can use collaborative teamwork to achieve our
                      goals in a collaborative manner. This collaborative
                      approach extends to our customer relationships, who
                      recognize our expertise and dedication via their long-term
                      loyalty.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 features-details-image">
              <img
                src="/images/business/ideal.jpg"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>
          </div>
          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <img
                src="/images/business/hr.jpg"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <div className="col-lg-12 col-md-12 services-content">
                  <div className="section-title">
                    <h2>We invest in human resources</h2>
                    <div className="bar"></div>
                    <p>
                      We consider continuous training and feedback to be an
                      investment in your future. Flexible work hours that allow
                      for work/life integration, as well as access to
                      significant benefits, are just a few indicators that
                      you've found the appropriate job.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <div className="col-lg-12 col-md-12 services-content">
                  <div className="section-title">
                    <h2>We want your ideas</h2>
                    <div className="bar"></div>
                    <p>
                      Do you have an uncanny ability to come up with new ideas?
                      We treasure those "aha!" moments. We are here to listen,
                      whether it's about how we might operate more effectively,
                      find new revenue avenues, or assist others prosper. We've
                      been known to turn employee ideas into key company
                      programs and initiatives with tangible results and full
                      executive support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 features-details-image">
              <img
                src="/images/business/ideas.jpg"
                className="animate__animated animate__fadeInUp"
                alt="image"
              />
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            {/* <div className="col-lg-12 features-details-image">
              <img
                src="/images/business/available.jpg"
                className="animate__animated animate__fadeInUp"
                alt="image"
                width="40%"
                height="100%"
              />
            </div> */}
            <div className="col-lg-12 features-details">
              <div className="features-details-desc">
                <div className="col-lg-12 col-md-12 services-content">
                  <div className="section-title">
                    <h2>Available Positions</h2>
                    <div className="bar"></div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="box">
                        <Icon.PenTool /> Author Consultants
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="box">
                        <Icon.Globe /> Web Developer
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="box">
                        <Icon.Search /> Book Scout Agents
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="box">
                        <Icon.BookOpen /> Book Fulfillment
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary"
                    style={{ marginTop: "20px" }}
                    onClick={handleShow}
                  >
                    Apply Now!
                  </button>

                  <Modal
                    show={show}
                    onHide={handleClose}
                    centered
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Apply Now!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p> Please provide the information needed below</p>
                      <Form>
                        <Row>
                          <Col>
                            <Form.Floating className="mb-3">
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Enter first name"
                              />
                              <label htmlFor="floatingInputCustom">
                                First name
                              </label>
                            </Form.Floating>
                          </Col>
                          <Col>
                            <Form.Floating className="mb-3">
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Enter last name"
                              />
                              <label htmlFor="floatingInputCustom">
                                Last name
                              </label>
                            </Form.Floating>
                          </Col>
                        </Row>

                        <FloatingLabel
                          controlId="floatingSelectGrid"
                          label="Applying for"
                          className="mb-3"
                        >
                          <Form.Select aria-label="Floating label select example">
                            <option disabled selected>
                              Select job position
                            </option>
                            <option value="Author Consultants">
                              Author Consultants
                            </option>
                            <option value="Web Developer">Web Developer</option>
                            <option value="Book Scout Agents">
                              Book Scout Agents
                            </option>
                            <option value="Book Fulfillment">
                              Book Fulfillment
                            </option>
                          </Form.Select>
                        </FloatingLabel>

                        <Form.Floating className="mb-3">
                          <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInputCustom">
                            Email address
                          </label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                          <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInputCustom">
                            Contact Number
                          </label>
                        </Form.Floating>

                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label>Resume/Curriculum Vitae</Form.Label>
                          <Form.Control type="file" />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <button className="btn" onClick={handleClose}>
                        Close
                      </button>
                      <button className="btn btn-primary" onClick={handleClose}>
                        Submit
                      </button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
