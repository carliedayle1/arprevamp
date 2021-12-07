import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Table, Row, Col } from "react-bootstrap";

const CinematicBookTrailer = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Cinematic Book Trailer</title>
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
                    <h2>Cinematic Book Trailer</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h4>Bring Your Book to Life With A Cinematic Book Trailer</h4>
                <p style={{ marginTop: "1rem" }}>
                  Take advantage of the explosive growth in popularity of videos
                  online with our Cinematic Book Trailer packages. These
                  services provide authors with a unique opportunity to reach a
                  vast swath of audiences and deepen their connection with
                  readers.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Bring your work to life with any of our premium packages
                  customized to fit your needs for brilliant book trailers.
                  Leave your readers in awe with visually stimulating video
                  productions much like that of a movie trailer.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Visual elements are proven to be an effective factor for
                  drawing the attention of millions of audiences. That is why
                  book trailers play a significant role in bolstering your
                  book’s visibility, especially when they go viral.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Studio Head Package</h5>
                  <p>
                    The Studio Head Package is our most advanced book trailer
                    service with a professional team of production crew and
                    actors. The trailer will be shot using a cutting-edge Red or
                    Alexa camera, complete with video effects to add spice to
                    your book trailer.
                  </p>
                  {/* <h6>Sample Book Trailers</h6>
                  <Row style={{ marginTop: "1rem" }}>
                    <Col lg={4} md={4} style={{ marginTop: "1rem" }}>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/fD3NDCNL-sc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </Col>
                    <Col lg={4} md={4} style={{ marginTop: "1rem" }}>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/fD3NDCNL-sc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </Col>
                    <Col lg={4} md={4} style={{ marginTop: "1rem" }}>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/fD3NDCNL-sc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </Col>
                  </Row> */}
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>The Director’s Package</h5>
                  <p>
                    The Director’s Package is our most popular book trailer
                    package. This service utilizes the same idea from the Studio
                    Head Package, but employs a smaller production team.
                    Excellent video trailer and top-notch production quality are
                    all guaranteed regardless. Plus, authors can request a
                    camera upgrade for the shoot.
                  </p>
                  {/* <h6>Sample Book Trailers</h6>
                  <Row style={{ marginTop: "1rem" }}>
                    <Col lg={4} md={4} style={{ marginTop: "1rem" }}>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/fD3NDCNL-sc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </Col>
                    <Col lg={4} md={4} style={{ marginTop: "1rem" }}>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/fD3NDCNL-sc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </Col>
                    <Col lg={4} md={4} style={{ marginTop: "1rem" }}>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/fD3NDCNL-sc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </Col>
                  </Row> */}
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>The Filmmaker’s Package</h5>
                  <p>
                    As the smallest scale package, The Filmmaker’s Package
                    includes a simple production design on a budget.
                    Nonetheless, the same level of quality and attention to
                    details will be observed for this type of book trailer.
                    Camera upgrade is available as well.
                  </p>
                  {/* <h6>Sample Book Trailers</h6>
                  <Row style={{ marginTop: "1rem" }}>
                    <Col lg={4} md={4} style={{ marginTop: "1rem" }}>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/fD3NDCNL-sc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </Col>
                    <Col lg={4} md={4} style={{ marginTop: "1rem" }}>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/fD3NDCNL-sc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </Col>
                    <Col lg={4} md={4} style={{ marginTop: "1rem" }}>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/fD3NDCNL-sc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </Col>
                  </Row> */}
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <p style={{ fontStyle: "italic" }}>
                    Note: Authors have the option to customize a trailer package
                    of their choice and each trailer option comes with a script
                    treatment prior to production. Once the author approves the
                    script treatment, the team will proceed with the video
                    production stage. Each package includes two rounds of free
                    edits upon the author’s request.
                  </p>
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

export default CinematicBookTrailer;
