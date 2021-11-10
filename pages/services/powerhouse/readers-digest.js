import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import * as Icon from "react-feather";

const ReadersDigest = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Reader's Digest Magazine Ad</title>
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
                    <h2>Reader's Digest Magazine Ad</h2>
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
                  Reader’s Digest readers are amongst the loyal in the magazine
                  industry – the average subscriber stays with the magazine for
                  more than five years. The subscriber rate for the Australian
                  edition is currently 90%, presenting advertisers with a unique
                  opportunity to reach a guaranteed audience.
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
                            <h6>Full Page</h6>
                          </h3>
                          <p>
                            The ad spot will be shared by 4 authors in dimension
                            of (5.187”) X 7.25”
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="single-features">
                          <div className="icon  bg-eb6b3d">
                            <Icon.Layout />
                          </div>
                          <h3>
                            <h6>Horizontal Half Page</h6>
                          </h3>
                          <p>
                            The ad spot will be shared by 3 authors in dimension
                            of (5.187”) X 3.5”
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="single-features">
                          <div className="icon bg-c679e3">
                            <Icon.LifeBuoy />
                          </div>
                          <h3>
                            <h6>Theme of Ads In A Month</h6>
                          </h3>
                          <p>
                            They run ads based on our advertiser’s schedule,
                            needs and wants.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Row>
                  <Col lg={6} md={6}>
                    <p style={{ padding: "1rem" }}>
                      Every issue of Reader’s Digest delivers inspiration,
                      entertainment and information that is relevant to readers
                      and their lives – a fusion of current affairs, powerful
                      human narratives, entertainment, good humor and helpful
                      information on health, home, travel and adventure.
                    </p>
                  </Col>
                  <Col lg={6} md={6}>
                    <p style={{ padding: "1rem" }}>
                      Published in 21 different languages in more than 51
                      countries, with a global circulation of over 10 million,
                      reaching a global readership of over 35 million in print
                      only – reader’s digest inspires by celebrating what is
                      best in our world, our communities and ourselves.
                    </p>
                  </Col>
                </Row>

                <div className="funfacts-area" style={{ marginTop: "3rem" }}>
                  <div className="container">
                    <h4>Fun Facts</h4>
                    <div className="row" style={{ marginTop: "2rem" }}>
                      <div className="col-lg-3 col-md-3 ">
                        <div className="funfact">
                          <h3>134,684+</h3>
                          <p>Monthly Circulation</p>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-3 ">
                        <div className="funfact">
                          <h3>677,000+</h3>
                          <p>Monthly Readership</p>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-3 ">
                        <div className="funfact">
                          <h3>4,200,000+</h3>
                          <p>Ad Impression</p>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-3 ">
                        <div className="funfact">
                          <h3>468,000+</h3>
                          <p>Page Views</p>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 col-md-12 col-12"
                        style={{ marginTop: "2rem" }}
                      >
                        <div className="funfact">
                          <h3>18,000</h3>
                          <p>
                            Additional Circulation copies to Dr’s Surgeries
                            across Australia
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default ReadersDigest;
