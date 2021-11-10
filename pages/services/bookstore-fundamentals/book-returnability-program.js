import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";

const BookReturnability = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Book Returnability Program | Services </title>
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
                    <h2>Book Returnability Program</h2>
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
                  Grow Your Presence on Physical Bookstores with Book
                  Returnability
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Our Book Returnability Program makes it easier for your book
                  to be accepted by booksellers and earn a shelf space on
                  bookstores. By signing up for this program, you allow us to
                  designate your book as “Returnable” through Ingram and Baker &
                  Taylor. Note that returnability does not guarantee that a
                  particular bookstore will order and stock your title, but it
                  is a sure way no bookseller will hesitate to put your book on
                  their shelves.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Bookstores expect to be able to return books that don’t sell
                  and receive credit for them. This is called Bookstore
                  Returnability Program, where bookstores buy two or three
                  copies first of your book in order to assess whether it will
                  sell before buying multiple copies outright. Bookstores are
                  more likely to buy your book if it is certified as returnable.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Convincing bookstores to sell your book is one of the
                  challenges many independent authors face. Competing for a
                  space on bookstore shelves is a race often won by popular
                  authors. One factor book shops consider when carrying a book
                  is the assurance that a marketing strategy is in place to move
                  your book into the market.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Otherwise, booksellers will also look at your book’s
                  returnability. It has served many independent authors in terms
                  of convincing book shops to place their books on the shelves.
                </p>

                <h5 style={{ marginTop: "2rem" }}>
                  The Author Reputation Press Bookstore Returnability Program
                  (BRP)
                </h5>

                <p style={{ marginTop: "1rem" }}>
                  The Bookstore Returnability Program has helped many authors
                  address a major obstacle they typically face when getting
                  their book on bookstore shelves. This program provides some
                  sort of insurance for bookstores. When your book becomes
                  returnable through Ingram, bookstores will order and sell your
                  work under a program that protects their investment in your
                  book. This removes any worries over what to do with your
                  unsold copies as BRP ensures they can return your book and get
                  back what they have invested in it.
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

export default BookReturnability;
