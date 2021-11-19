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
        <title>US Review Of Books</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="US Review Of Books" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>US Review Of Books</h2>
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
                The US Review of Books helps bolster your credibility as an
                author.
              </h4>
              <p style={{ marginTop: "1rem" }}>
                The US Review of Books (USRB) reviews all qualified books
                published and discriminates no work based on its author or
                publisher. Thus, both self-published and traditionally published
                books receive the same level of treatment, providing them with
                an impartial and credible review that helps boost their
                competitiveness.
              </p>
              <p style={{ marginTop: "1rem" }}>
                One of the many ways the US Review of Books differs from other
                online journals is that it cultivates professional book
                reviewing expertise. Each reviewer, located around the United
                States, contributes a distinct voice while adhering to the tight
                rules listed beneath our newspaper header. Many of our reviewers
                and editors are included below, along with their contact
                information. Reviews are an excellent indicator of a book’s
                quality, meaning, and relevance. Work reviews assist to spread
                the word and generate interest in a book. Reviews also spread
                the word about the author, encouraging readers to read more of
                their books.
              </p>

              <p style={{ marginTop: "1rem" }}>
                USRB also increases your work’s visibility by including the
                reviews in its recent reviews page and newsletter distributed to
                more than 18,000 subscribers, plus an exposure to its social
                media followers. Turnaround time for review is 3-4 weeks after
                receiving a copy of the book under the Premium service and 10
                days under the Platinum Express Plus service.
              </p>

              <div style={{ marginTop: "2rem" }}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th></th>
                      <th>USRB Premium</th>
                      <th>USRB Platinum Express Plus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cover and Book Link</td>
                      <td>
                        <Icon.Check />
                      </td>
                      <td>
                        <Icon.Check />
                      </td>
                    </tr>
                    <tr>
                      <td>Feature Display</td>
                      <td>
                        <Icon.Check />
                      </td>
                      <td>
                        <Icon.Check />
                      </td>
                    </tr>
                    <tr>
                      <td>Banner Display</td>
                      <td>
                        <Icon.Check />
                      </td>
                      <td>
                        <Icon.Check />
                      </td>
                    </tr>
                    <tr>
                      <td>Social Media</td>
                      <td>
                        <Icon.Check />
                      </td>
                      <td>
                        <Icon.Check />
                      </td>
                    </tr>
                    <tr>
                      <td>Extended Article</td>
                      <td></td>
                      <td>
                        <Icon.Check />
                      </td>
                    </tr>
                    <tr>
                      <td>ARPress Gold Seal of Excellence Sticker</td>
                      <td>
                        <Icon.Check />
                      </td>
                      <td>
                        <Icon.Check />
                      </td>
                    </tr>
                    <tr>
                      <td>Eric Hoffer nomination</td>
                      <td>
                        <Icon.Check />
                      </td>
                      <td>
                        <Icon.Check />
                      </td>
                    </tr>
                    <tr>
                      <td>USRB Newsletter and Listing</td>
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

      <Footer />
    </>
  );
};

export default HollywoodBookReviews;
