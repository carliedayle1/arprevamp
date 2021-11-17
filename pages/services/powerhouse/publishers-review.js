import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";
import * as Icon from "react-feather";

const PublishersReview = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Publisher's Review</title>
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
                    <h2>Publisher's Review</h2>
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
                  Professional reviews lend more credibility to your book and
                  influence the buying decision of readers who depend on them to
                  pick what books are worth their money and time. When they see
                  numerous reviews for a book, they tend to invest more in it.
                  If the reviews are particularly convincing, readers browsing
                  through Amazon or Barnes & Noble might buy the book simply
                  from reading these recommendations.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  On top of credibility, reviews can make your books more
                  discoverable in online searches, thus improving the way Amazon
                  recommends your book. Many authors are unaware that reviews
                  play a key function in Amazon’s algorithm: the more reviews
                  your book has, the more likely Amazon will recommend it. The
                  more positive online reviews your book receives, the higher it
                  will be ranked on the charts and the more readers will see it.
                  This can give a huge boost to your book sales.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Aside from readers, booksellers and librarians rely on reviews
                  to decide what books to stock. They often prefer reviews from
                  mainstream media, publications, and the publishers themselves.
                  A review that gives a positive feedback for your book and
                  credited to a well-known source will catch a bookseller’s
                  attention.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Positive reviews, in particular, can reassure anyone who
                  stumbles upon your book on Amazon or a physical bookstore that
                  what they are about to purchase is worth their investment.
                  Combined with effective sales pitch, book reviews
                </p>
                <hr />
                <h4>How The Publisher's Review Can Help You Sell More Books</h4>
                <div style={{ marginTop: "2rem" }}>
                  <h5>We Will Add The Review To Your ARP Bookstore Listing</h5>
                  <p>
                    Our online bookstore has a section dedicated to book
                    reviews. The Publisher’s Review will be posted there so that
                    the more professional reviews your book has, the more
                    seriously readers will take your work.
                  </p>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <h5>The Review Will Be Included In Your New Book Cover</h5>
                  <p>
                    We will update your book cover for free as well as ebook
                    files to include our review. An excerpt from this review
                    will be posted on the front or back cover of your book in
                    order to catch the eye of potential buyers.
                  </p>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>
                    We Will Include Book Reviews On Your Book's Amazon And
                    Barnes & Noble Listings
                  </h5>
                  <p>
                    Both Amazon and Barnes & Noble have designated areas for
                    reviews. These are equally important to let readers know
                    immediately that your book has been professionally reviewed.
                  </p>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Incorporate Reviews Into Your Social Media Campaigns</h5>
                  <p>
                    Sharing your book review on our Facebook page and Twitter
                    profile is another way to spread word about your book and
                    how critically acclaimed it is. You can do the same, too, by
                    posting links and using engaging images in your posts.
                  </p>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ textAlign: "center" }}>
                    Our Publisher's Review service includes two tiers with
                    different prices depending on the length of fulfillment
                    time. Please see the details in the table below:
                  </h5>
                </div>

                <div
                  className="row justify-content-center"
                  style={{ marginTop: "2rem" }}
                >
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <h3>Standard</h3>
                        <p>Package</p>
                      </div>

                      <ul
                        className="pricing-features"
                        style={{ marginTop: "2rem" }}
                      >
                        <li>
                          <Icon.Check /> Free Cover Revision
                        </li>
                        <li>
                          <Icon.Check /> ARP Bookstore Posting
                        </li>
                        <li>
                          <Icon.Check /> Amazon and Barnes & Noble posting
                        </li>
                        <li>
                          <Icon.Check /> Blog Post Distribution
                        </li>
                        <li>
                          <Icon.Check /> Social Media Distribution
                        </li>
                        <li>
                          <Icon.Check /> Fulfillment Time 4-5 Weeks
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="pricing-box">
                      <div className="pricing-header">
                        <h3>Express</h3>
                        <p>Package</p>
                      </div>

                      <ul
                        className="pricing-features"
                        style={{ marginTop: "2rem" }}
                      >
                        <li>
                          <Icon.Check /> Free Cover Revision
                        </li>
                        <li>
                          <Icon.Check /> ARP Bookstore Posting
                        </li>
                        <li>
                          <Icon.Check /> Amazon and Barnes & Noble Posting
                        </li>
                        <li>
                          <Icon.Check /> Blog Post Distribution
                        </li>
                        <li>
                          <Icon.Check /> Social Media Distribution
                        </li>
                        <li>
                          <Icon.Check /> Fulfillment Time 2-3 Weeks
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p style={{ fontStyle: "italic", marginTop: "2rem" }}>
                  Note: You can enjoy up to 54% discount on the Standard package
                  and 58% on the Express package if you avail any of our black &
                  white, full color, and children’s book publishing bundles.
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

export default PublishersReview;
