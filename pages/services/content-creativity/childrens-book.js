import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";

const ChildrensBook = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Children's Book Packages | Services </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Content and Creativity" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h2>Children's Book Packages</h2>
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
                  Tickle The Young Minds With One Of The Industry's Reliable
                  Children's Book Publishers
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  As one of the reliable children’s book publishers in the
                  industry, Author Reputation Press gives authors the
                  opportunity to work with a seasoned publishing specialist who
                  focuses on this genre. Our book editor will help you create a
                  compelling story regardless of what theme your book is about.
                  In addition, our resident artist will create illustrations for
                  your book that will bring it to life. Author Reputation Press
                  will also handle the whole publishing process, from the cover
                  design and interior layout to the final product and
                  distribution. Call one of our consultants today to get your
                  children’s book published.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Children’s books not only help tickle the imagination of kids,
                  they also play a vital role in nurturing their vocabulary and
                  language skills. Bearing this in mind will do authors good as
                  they tell their story to kids through text and illustrations.
                  On top of those considerations, spicing up your book with
                  humor is a sure way to pick up steam in this segment.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  However, those are only initial steps of the whole process.
                  Creating an attractive cover design, doing proper planning,
                  and formulating an effective marketing strategy are equally
                  important for your book’s success. At Author Reputation Press,
                  we’ve got you covered. Sift through our children’s book
                  packages below to choose the best option for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="pricing-area  pb-50 ">
        <div className="container">
          <div className="section-title">
            <h4>
              Choose From Our Range Of Children's Book Publishing Packages
            </h4>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>Seuss</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>2,599 <span></span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">Ebook</li>
                    <li className="active">Paperback</li>
                    <li className="active">Hardcover</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="/packages/seuss">
                    <a className="btn btn-primary">More Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table ">
                <div className="pricing-header ">
                  <h3>Barrie</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>3,999 <span></span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">Ebook</li>
                    <li className="active">Paperback</li>
                    <li className="active">Hardcover</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="/packages/barrie">
                    <a className="btn btn-primary">More Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>Lewis</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>5,999 <span></span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">Ebook</li>
                    <li className="active">Paperback</li>
                    <li className="active">Hardcover</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="/packages/lewis">
                    <a className="btn btn-primary">More Details</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape8 rotateme">
          <img src="/images/shape2.svg" alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src="/images/shape2.svg" alt="shape" />
        </div>
        <div className="shape7">
          <img src="/images/shape4.svg" alt="shape" />
        </div>
        <div className="shape4">
          <img src="/images/shape4.svg" alt="shape" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ChildrensBook;
