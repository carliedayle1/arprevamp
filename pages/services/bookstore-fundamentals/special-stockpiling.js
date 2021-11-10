import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";

const SpecialStockpiling = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Special Stockpiling | Services </title>
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
                    <h2>Special Stockpiling</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>

                <h5 style={{ marginTop: "2rem" }}>
                  Expand the market reach of your book
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Our Special Stockpiling service helps ensure your book gets
                  stocked in bookstores including independent book shops. This
                  makes your title easily accessible to readers and academic
                  institutions alike, increasing the discoverability of your
                  work.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  While digital platforms have become a popular channel for
                  publishing among authors, a presence in physical bookstores
                  and libraries remains the holy grail for most writers. Seeing
                  one’s title in bookshelves reaffirms an author’s bona fide
                  status. However, pitching a title to bookstores can be a
                  daunting task for authors as booksellers take into
                  consideration a book’s marketability, returnability, and
                  quality.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  With our Special Stockpiling service, Author Reputation Press
                  helps authors break the barriers to getting their books into
                  brick-and-mortar bookstores. Here’s how it works:
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <ol>
                    <li>
                      <h6>
                        Authors* who have already published a book with ARP may
                        call the company to avail of the Special Stockpiling
                        service.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        ARP will pitch the book to partner brick-and-mortar
                        bookstores** for guaranteed placement.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        The books*** will be shipped to our partner bookstores,
                        with the author taking responsibility for the shipping
                        and other related costs.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        Three copies of a particular title will be slated for
                        shipping at first, with a guarantee for more copies
                        going forward.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        Once received by the bookstore, the books will be put on
                        display and the bookseller will get 10% of the revenue
                        while the author receives a 90% share.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        Sales period for the books will last up to 12 months.
                        For the unsold copies, the author has two options:
                      </h6>
                      <ul style={{ paddingLeft: "2rem" }}>
                        <li>
                          Allow the bookstore to donate the unsold inventory, or
                        </li>
                        <li>
                          Have the books shipped back at the author’s own
                          expense.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <p style={{ marginTop: "1rem", fontStyle: "italic" }}>Notes:</p>
                <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
                  *Eligible authors are only those who have previously published
                  a book(s) with ARP.
                </p>
                <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
                  **Our partner bookstores for the Special Stockpiling service
                  are located in the U.S. only.
                </p>
                <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
                  ***A minimum order of 1000 copies will be guaranteed per
                  title.
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

export default SpecialStockpiling;
