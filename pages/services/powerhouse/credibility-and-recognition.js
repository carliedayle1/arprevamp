import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import * as Icon from "react-feather";

const CredibilityAndRecognition = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  const pacificReviewBtnHandler = () => {
    router.push("/packages/pacific-book-reviews");
  };

  const usReviewBtnHandler = () => {
    router.push("/packages/us-book-reviews");
  };

  const hollywoodReviewBtnHandler = () => {
    router.push("/packages/hollywood-book-reviews");
  };

  return (
    <>
      <Head>
        <title>Credibility and Recognition</title>
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
                    <h2>Credibility and Recognition</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h4>Book Reviews</h4>

                <p style={{ marginTop: "1rem" }}>
                  Book reviews from credible publications help boost the
                  reputation of your book, thus influencing the market reception
                  of your work. Author Reputation Press has been working
                  hand-in-hand with reliable magazines and newspapers to build
                  recognition for our authors’ books by means of objective and
                  independent reviews.
                </p>
                <div style={{ marginTop: "2rem" }}>
                  <h5>Kirkus Reviews</h5>
                  <p style={{ marginTop: "1rem" }}>
                    Kirkus Reviews has been providing balanced reviews of a wide
                    variety of books for more than 85 years now. The magazine
                    has built its reputation as one of the reliable sources of
                    book reviews and recommendations delivered to consumers in a
                    weekly newsletter via email and on its website.
                  </p>
                  <p style={{ marginTop: "1rem" }}>
                    It operates a number of book review services including
                    Kirkus Indie for self-publishers. These reviews are also
                    eligible for publication on the Kirkus Indie monthly
                    eNewsletter, which highlights the best submissions to the
                    magazine and provides reliable recommendations to consumers.
                    The eNewsletter goes out to a targeted base of subscribers
                    including agents, editors, and librarians.
                  </p>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Pacific Book Review</h5>
                  <p style={{ marginTop: "1rem" }}>
                    Pacific Book Review provides quality book reviews both for
                    seasoned and budding authors. Its authoritative voice is
                    recognized by many publishers, authors, literary agents, and
                    media outlets who rely on objective reviews written by
                    authorities in different literary genre. Your work will be
                    featured as book of the month or one of the top 5 reviews on
                    PBR’s homepage, making it a perfect marketing material to
                    promote your book. Books are also automatically nominated to
                    the Pacific Book Awards, which recognizes various literary
                    works and acknowledges a book’s aesthetic appeal both in
                    cover design and content.
                  </p>
                  <button
                    className="btn btn-secondary"
                    onClick={pacificReviewBtnHandler}
                  >
                    View Pacific Review Book Packages
                  </button>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>US Review of Books</h5>
                  <p style={{ marginTop: "1rem" }}>
                    The US Review of Books consists of professional reviewers
                    and editors who welcome all books for analysis regardless of
                    their ideas. Book reviews are delivered to its subscribers
                    as part of its free monthly newsletter.
                  </p>
                  <p style={{ marginTop: "1rem" }}>
                    The publication also puts your book on its Featured Book
                    Reviews section on the USRB homepage, eligible for
                    submission to the Eric Hoffer Award. Established in 2005,
                    the literary award giving body recognizes “writing of
                    significant merit,” “salient writing,” and “independent
                    spirit of small publishers” as a tribute to American
                    philosopher Eric Hoffer.
                  </p>
                  <button
                    className="btn btn-secondary"
                    onClick={usReviewBtnHandler}
                  >
                    View US Review of Book Packages
                  </button>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Hollywood Book Review</h5>
                  <p style={{ marginTop: "1rem" }}>
                    Hollywood Book Review (HBR) is a major book review platform
                    that accommodates every book released regardless of the
                    publisher – small, large or independent. It is a reliable
                    outlet for getting your book noticed by a wide range of
                    audiences. HBR’s professional level constructive criticism
                    helps increase your work’s credibility.
                  </p>
                  <p style={{ marginTop: "1rem" }}>
                    Books reviewed by HBR are curated first based on their
                    quality and the reviews are distributed through a monthly
                    newsletter to industry professionals. What makes HBR’s book
                    reviews reliable is the unbiased views of its professional
                    reviewers who come from various fields of expertise, all
                    with a high level of literary and editorial skills.
                  </p>
                  <button
                    className="btn btn-secondary"
                    onClick={hollywoodReviewBtnHandler}
                  >
                    View Hollywood Book Review Packages
                  </button>
                </div>
                <hr />
                <div style={{ marginTop: "2rem" }}>
                  <Row>
                    <Col lg={3} md={2}>
                      <img src="/images/books/logo.png" alt="" />
                    </Col>
                    <Col lg={9} md={9}>
                      <p>
                        Give your book the distinction it deserves, because your
                        author brand is only as good as your masterpiece. The
                        Gold Seal by Author Reputation Press (ARP) is a
                        rubber-stamp for your book’s inclusion in our list of
                        titles representing the crème de la crème of the myriad
                        of books we publish. Printed on your book’s front cover,
                        the Gold Seal testifies to the excellent quality of your
                        work and sets it apart from the competition with a
                        superior brand of credibility. This distinction is given
                        only to books with a 5-star rating from a major book
                        review publication trusted by tens of thousands of
                        subscribers. As a seal of excellence, it also serves as
                        a perfect marketing tool to promote your book across a
                        wide range of audiences and build up your author brand
                        with unmatched reputation.
                      </p>
                    </Col>
                  </Row>
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

export default CredibilityAndRecognition;
