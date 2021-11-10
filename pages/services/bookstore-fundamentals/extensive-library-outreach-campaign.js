import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";

const ExtensiveLibrary = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Extensive Library Outreach Campaign | Services </title>
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
                    <h2>Extensive Library Outreach Campaign</h2>
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
                  Grow Your Book's Reach With Our Library Outreach Program
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  As a marketing platform, libraries hold the same level of
                  effectiveness as digital and traditional media platforms.
                  These places are the haunt of your existing and potential
                  consumers – the book lovers out there. Your book has a higher
                  chance of getting picked up and read when they are placed in
                  libraries through a library outreach program.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Author Reputation Press has an extensive network of partner
                  libraries to house your masterpieces and make them easily
                  available to book lovers who are already willing to spend
                  hours reading your book, thus saving you time and effort for
                  marketing. Our Extensive Library Outreach Campaign offers the
                  following services:
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <ul>
                    <li>
                      <h6>
                        Guaranteed extensive pitch of your book to an average of
                        3000 Collection Development Departments and Acquisition
                        Librarians nationwide (with a focus on your local area
                        or state) for six months
                      </h6>
                    </li>
                    <li>
                      <h6>
                        Book Feature on Ingram Spotlight Ad for Librarian News &
                        Reviews
                      </h6>
                    </li>
                    <li>
                      <h6>Book assessment from an average of 50 librarians</h6>
                    </li>
                    <li>
                      <h6>
                        Book display and catalog listing on the next available
                        National Book Fair
                      </h6>
                    </li>
                    <li>
                      <h6>Bookstore Returnability Program for 24 months</h6>
                    </li>
                  </ul>
                </div>

                <p style={{ marginTop: "1rem" }}>
                  Our expert team of writers will create a pitch that showcases
                  your book’s appeal to readers from all walks of life and
                  distribute this pitch to our partner libraries depending on
                  your region of choice. These libraries will then evaluate your
                  book to make it more credible and legitimate, giving your work
                  a higher level of recognition in the market.
                </p>
                <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
                  Note: The book should already be available on the market
                  before the campaign starts. It should have a rating score of
                  4.2 or higher from at least 5 different reviews to become
                  eligible for this service. If your book cannot meet the
                  criteria, we cannot guarantee the library will buy a copy.
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

export default ExtensiveLibrary;
