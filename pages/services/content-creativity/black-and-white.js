import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";

const BlackAndWhite = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Black and White | Services </title>
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
                    <h2>Black and White</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>

                <h5>Custom Print Your Book With Our Black and White Package</h5>
                <p style={{ marginTop: "1rem" }}>
                  The route to self-publishing is often a tricky path. Authors
                  who are new to this approach may face a number of daunting
                  challenges including the costs and requirements for launching
                  their first book. On the other hand, self-publishing authors
                  who have been in the business for quite some time may have
                  already known their way around this course of action.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Our Black & White publishing service offers the most
                  affordable packages for turning your manuscript into print.
                  It’s ideal for novels, short stories, poetry collections,
                  memoirs, essays, and other plain text books.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="pricing-area  pb-50 ">
        <div className="container">
          <div className="section-title">
            <h4>Choose From Our Range Of Black & White Publishing Packages</h4>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>Aristotle</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>1,199 <span></span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">Paperback</li>
                    <li className="active"> E-book</li>
                    <li className="active">
                      Standard Text & Layout Formatting
                    </li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="/packages/aristotle">
                    <a className="btn btn-primary">More Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table ">
                <div className="pricing-header ">
                  <h3>Plato</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>2,100 <span></span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">Paperback</li>
                    <li className="active">Hardback</li>
                    <li className="active">Ebook</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="/packages/plato">
                    <a className="btn btn-primary">More Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>Socrates</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>3,100 <span></span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">Paperback</li>
                    <li className="active">Hardback</li>
                    <li className="active">Ebook</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="/packages/socrates">
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

export default BlackAndWhite;
