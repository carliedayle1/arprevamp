import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Button, Table } from "react-bootstrap";
import * as Icon from "react-feather";

const PacificBookReviews = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Pacific Book Reviews</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Pacific Book Reviews" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Pacific Book Reviews</h2>
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
                Giving credibility to your book is an essential factor to lure
                more readers into your work. Pacific Book Review’s (PBR)
                professional book critics are among the industry’s highly
                reliable sources of approval for works of both fiction and
                non-fiction.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Pacific Book Review’s pool of reviewers consists of seasoned
                writers, editors, book critics, and subject matter experts. They
                exercise the utmost objectivity when it comes to scrutinizing a
                book. This is also a great way to market your work of art.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Pacific Book Review’s website and services are widely visible to
                agents, publishers, librarians, booksellers and readers. All
                reviews are also syndicated on Ingram’s iPage and Oasis
                databases distributed to 70,000 booksellers and librarians.
              </p>
              <div style={{ marginTop: "2rem" }}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Standard</th>
                      <th>Express</th>
                      <th>Ultimate Advanced</th>
                      <th>Dual Book Review Bundle*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Turnaround time for review</td>
                      <td>5-7 weeks</td>
                      <td>3 weeks</td>
                      <td>3 weeks</td>
                      <td>3 weeks</td>
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
                      <td>
                        <Icon.Check />
                      </td>
                    </tr>
                    <tr>
                      <td>Exclusive author interview posted on PBR Channels</td>
                      <td></td>
                      <td></td>
                      <td>
                        <Icon.Check />
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Press release distributed to media outlets</td>
                      <td></td>
                      <td></td>
                      <td>
                        <Icon.Check />
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        Featured author spotlight or author spotlight link on
                        PBR homepage for 1 month
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <Icon.Check />
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Author spotlight page</td>
                      <td></td>
                      <td></td>
                      <td>
                        <Icon.Check />
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Exclusive author interview</td>
                      <td></td>
                      <td></td>
                      <td>
                        <Icon.Check />
                      </td>
                      <td></td>
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
                      <td>
                        <Icon.Check />
                      </td>
                    </tr>
                    <tr>
                      <td>PBR homepage featured book of the month</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                    </tr>
                    <tr>
                      <td>PBR homepage top 5 reviews</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                    </tr>
                    <tr>
                      <td>
                        Review link for Amazon***, Barnes & Noble and more
                        listings
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
                      <td>
                        <Icon.Check />
                      </td>
                    </tr>
                    <tr>
                      <td>Review posting on PBR’s social media sites</td>
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
                      <td>Starred review</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                      <td>Eligible</td>
                    </tr>
                    <tr>
                      <td>
                        Cover Revision Inclusion with ARPress Gold Seal of
                        Excellence**
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
                      <td>Pacific Book Awards Nomination</td>
                      <td>Guaranteed</td>
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

export default PacificBookReviews;
