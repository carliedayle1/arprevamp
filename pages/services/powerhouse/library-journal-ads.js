import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import * as Icon from "react-feather";

const LibraryJournalAds = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Library Journal Ads</title>
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
                    <h2>Library Journal Ads</h2>
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
                  Library Journal readers include library professionals from
                  public, academic, research, and institutional libraries from
                  the United States, and around the world, as well as publishers
                  and vendors with an interest in serving libraries and their
                  patrons. They rely on our publications, events, and research
                  to help navigate the challenges facing their respective
                  institutions, and provide relevant materials and services
                  their communities need.
                </p>
                <div className="features-area  pb-50 ">
                  <h4 style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    Features
                  </h4>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                          <div className="icon">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>Full Page</h6>
                          </h3>
                          <p>
                            The ad spot will be shared by 10 authors in
                            dimension (8.5”) X 10.75″
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                          <div className="icon">
                            <Icon.Layout />
                          </div>
                          <h3>
                            <h6>Horizontal Half Page</h6>
                          </h3>
                          <p>
                            The ad spot will be shared among 5 authors in
                            dimension (8.5”) x 5.5″
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Row>
                  <Col lg={6} md={6} sm={12} style={{ padding: "5rem" }}>
                    <Image
                      src="/images/powerhouse/library.jpg"
                      layout="responsive"
                      width={50}
                      height={50}
                    />
                  </Col>
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    style={{ padding: "3rem", marginTop: "2rem" }}
                  >
                    <p>
                      In the 140 years since it was created, Library Journal has
                      been inspired by the belief that libraries transform
                      lives, at every stage of life. It was there to help
                      libraries in the United States begin organizing as a
                      profession, and as the national and global network of
                      libraries took their place in town squares, campus
                      centers, and schools. As libraries have adapted, LJ has
                      been there all the way–leading the profession forward by
                      identifying trends on the brink of impact, surfacing best
                      practices and innovations to invest in, identifying
                      emerging leaders, sharing important news and perspectives
                      that shape the field, guiding purchasing decisions, acting
                      as an advocate for librarians and libraries–leading the
                      field through the great changes and innovations required
                      to keep libraries strong. Each day the magazine builds on
                      this storied tradition by fueling the innovation engine at
                      the center of every community–your library. The ad will be
                      visible to over 35 million print readers in the U.S.
                    </p>
                  </Col>
                </Row>
                <div>
                  <h4 style={{ marginTop: "2rem" }}>
                    LIST OF LIBRARIES COVERED
                  </h4>
                  <Row style={{ marginTop: "2rem" }}>
                    <Col lg={6} md={6} sm={12}>
                      <h5>Public Libraries</h5>
                      <ul>
                        <li>New York Public Library</li>
                        <li>
                          Public Library of Cincinnati and Hamilton County
                        </li>
                        <li>Boston Public Library</li>
                        <li>Los Angeles Public Library</li>
                        <li>Chicago Public Library</li>
                        <li>County of Los Angeles Public Library</li>
                        <li>Queens Borough Public Library</li>
                        <li>San Diego Public Library</li>
                        <li>Dallas Public Library</li>
                        <li>Hennepin County Library</li>
                        <li>Dayton Metro Library</li>
                        <li>Detroit Public Library</li>
                        <li>King County Library System</li>
                        <li>Cleveland Public Library</li>
                        <li>Cuyahoga County Public Library</li>
                        <li>Brooklyn Public Library</li>
                        <li>Miami-Dade Public Library System</li>
                        <li>Allen County Public Library</li>
                        <li>Hawaii State Public Library System</li>
                        <li>City of St. Louis Municipal Library District</li>
                        <li>Broward County Libraries Division</li>
                        <li>San Francisco Public Library</li>
                        <li>Houston Public Library</li>
                        <li>Las Vegas-Clark County Library District</li>
                        <li>Atlanta Fulton Public Library System</li>
                      </ul>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <h5>Academic Libraries</h5>
                      <ul>
                        <li>Harvard Library</li>
                        <li>
                          University of Illinois at Urbana – Champaign
                          University Library
                        </li>
                        <li>
                          <span>University of Michigan Library</span>
                          <br />
                          <span style={{ paddingLeft: "2rem" }}>
                            - Yale University Library
                          </span>
                        </li>
                        <li>
                          <span>Columbia University Libraries</span>
                          <br />
                          <span style={{ paddingLeft: "2rem" }}>
                            - University of California, Los Angeles Library
                          </span>
                        </li>
                        <li>University of California, Berkeley Libraries</li>
                        <li>University of Texas Libraries</li>
                        <li>University of Chicago Library</li>
                        <li>Indiana University Libraries</li>
                        <li>Princeton University Library</li>
                        <li>University of Wisconsin–Madison</li>
                        <li>Cornell University Library</li>
                        <li>Ohio State University Libraries</li>
                        <li>UNC Chapel Hill Libraries</li>
                        <li>
                          <span>University of Washington Libraries</span>
                          <br />
                          <span style={{ paddingLeft: "2rem" }}>
                            – Pennsylvania State University Libraries
                          </span>
                        </li>
                        <li>Duke University Libraries</li>
                        <li>University of Iowa Libraries</li>
                        <li>The Penn Libraries</li>
                        <li>University of Arizona Libraries</li>
                        <li>University of Minnesota Libraries</li>
                        <li>University of Pittsburgh Library System</li>
                      </ul>
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

export default LibraryJournalAds;
