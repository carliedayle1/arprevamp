import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Table } from "react-bootstrap";
import * as Icon from "react-feather";

const SocialMediaBlast = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Social Media Blast</title>
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
                    <h2>Social Media Blast</h2>
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
                  Grow your book’s awareness and increase traffic to your site
                  with our Social Media Blast service, targeting the triumvirate
                  of Facebook, Twitter, and Instagram.
                </h4>
                <p style={{ marginTop: "1rem" }}>
                  Social media sites help create brand recognition to get your
                  book in front of the reading public more quickly. It is also
                  the easiest way to draw the readers’ attention to your work —
                  anytime, anywhere –through desktop computers and mobile
                  devices.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  The digital age has dramatically transformed the entire
                  marketing landscape these days. It is important, therefore, to
                  hop on this bandwagon in order to build recognition for your
                  books. After all, consumers can be hesitant to purchase
                  products they don’t recognize.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Building recognition has never been easier with social
                  networking sites. Our Social Media Blast service offers the
                  best-in-class solution to your branding needs. From account
                  creation and daily posting to long-term maintenance, our
                  social media experts will be on deck to manage your social
                  media presence.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Reach tens of thousands of likes and engagements in 30 days or
                  even bring those stats to over a hundred thousand in three
                  months with any of our options in the following table.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Choose From Our Social Media Blast Packages Below</h5>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Packages</th>
                        <th> Account/Page Setup</th>
                        <th>Regular Content Creation</th>
                        <th> Blog Article Posting</th>
                        <th>Audience Engagement</th>
                        <th>Metrics Reporting</th>
                        <th>Account/Page Maintenance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>30-Day Campaign</td>
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
                        <td>60-Day Campaign</td>
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
                        <td>90-Day Campaign</td>
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
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default SocialMediaBlast;
