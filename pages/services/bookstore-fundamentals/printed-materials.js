import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";

const PrintedMaterials = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Printed Materials | Services </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Bookstore Fundamentals" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h2>Printed Materials</h2>
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
                  Printed materials like bookmarks and business cards remain as
                  equally important a marketing tool as online platforms like
                  websites and social media. Indie authors and self-publishers
                  would do well to take advantage of both categories of
                  marketing tools in order to promote their work to readers.
                  Author Reputation Press offers the following print materials
                  to authors:
                </p>

                <Row>
                  <Col lg={6} md={6} sm={12}>
                    <h4 style={{ marginTop: "2rem" }}>Business Cards</h4>
                    <p style={{ marginTop: "1rem" }}>
                      Business Cards come in handy for networking purposes. You
                      can distribute them during any event or speaking
                      engagements to introduce your author brand and make
                      connections in the industry.
                    </p>
                    <h5 style={{ marginTop: "2rem" }}>
                      Business Card Features:
                    </h5>
                    <ul>
                      <li>
                        <h6>Size: 2 x 3 1/2</h6>
                      </li>
                      <li>
                        <h6>Professional full color design</h6>
                      </li>
                      <li>
                        <h6>
                          Inclusion of complete Author details and book ordering
                          information
                        </h6>
                      </li>
                      <li>
                        <h6>Optional mention of previously written books</h6>
                      </li>
                    </ul>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <h4 style={{ marginTop: "2rem" }}>Bookmarks</h4>
                    <p style={{ marginTop: "1rem" }}>
                      Bookmarks make for perfect giveaways during book fairs or
                      other promotional activities. These materials not only
                      assist your readers in their reading process, they also
                      help raise awareness of your work with a wider scope of
                      people.
                    </p>
                    <h5 style={{ marginTop: "2rem" }}>Bookmarks Features:</h5>
                    <ul>
                      <li>
                        <h6>Size: 2 x 7 1/2</h6>
                      </li>
                      <li>
                        <h6>
                          Professional full color design displaying the book’s
                          thumbnail
                        </h6>
                      </li>
                      <li>
                        <h6>
                          Inclusion of Author name, photo, book title, 40-word
                          book description, and book order information
                        </h6>
                      </li>
                    </ul>
                  </Col>

                  <Col lg={6} md={6} sm={12}>
                    <h4 style={{ marginTop: "2rem" }}>Postcards</h4>
                    <p style={{ marginTop: "1rem" }}>
                      Author Reputation Press Postcards are custom-designed to
                      help you pitch your book to the public while keeping a
                      personal touch to the marketing material. These postcards
                      contain all the information about your book and its
                      publication. You can mail them to friends, family and
                      business contacts to spread the word about your latest
                      work.
                    </p>
                    <h5 style={{ marginTop: "2rem" }}>Postcard Features:</h5>
                    <ul>
                      <li>
                        <h6>Size: 4 x 6</h6>
                      </li>
                      <li>
                        <h6>
                          Professional full color design displaying book’s
                          thumbnail.
                        </h6>
                      </li>
                      <li>
                        <h6>
                          Inclusion of Author name, photo, book title, 40-word
                          book description, and book order information
                        </h6>
                      </li>
                    </ul>
                  </Col>

                  <Col lg={6} md={6} sm={12}>
                    <h4 style={{ marginTop: "2rem" }}>Posters</h4>
                    <p style={{ marginTop: "1rem" }}>
                      Whether during book signing events, in local bookstores,
                      or at libraries, posters help provide a snippet of your
                      work for public view with an added visual flair to them.
                    </p>
                    <h5 style={{ marginTop: "2rem" }}>Poster Features:</h5>
                    <ul>
                      <li>
                        <h6>
                          Full color 16″ x 20″poster design displaying book
                          thumbnail
                        </h6>
                      </li>
                      <li>
                        <h6>
                          Inclusion of author biography, author headshot, and
                          book ordering information
                        </h6>
                      </li>
                      <li>
                        <h6>
                          Durable heavy stock material for poster printing
                        </h6>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
                  Disclaimer: Packages include the cost of the print materials,
                  but you’re responsible for the shipping cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default PrintedMaterials;
