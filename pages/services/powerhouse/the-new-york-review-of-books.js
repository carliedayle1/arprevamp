import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Table } from "react-bootstrap";

const TheNewYorkReview = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>The New York Review of Books Advertising</title>
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
                    <h2>The New York Review of Books Advertising</h2>
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
                  Considered the “premier literary-intellectual magazine in the
                  English language,” The New York Review of Books (NYRB)
                  magazine is the most perfect platform to expose your book to
                  hundreds of thousands of readers.
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  The semi-monthly magazine has a worldwide circulation of over
                  135,000 for its hard copy. In addition, its website is visited
                  and read by millions of readers across the globe. NYRB
                  contains in-depth and brilliant discussions about important
                  books at present. Placing an ad for your book on their pages
                  will put your work front and center in the literary field.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Most importantly, the magazine is trusted by every traditional
                  publisher looking for an independent, reliable publication
                  that produces intelligent articles on literature and more. It
                  means your book will be visible to hundreds of traditional
                  publishers on the lookout for new books to publish. Given the
                  NYRB’s unmatched reputation in the literary world, our NYRB Ad
                  placement is a sure way to help increase your book sales
                  exponentially.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Take advantage of this rare opportunity today from one of the
                  most influential and admired journals of its kind. This
                  service is categorized based on the following sizes:
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Size Type</th>
                        <th>Rates (Black and White)</th>
                        <th>Dimensions (Width x Depth</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="3">
                          <strong>Standard Sizes</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Full Page</td>
                        <td>$71,625 </td>
                        <td>9 ¾” x 13 ⅜” </td>
                      </tr>
                      <tr>
                        <td>Three Columns </td>
                        <td>$57,875</td>
                        <td>7 ¼” x 13 ⅜”</td>
                      </tr>
                      <tr>
                        <td>Junior Page</td>
                        <td>$52,125 </td>
                        <td>7 ¼” x 10″ </td>
                      </tr>
                      <tr>
                        <td>Two Columns </td>
                        <td>$42,375 </td>
                        <td>4 ¾” x 13 ⅜” </td>
                      </tr>
                      <tr>
                        <td>Half-Page Horizontal </td>
                        <td>$42,375 </td>
                        <td>9 ¾” x 6 ⅝” </td>
                      </tr>
                      <tr>
                        <td>One Column </td>
                        <td>$23,375</td>
                        <td>2 ¼” x 13 ⅜” </td>
                      </tr>
                      <tr>
                        <td>Quarter-Page Square </td>
                        <td>$23,375 </td>
                        <td>4 ¾” x 6 ⅝” </td>
                      </tr>
                      <tr>
                        <td>One Column Inch </td>
                        <td>$4,340 </td>
                        <td>2 ¼” x 1″ </td>
                      </tr>
                      <tr>
                        <td colSpan="3">
                          <strong>Premium Charges</strong>
                        </td>
                      </tr>
                      <tr>
                        <td> Center Spread </td>
                        <td>$8,250 </td>
                        <td>20 ¼” x 13 ⅜” </td>
                      </tr>
                      <tr>
                        <td>Cover 2 </td>
                        <td>$21,000</td>
                        <td>Full page </td>
                      </tr>
                      <tr>
                        <td>Cover 4 </td>
                        <td>$11,250 </td>
                        <td>Full page</td>
                      </tr>
                      <tr>
                        <td>First Full Right-Hand Page </td>
                        <td>$7,000 </td>
                        <td>Full page </td>
                      </tr>
                      <tr>
                        <td>Second Full Right-Hand Page </td>
                        <td>$6,000 </td>
                        <td>Full page </td>
                      </tr>
                      <tr>
                        <td>Third Full Right-Hand Page </td>
                        <td>$5,000 </td>
                        <td>Full page </td>
                      </tr>
                      <tr>
                        <td colSpan="3">
                          <strong>Color Charges (15% of open rate)</strong>{" "}
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

export default TheNewYorkReview;
