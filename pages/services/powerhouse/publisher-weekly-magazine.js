import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";
import * as Icon from "react-feather";

const PublisherWeekly = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Publisher Weekly Magazine</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Powerhouse Platform" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h2>Publisher Weekly Magazine</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>

                <p style={{ marginTop: "1rem" }}>
                  Publishers Weekly is a global publication providing
                  unparalleled reach to an avid group of audiences consisting of
                  publishing professionals and devoted consumers around the
                  world. PW is read by every professional involved in the book
                  business and covers every aspect from creation to sales.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  With a print readership of 68 , 000 , it is the most trusted
                  publication on the market. Readers rely on PW for its
                  impartial book reviews as well as full- length articles
                  featuring books and authors. As the most powerful and
                  influential brand in the book business, PW reaches into a
                  critical market of industry insiders, key decision makers and
                  a rapidly growing consumer segment.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  With its print issues unrivaled in the industry, Publishers
                  Weekly is the clear authority and the premier vehicle to
                  connect you to the exact audience you want to reach.
                </p>

                <div className="features-area   ">
                  <h4 style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    Features
                  </h4>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="single-features">
                          <div className="icon">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>Full Page Advertisement</h6>
                          </h3>
                          <p>Shared by 10 authors</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="single-features">
                          <div className="icon  bg-eb6b3d">
                            <Icon.Layout />
                          </div>
                          <h3>
                            <h6>Ad Size Dimension</h6>
                          </h3>
                          <p>
                            The ad measures 7 7 / 8” x 10 ½” and occupies four
                            columns of the magazine.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="single-features">
                          <div className="icon  bg-c679e3">
                            <Icon.LifeBuoy />
                          </div>
                          <h3>
                            <h6>Display Advertisement</h6>
                          </h3>
                          <p>
                            The ad is positioned to editorial content or within
                            Publishers Weekly magazine.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Col lg={6} mg={6}>
                      <h4>Benefits</h4>
                      <p>
                        Print ads allow you to target your audience. You’ re in
                        full control of exactly what section of the newspaper or
                        magazine you place your ad in, and you can do this based
                        on information about where your audience is most likely
                        to read. You can run your ad in a special section of a
                        publication or anywhere in the paper.
                      </p>
                      <p>
                        You can also tailor your campaigns to suit your budget.
                        Even more, you will be working with a human being when
                        you buy your ad space, so you won’ t be at the mercy of
                        an online algorithm that decides where your ads are
                        seen. Print media provides you much more customization
                        than digital ads.
                      </p>
                    </Col>
                    <Col
                      lg={6}
                      mg={6}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/images/powerhouse/publisher1.png" alt="" />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default PublisherWeekly;
