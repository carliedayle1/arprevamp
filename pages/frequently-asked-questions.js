import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import {
  Accordion,
  Button,
  Form,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import Link from "next/link";

const FrequentlyAskedQuestions = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Frequently Asked Questions </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Company" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Frequently Asked Questions</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
              </div>

              <h3>About Author Reputation Press</h3>

              <div className="mr-2">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      1. What does Author Reputation Pres do?
                    </Accordion.Header>
                    <Accordion.Body>
                      Author Reputation Press provides both publishing and
                      marketing services to authors looking to sell their books
                      through brick-and-mortar stores and online marketplaces
                      like Amazon and Barnes & Noble, among others.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      2. Where is your address?
                    </Accordion.Header>
                    <Accordion.Body>
                      Our address is 45 Dan Road Suite 36, Canton,
                      Massachusetts.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      3. When was Author Reputation Press founded?
                    </Accordion.Header>
                    <Accordion.Body>
                      Author Reputation Press kicked off operations in early
                      2018 as a hybrid publishing company with the goal of
                      helping both budding and seasoned authors publish their
                      work. The company employs a team of experts in the fields
                      of literature, marketing, and publishing, all on deck to
                      assist authors every step of the way.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      4. Is Author Reputation Press legitimate?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, we are a legitimate company with a physical office in
                      Massachusetts and a registration with the Better Business
                      Bureau, a nonprofit organization tasked with advancing
                      marketplace trust.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      5. Are you part of Author Solutions or an imprint of some
                      other publishing companies?
                    </Accordion.Header>
                    <Accordion.Body>
                      No, Author Reputation Press is an independent publishing
                      house.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      6. Why should i publish with Author Reputation Press?
                    </Accordion.Header>
                    <Accordion.Body>
                      Author Reputation Press provides authors total control of
                      their work, wider visibility for their book, a flexible
                      payment plan, and a higher royalty rate than most other
                      publishing houses. In addition to those benefits, the
                      company also recognizes the authors’ need to juggle
                      between their personal life and literary endeavor, thus
                      our dedicated teams of publicists and editors are taking
                      the charge in transforming their manuscript into a
                      full-fledged book.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="7">
                    <Accordion.Header>
                      7. How much do I have to invest in the publication of my
                      book?
                    </Accordion.Header>
                    <Accordion.Body>
                      Author Reputation Press offers various packages for book
                      publishing. Depending on which format you want your book
                      to take, we can offer as low as $999.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="8">
                    <Accordion.Header>
                      8. Do you publish books in languages other than English?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, Author Reputation Press offers translation services
                      in a number of languages other than English, including
                      Spanish. To know more about other language support we
                      offer, call us at 1-800-220-7660.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="9">
                    <Accordion.Header>
                      9. Does APRess publish books written by non-English
                      writers?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, Author Reputation Press caters to writers outside the
                      United States. In fact, we have published books written by
                      Indian authors, among others.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <h3 className="mr-2">
                  About Self Publishing, ISBN and Copyright
                </h3>

                <div className="mr-2">
                  <Accordion defaultActiveKey="1" flush>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        1. How do I self publish my book?
                      </Accordion.Header>
                      <Accordion.Body>
                        Self-publishing involves several steps prior to
                        completion. The first stage is writing the manuscript
                        followed by editing. The post-publication stage includes
                        the marketing campaigns and book promotions. ARPress
                        provides all these services to authors to ensure the
                        success of a book.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        2. What do I need to self-publish?
                      </Accordion.Header>
                      <Accordion.Body>
                        You only need to complete your manuscript and the rest
                        will be taken care of by Author Reputation Press.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        3. Do I need to secure a copyright for my book?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, certainly. Copyright grants you, the author, an
                        exclusive legal right over your book to secure your
                        ownership of your work.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        4. Do I need to secure a copyright for my book?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, certainly. Copyright grants you, the author, an
                        exclusive legal right over your book to secure your
                        ownership of your work.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        5. How important is a a copyright registration?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, certainly. Copyright grants you, the author, an
                        exclusive legal right over your book to secure your
                        ownership of your work.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        6. Does Author Reputation Press offer copyright
                        registrations?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, we handle the registration of copyright for your
                        book. For more information, visit{" "}
                        <a
                          href=" https://authorreputationpress.com/content-creativity/"
                          target="_blank"
                        >
                          https://authorreputationpress.com/content-creativity/
                        </a>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                        7. What is ISBN and deos my book really need it?
                      </Accordion.Header>
                      <Accordion.Body>
                        ISBN (International Standards Book Number) serves as
                        your book’s identification number that distinguishes
                        your work’s title and edition.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="8">
                      <Accordion.Header>
                        8. How can I acquire an ISBN?
                      </Accordion.Header>
                      <Accordion.Body>
                        An ISBN can be obtained from R. R. Bowker. It is
                        available to authors residing in and outside the United
                        States. Author Reputation Press already provides an ISBN
                        acquisition service as part of its publishing packages.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <h3 className="mr-2">
                  About Book Availability and Distribution
                </h3>

                <div className="mr-2">
                  <Accordion defaultActiveKey="1" flush>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        1. Where can readers buy my book?
                      </Accordion.Header>
                      <Accordion.Body>
                        Once published, your book will be available for purchase
                        via online and brick-and-mortar stores. Major
                        distributors include Amazon and Barnes & Noble in
                        addition to our own online bookshop.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        2. What printing method do you use to produce my book?
                      </Accordion.Header>
                      <Accordion.Body>
                        Author Reputation Press uses print-on-demand method to
                        publish books individually or in bulk, depending on
                        customer orders.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="mr-2">
                  <h4>Still have a question? Leave it here</h4>

                  <Form className="mr-2">
                    <Row>
                      <Col lg={6} md={6}>
                        {" "}
                        <Form.Group className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter first name"
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6} md={6}>
                        {" "}
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter last name"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <FloatingLabel
                      controlId="floatingTextarea"
                      label="Questions"
                      className="mb-3"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                      />
                    </FloatingLabel>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FrequentlyAskedQuestions;
