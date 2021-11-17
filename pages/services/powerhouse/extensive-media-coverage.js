import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";

const ExtensiveMediaCoverage = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Extensive Media Coverage</title>
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
                    <h2>Extensive Media Coverage</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h4>
                  Explore Great Opportunities With Our Media Coverage Services
                </h4>
                <p style={{ marginTop: "1rem" }}>
                  Gain a wide exposure from the world-leading media
                  organization. Our Extensive Media Coverage Service offer
                  guaranteed coverage by the biggest names in the media industry
                  including The New York Times, Forbes, Los Angeles Times, Fox
                  News, CNBC, and more.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Our in-house team of publicists will pitch your book to these
                  publications and TV network to secure a coverage for you and
                  your book. This may come in the form of a TV interview or a
                  feature story in a leading publication.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Why It Matters</h5>
                  <p>
                    Media coverage can help bolster your name in the literary
                    would due to the third-party validation-effect bestowed by
                    the media organization’s blue stamp. Obtaining publicity can
                    offer far greater value to authors seeking to grow their
                    readership than other marketing methods.
                  </p>
                  <p>
                    Favorable media coverage is a powerful tool to establish
                    your credibility as an author. More importantly, it is a
                    golden opportunity to get your message across to a broader
                    audience.
                  </p>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h4>Fulfillment Time Window</h4>
                  <div style={{ paddingLeft: "1rem" }}>
                    <div style={{ marginTop: "2rem" }}>
                      <h5>
                        30 Days-Campaign Period + 15 Days of Analytics Report
                        Preparation
                      </h5>
                      <p>
                        Our Team of publicists will work round-the-clock to find
                        the media outlet that best suits your book genre or
                        topic of interest. This will be followed by aggressive
                        negotiations to finally help you land an interview on a
                        major TV station or get featured in an article on
                        respected publications. The total fulfillment period is
                        45 days.
                      </p>
                    </div>
                    <div style={{ marginTop: "2rem" }}>
                      <h5>Strategies</h5>
                      <p>
                        The Extensive Media Coverage service is a thirty-day
                        media campaign that aims to bring your book to TV
                        screens and national broadsheets through our partnership
                        with the world-leading media outlets.
                      </p>
                      <p>
                        Our publicists will develop a list of media contacts
                        based on your book genre. This list will take into
                        consideration the media outlet’s target audience,
                        geographic distribution and editorial focus. A targeted
                        media exposure will translate into more growth for your
                        readership.
                      </p>
                    </div>

                    <div style={{ marginTop: "2rem" }}>
                      <h5>Custom Pitch</h5>
                      <p>
                        We will send custom pitches to multiple media outlets,
                        promoting your book in order to reach a deal for you
                        coverage. At least two media organizations are
                        guaranteed to accept these pitches, after which we will
                        initiate the steps in preparation for your interview or
                        feature story.
                      </p>
                      <p>
                        One mistake that many people make after receiving
                        positive media coverage is to bask in the glory and then
                        let it fade away.
                      </p>
                    </div>

                    <div style={{ marginTop: "2rem" }}>
                      <h5>
                        After the 1-month campaign, you can choose to renew the
                        media coverage service to maximize your exposure
                      </h5>
                      <p>
                        This service is valid only for one month. After that
                        period, you will have an option to renew the campaign in
                        order to maximize your media exposure.
                      </p>
                      <p>
                        One mistake that many people make after receiving
                        positive media coverage is to bask in the glory and then
                        let if fade away. Maximize the coverage in order to not
                        miss a prime opportunity to rise above the rest in this
                        highly competitive field.
                      </p>
                    </div>

                    <div style={{ marginTop: "2rem" }}>
                      <h5>Our Goals</h5>
                      <ul>
                        <li>Identify the media outlet that fits your genre</li>
                        <li>Initiate your appearance on a major TV program</li>
                        <li>
                          Get your book covered by at least two respected
                          publications
                        </li>
                        <li>
                          Bring your work to millions of viewers and readers
                        </li>
                        <li>
                          Position your book as a relevant title in its specific
                          genre
                        </li>
                      </ul>

                      <Row style={{ marginTop: "2rem" }}>
                        <Col lg={4} md={4}>
                          <h5>Newbie Package</h5>
                          <p>Inclusions</p>
                          <ul>
                            <li>500 Custom Pitches Every Month</li>
                            <li>Guaranteed Publications</li>
                            <li>Dedicated Publicist</li>
                            <li>Strategy Consultation</li>
                            <li>Online Publication Pitches</li>
                          </ul>
                        </Col>
                        <Col lg={4} md={4}>
                          <h5>Standard Package</h5>
                          <p>Inclusions</p>
                          <ul>
                            <li>1000 Custom Pitches Per Month</li>
                            <li>Guaranteed Publications</li>
                            <li>Senior Publicist</li>
                            <li>Strategy Consultation</li>
                            <li>Speaking Pitches</li>
                            <li>TV & Podcast Pitches</li>
                          </ul>
                        </Col>
                        <Col lg={4} md={4}>
                          <h5>Advanced Package</h5>
                          <p>Inclusions</p>
                          <ul>
                            <li>2500 Custom Pitches Every Month</li>
                            <li>Guaranteed Publications</li>
                            <li>Senior Publicist & Account Executive</li>
                            <li>Senior Staff Writer</li>
                            <li>Wiki Page & Social Verification</li>
                          </ul>
                        </Col>
                      </Row>
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

export default ExtensiveMediaCoverage;
