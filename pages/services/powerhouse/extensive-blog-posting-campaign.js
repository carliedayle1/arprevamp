import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Table, Row, Col } from "react-bootstrap";
import * as Icon from "react-feather";

const ExtensiveBlog = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Extensive Blog Posting Campaign</title>
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
                    <h2>Extensive Blog Posting Campaign</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h4>Extensive Blog Campaign That Sells</h4>
                <p style={{ marginTop: "1rem" }}>
                  Authors wanting to hit it big in the publishing world will
                  highly benefit from blog posting coverage by popular literary
                  blog sites. Blog articles are a convenient way to build
                  devotion for your work online, made easier with the quick
                  availability of links and less delay in distribution.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Many authors can only wish marketing their books can be
                  magically done. That would give them more time to focus on
                  writing books instead of trying to find ways to sell them.
                  Unfortunately, book marketing is more complicated than it
                  appears, and creating an effective blog series may just
                  provide a solution.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Author Reputation Press maintains a blog site
                  (press.authorreputationpress.com) dedicated to authors who
                  have published with us. It’s a great platform to build an
                  audience and sell your book. The site features an Author
                  Spotlight section where readers can get to know more about
                  authors on a deeper, personal level.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Author Spotlight encompasses a brief overview of an author’s
                  biographical information, whole body of work, and pertinent
                  behind-the-scenes look for readers. In addition, the blog site
                  further creates a buzz for your work by drumming up interest
                  among readers prior to and after your book’s publication.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  With a wide range of readers who are primed and engaged with
                  both fictional and non-fictional titles we publish, the Author
                  Reputation Press blog site is sure to help your work appeal to
                  a targeted group of audiences. The site also receives
                  high-traffic from various platforms including search engines
                  like Google and social media sites like Facebook and Twitter.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Blog Posting Campaign Period</h5>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th></th>
                        <th>30-Day Campaign</th>
                        <th> 60-Day Campaign</th>
                        <th>90-Day Campaign</th>
                        <th> 120-Day Campaign</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Duration</td>
                        <td> 1 month</td>
                        <td>2 months</td>
                        <td>3 months</td>
                        <td> 4 months</td>
                      </tr>
                      <tr>
                        <td>Frequency</td>
                        <td> 2-3 blog articles/week</td>
                        <td>2-3 blog articles/week</td>
                        <td>2-3 blog articles/week</td>
                        <td>2-3 blog articles/week</td>
                      </tr>
                      <tr>
                        <td>Reporting</td>
                        <td> Weekly</td>
                        <td>Monthly</td>
                        <td>Monthly</td>
                        <td>Monthly</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Add-ons</h5>
                  <ul>
                    <li>Two rounds of free revision</li>
                    <li>
                      Free posting on ARPress’ Facebook and Twitter profiles
                    </li>
                    <li>Distribution across thousands of audiences</li>
                    <li>Search engine optimization</li>
                    <li>Author forum distribution</li>
                  </ul>
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

export default ExtensiveBlog;
