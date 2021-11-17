import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";

const InternetBasedMarketing = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Internet Based Marketing</title>
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
                    <h2>Internet Based Marketing</h2>
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
                  Author Reputation Press taps the power of the internet to help
                  expand the market reach of your book, from local to
                  international marketplaces. Using the power of the web, we
                  level the playing field for all our authors and give your book
                  a great level of exposure in the literary world.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <Row>
                    <Col
                      lg={6}
                      md={6}
                      style={{ marginTop: "2rem" }}
                      style={{ marginTop: "2rem" }}
                    >
                      <h5>Blog Tour Service</h5>
                      <p>
                        Through our Blog Tour Service, authors get the chance to
                        see their avid readers in person and talk about what
                        brings them together in one place. This package also
                        provides authors the opportunity to be exposed to
                        bloggers and their followers through the internet in
                        addition to their own reader base.
                      </p>
                      <p>
                        Tapping the help of popular book bloggers is one way to
                        reach the right audience for your book and maximize its
                        sales potential. Author Reputation Press has partnered
                        with several publicists and book bloggers whose
                        influence will definitely bring traffic to your work.
                      </p>
                    </Col>
                    <Col lg={6} md={6} style={{ marginTop: "2rem" }}>
                      <h5>Amazon Look Inside And Google Preview</h5>
                      <p>
                        Take advantage of the opportunity to get discovered
                        through our Amazon “Look Inside” and Google Preview
                        services. These tools let readers get a sneak peek of
                        your book when they search using Amazon or Google’s
                        search engine.
                      </p>
                      <p>
                        This service allows readers to sample some preview pages
                        of your work through a navigation bar and the table of
                        contents in which they can search for specific terms
                        within your text. Providing readers with a sneak peek of
                        your book is key to igniting their interest to read on
                        and eventually convince them to buy a copy of your work.
                      </p>
                    </Col>

                    <Col lg={6} md={6} style={{ marginTop: "2rem" }}>
                      <h5>Google Marketing</h5>
                      <p>
                        Boost the visibility of your book to your target
                        audience through our Google Marketing service. This
                        platform allows you to use specific targeting parameters
                        such as location, age, language, audience interest,
                        topic, keywords, and even specific websites that are
                        part of Google’s network.
                      </p>
                      <p>
                        As the largest web search engine, Google can draw a lot
                        of attention for your book if given the right marketing
                        strategy. Author Reputation Press maintains a track
                        record of successfully promoting books using the power
                        of Google search engine.
                      </p>
                    </Col>

                    <Col lg={6} md={6} style={{ marginTop: "2rem" }}>
                      <h5>Search Engine Optimization</h5>
                      <p>
                        Search engine optimization (SEO) bolsters the online
                        exposure that your book deserves. SEO consists of both
                        technical and creative elements that are necessary to
                        improve your title’s search rank, drive traffic to your
                        author website, and increase your book’s presence across
                        different search engines.
                      </p>
                      <p>
                        Content is king in SEO. In line with this principle, we
                        see to it that your book gains the maximum visibility
                        online by employing the perfect content marketing
                        techniques. This provides a high level of assurance that
                        your work reaches your intended market.
                      </p>
                    </Col>

                    <Col lg={6} md={6} style={{ marginTop: "2rem" }}>
                      <h5>Online Booksellers Campaign</h5>
                      <p>
                        We will run an aggressive ad campaign for your book on
                        two of the world’s biggest online storefronts: Amazon
                        and Ingram. Amazon is one of the world’s largest online
                        retailers with 183 million unique visitors every
                        month.Majority of US consumers start their web searches
                        with Amazon more often than anywhere else on the web.​
                      </p>
                      <p>
                        Over 40,000 retailers, educators, and librarians
                        worldwide use Ingram’s ipage to search for and order a
                        book online.The website has 14,000 unique visitors on a
                        daily basis.
                      </p>
                    </Col>

                    <Col lg={6} md={6} style={{ marginTop: "2rem" }}>
                      <h5>Google Marketing</h5>
                      <p>
                        Boost the visibility of your book to your target
                        audience through our Google Marketing service. This
                        platform allows you to use specific targeting parameters
                        such as location, age, language, audience interest,
                        topic, keywords, and even specific websites that are
                        part of Google’s network.
                      </p>
                      <p>
                        As the largest web search engine, Google can draw a lot
                        of attention for your book if given the right marketing
                        strategy. Author Reputation Press maintains a track
                        record of successfully promoting books using the power
                        of Google search engine.
                      </p>
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

export default InternetBasedMarketing;
