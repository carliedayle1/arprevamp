import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Button, Table } from "react-bootstrap";
import * as Icon from "react-feather";

const HollywoodBookReviews = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Hollywood Book Review</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Hollywood Book Review" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Hollywood Book Review</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
              </div>
              <h4>Make Your Book More Credible With Hollywood Book Review</h4>
              <p style={{ marginTop: "1rem" }}>
                Hollywood Book Review’s (HBR) professional book critics help
                give strong credibility to your work and increased exposure to
                your author brand. Regardless of whether the publisher is large
                or small, HBR’s reviewers provide an unbiased, constructive
                criticism for your work.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Our HBR packages are dedicated to quality self-published books
                that deserve to be reviewed by industry professionals. Pick one
                of the book review services below and give your book the maximum
                exposure it deserves.
              </p>

              <div style={{ marginTop: "2rem" }}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Standard</th>
                      <th>Express</th>
                      <th>Ultimate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3-week turnaround time for review (may vary)</td>
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
                      <td>PDF tear sheet</td>
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
                      <td>HBR resulting review link (optional)</td>
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
                      <td>
                        Press release and distribution to 100 media outlets
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <Icon.Check />
                      </td>
                    </tr>
                    <tr>
                      <td>Author spotlight listing</td>
                      <td></td>
                      <td></td>
                      <td>
                        <Icon.Check />
                      </td>
                    </tr>
                    <tr>
                      <td>Exclusive author interview</td>
                      <td></td>
                      <td></td>
                      <td>
                        <Icon.Check />
                      </td>
                    </tr>
                    <tr>
                      <td>400-600 word professional review</td>
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
                      <td>HBR homepage featured book of the month</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                    </tr>
                    <tr>
                      <td>HBR homepage top 5 reviews</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                    </tr>
                    <tr>
                      <td>
                        Review link for Amazon, Barnes & Noble, Google, Ingram,
                        Baker & Taylor and more listings
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
                      <td>
                        Review links for authors’ website and ARPress’ portal
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
                      <td>Review posting on HBR’s social media sites</td>
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
                      <td>Review will feature authors’ social media pages</td>
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
                      <td>Newsletter listing</td>
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
                      <td>
                        Review distribution to news sites and search engines
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
                      <td>
                        Feature slot on Amazon Editorial Page and Barnes & Noble
                      </td>
                      <td></td>
                      <td>
                        <Icon.Check />
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>First page placement on Google search engines</td>
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
                      <td>Starred review</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                    </tr>
                    <tr>
                      <td>Cover Revision Inclusion</td>
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
                      <td>Pacific Book Awards Nomination</td>
                      <td>Guaranteed</td>
                      <td>Guaranteed</td>
                      <td>Guaranteed</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HollywoodBookReviews;
