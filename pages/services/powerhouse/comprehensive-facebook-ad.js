import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Table, Row, Col } from "react-bootstrap";
import Image from "next/image";
import * as Icon from "react-feather";

const ComprehensiveFacebookAd = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Comprehensive Facebook Ad Campaign</title>
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
                    <h2>Comprehensive Facebook Ad Campaign</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h5>
                  Hit the right target readers with our comprehensive Facebook
                  ads for books.
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  This service aims to grow your online presence by leveraging
                  the broad user base of Facebook. With more than two billion
                  users worldwide, Facebook can help increase awareness of your
                  work and get your book out to millions of readers. Facebook
                  advertising is the quickest way to catch the readers’
                  attention through desktop computers and mobile devices. Our
                  ads will be displayed on Facebook’s Desktop News Feed, Mobile
                  News Feed, Instagram, and Facebook In-Stream Video for both
                  desktop and mobile phones.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Digital platforms have dramatically changed the entire
                  marketing landscape. Potential readers are most likely to have
                  a Facebook account and access it at least once daily. It makes
                  sense, therefore, to promote your work on the world’s largest
                  social networking site.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Building recognition with social networking sites won’t be an
                  easy task if you do it all by yourself, however. You need not
                  to worry, our Facebook advertising offers a hassle-free
                  service tailored according to your requirements and needs.
                  From content creation to platform distribution, our social
                  media experts will be on deck to manage your social media
                  presence.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Are you ready yet? Reach hundreds of millions of people across
                  the world with any of the following options.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Ad Packages A</h5>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Campaign Period (Days)</th>
                        <th>Location</th>
                        <th>
                          Estimated Reach of 170M Facebook Users in the U.S.
                        </th>
                        <th>Report</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>30</td>
                        <td>United States</td>
                        <td> 400-1,100 per day</td>
                        <td>After 30 days</td>
                      </tr>
                      <tr>
                        <td>60</td>
                        <td> United States</td>
                        <td> 400-1,100 per day</td>
                        <td> Every Month</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>United States</td>
                        <td>400-1,100 per day</td>
                        <td>Every Month</td>
                      </tr>
                      <tr>
                        <td>180</td>
                        <td>United States</td>
                        <td> 400-1,100 per day</td>
                        <td>Every Month</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <h5>Ad Packages B</h5>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Campaign Period (Days)</th>
                        <th>Location</th>
                        <th>
                          Estimated Reach of 170M Facebook Users in the U.S.
                        </th>
                        <th>Report</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>60</td>
                        <td>
                          Asia, Africa, Europe, Australia, North America, South
                          America, and America
                        </td>
                        <td>67,000-200,000 per day</td>
                        <td>After 30 days</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>
                          {" "}
                          Asia, Africa, Europe, Australia, North America, South
                          America, and America
                        </td>
                        <td> 54,000-160,000 per day</td>
                        <td> Every Month</td>
                      </tr>
                      <tr>
                        <td>180</td>
                        <td>
                          Asia, Africa, Europe, Australia, North America, South
                          America, and America
                        </td>
                        <td>31,000-91,000 per day</td>
                        <td>Every Month</td>
                      </tr>
                      <tr>
                        <td>360</td>
                        <td>
                          Asia, Africa, Europe, Australia, North America, South
                          America, and America
                        </td>
                        <td>22,000-65,000 per day</td>
                        <td>Every Month</td>
                      </tr>
                    </tbody>
                  </Table>
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

export default ComprehensiveFacebookAd;
