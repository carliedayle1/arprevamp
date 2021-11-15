import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Table, Row, Col } from "react-bootstrap";
import * as Icon from "react-feather";

const PressReleaseService = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Press Release Service</title>
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
                    <h2>Press Release Service</h2>
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
                  Reach your target audience through our Press Release service
                  that employs multi-channel distribution, social campaigns and
                  personalized communication with hundreds of millions of
                  journalists and influencers on deck to pick your story.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Our Press Release team has been providing vital resources to
                  journalists on the lookout for interesting stories, leveraging
                  the power of our media relationships and wide distribution
                  network. Whether you are looking for a local media outlet to
                  grab your story or wish to distribute it to a broader scope of
                  audiences, Author Reputation Press has your back. Choose the
                  perfect match for your PR needs from our packages below.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  As an example, when you search for “action adventure books”,
                  the first page of the results shows popular titles from major
                  traditional publishers or Amazon listings. While those books
                  fall under the same genre as yours, they’ve made it to the top
                  pages of Google Search or Bing, for example. This means those
                  titles are easier to find for people searching for that
                  specific book genre while books that appear in the third and
                  fourth pages have a slimmer chance of getting noticed.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Package</th>
                        <th>Industry Influencers</th>
                        <th>Websites & Blogs</th>
                        <th>Search Engines</th>
                        <th>Magazines</th>
                        <th>News Agencies</th>
                        <th>Newspaper</th>
                        <th>Online</th>
                        <th>Radio</th>
                        <th>Television</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>National Newsline</td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                      </tr>
                      <tr>
                        <td>Regional Newsline1</td>
                        <td></td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                      </tr>
                      <tr>
                        <td>NY State or Metro Newsline2</td>
                        <td></td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                      </tr>
                      <tr>
                        <td>State Newsline3</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                        <td>
                          <Icon.Check />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div>
                  <p>Notes:</p>
                  <ol>
                    <li style={{ fontStyle: "italic" }}>
                      Distribution of the Regional Newsline service will depend
                      on which U.S. region the author wants the press release to
                      be disseminated: Northeast, Midwest, South, West
                    </li>
                    <li style={{ fontStyle: "italic" }}>
                      The New York State or Metro Newsline PR distribution is
                      limited either to the state of NY or Metro area, depending
                      on the author’s preference.
                    </li>
                    <li style={{ fontStyle: "italic" }}>
                      The State Newsline distribution targets press release to a
                      specific state in the U.S. which is of particular interest
                      to the author or the book.
                    </li>
                  </ol>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>National Newsline</h5>
                  <p>
                    Our National Newsline PR distribution commands an extensive
                    reach across 50 states in the U.S., leveraging the power of
                    traditional newsrooms including news agencies, newspaper
                    outlets, television networks, magazines, and radio stations.
                    We have also engaged more than 41,000 influencers on a wide
                    variety of topics including travel, entertainment, and
                    public interest, among others.
                  </p>
                  <p>
                    In addition, our online syndication network distributes PR
                    content about you and your book to more than 4,000 websites
                    and blogs. Our PR team also works to increase your
                    visibility across different search engines.
                  </p>

                  <Container>
                    <Row>
                      <Col lg={6} md={6}>
                        <h6>News Agencies</h6>
                        <ul>
                          <li>Associated Press</li>
                          <li>Bloomberg</li>
                          <li>Reuters</li>
                          <li>Dow Jones</li>
                        </ul>
                      </Col>
                      <Col lg={6} md={6}>
                        <h6>Magazines</h6>
                        <ul>
                          <li>TIME</li>
                          <li>Fortune</li>
                          <li>Inc.</li>
                          <li>U.S. News</li>
                        </ul>
                      </Col>
                      <Col lg={6} md={6}>
                        <h6>Newspapers</h6>
                        <ul>
                          <li>The New York Times</li>
                          <li>The Wall Street Journal</li>
                          <li>Chicago Tribune</li>
                          <li>Los Angeles Times</li>
                        </ul>
                      </Col>

                      <Col lg={6} md={6}>
                        <h6>Radio</h6>
                        <ul>
                          <li>Bloomberg Radio</li>
                          <li>NPR</li>
                          <li>CBS Radio</li>
                          <li>Sirius XM</li>
                        </ul>
                      </Col>

                      <Col lg={6} md={6}>
                        <h6>Television</h6>
                        <ul>
                          <li>CBS News</li>
                          <li>NBC News</li>
                          <li>Fox News</li>
                          <li>ABC News</li>
                        </ul>
                      </Col>

                      <Col lg={6} md={6}>
                        <h6>Search Engines</h6>
                        <ul>
                          <li>Google</li>
                          <li>Yahoo</li>
                          <li>Bing</li>
                          <li>DuckDuckGo</li>
                        </ul>
                      </Col>
                    </Row>
                  </Container>
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

export default PressReleaseService;
