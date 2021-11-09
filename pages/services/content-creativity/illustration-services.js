import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Table, Row, Col } from "react-bootstrap";
import * as Icon from "react-feather";
import Image from "next/image";

const IllustrationService = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Illustration Services | Services </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Content and Creativity" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h2>Illustration Services</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>

                <h5 style={{ marginTop: "2rem" }}>
                  Custom Illustration Services That Bring Your Book to Life
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  With Author Reputation Press, you have the freedom to see your
                  story come to life with our range of book illustration
                  services. Ideal for children’s book (but not limited to this
                  genre), our illustration packages offer custom artwork options
                  to authors who want to enrich their book with simple or
                  three-dimensional illustrations.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Our resident artists and graphic designers can create and
                  deliver unique artworks that best represent how you conceive
                  your story. Choose from one of our packages below according to
                  the type of illustration you want your book to contain.
                </p>

                <div>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Illustration Package</th>
                        <th>Basic</th>
                        <th>Intermediate</th>
                        <th>Advanced</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Simple Illustration</td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Depth and Dimension</td>
                        <td></td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>3D Feel</td>
                        <td></td>
                        <td></td>
                        <td>
                          <Icon.Check />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4">
                          <strong>Prices</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>1 Illustration</td>
                        <td>$199</td>
                        <td>$229</td>
                        <td>$299</td>
                      </tr>
                      <tr>
                        <td>10 Illustration</td>
                        <td>$1,799</td>
                        <td>$2,199</td>
                        <td>$2,799</td>
                      </tr>
                      <tr>
                        <td>20 Illustration</td>
                        <td>$2,499</td>
                        <td>$3,599</td>
                        <td>$4,599</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h3>Basic Illustration</h3>
                  <p style={{ marginTop: "1rem" }}>
                    If you want to add unsophisticated drawings to your book,
                    our Basic Illustration package is the perfect match for you.
                    Bring your imagination to life with simple visual
                    representations made by our artists.
                  </p>

                  <Row>
                    <Col lg={4} md={4} sm={12}>
                      <Image
                        src="/images/illustration/simpleIllustration1.jpg"
                        layout="responsive"
                        width={100}
                        height={150}
                      />
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Image
                        src="/images/illustration/simpleIllustration2.jpg"
                        layout="responsive"
                        width={100}
                        height={150}
                      />
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Image
                        src="/images/illustration/simpleIllustration3.jpg"
                        layout="responsive"
                        width={100}
                        height={150}
                      />
                    </Col>
                  </Row>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h3>Intermediate Illustration</h3>
                  <p style={{ marginTop: "1rem" }}>
                    Our Intermediate illustration package transforms your
                    imagination to a two-dimensional sketch. This provides your
                    readers a deeper visual experience and an immediate way of
                    visualizing the story’s character, setting, and mood.
                  </p>

                  <Row>
                    <Col lg={4} md={4} sm={12}>
                      <Image
                        src="/images/illustration/intermediate1.jpg"
                        layout="responsive"
                        width={100}
                        height={100}
                      />
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Image
                        src="/images/illustration/intermediate2.jpg"
                        layout="responsive"
                        width={100}
                        height={100}
                      />
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Image
                        src="/images/illustration/intermediate3.jpg"
                        layout="responsive"
                        width={100}
                        height={100}
                      />
                    </Col>
                  </Row>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h3>Advanced Illustration</h3>
                  <p style={{ marginTop: "1rem" }}>
                    For more vivid and detailed illustrations for your book,
                    choose our Advanced package, complete with a 3D look. It
                    adds a higher level of accuracy to your book’s visual
                    representation, bringing your readers on an almost
                    true-to-life reading experience.
                  </p>

                  <Row>
                    <Col lg={4} md={4} sm={12}>
                      <Image
                        src="/images/illustration/advance1.jpg"
                        layout="responsive"
                        width={100}
                        height={150}
                      />
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Image
                        src="/images/illustration/advance2.jpg"
                        layout="responsive"
                        width={100}
                        height={150}
                      />
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Image
                        src="/images/illustration/advance3.jpg"
                        layout="responsive"
                        width={100}
                        height={150}
                      />
                    </Col>
                  </Row>
                </div>

                <h5 style={{ marginTop: "2rem" }}>
                  Avail of any of our book illustration services today by
                  calling one of our author advisors at 1-800-220-7660.
                </h5>
                <h6 style={{ marginTop: "2rem", fontStyle: "italic" }}>
                  Note: Authors can supply their own illustration or graphic
                  design. The prices above may change without prior notice.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default IllustrationService;
