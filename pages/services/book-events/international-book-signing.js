import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const BookSigningInternational = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Book Signing - International | Services </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Book Events and Tours" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h2>Book Signing - International </h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h3>$3,999.00</h3>

                <h5 style={{ marginTop: "2rem" }}>
                  Boost Your Campaign With Book Signing
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Become a featured author in any of our book signing events
                  with a national reach of readers with whom you can interact in
                  person, plus the opportunity to promote your book to a wider
                  audience. Your book will also be displayed on posters and ad
                  materials during the event.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ marginTop: "1rem" }}>
                    Our Book Signing – National package includes the following
                    services:
                  </h5>
                  <ul>
                    <li>
                      <h6>1-hour Book Signing Slot</h6>
                    </li>
                    <li>
                      <h6>1 Print title on display</h6>
                    </li>
                    <li>
                      <h6>100 books marked at $10 each</h6>
                    </li>
                    <li>
                      <h6>Book Signing Badge</h6>
                    </li>
                    <li>
                      <h6>Inclusion of your book in the show catalog</h6>
                    </li>
                    <li>
                      <h6>
                        Shipping and storage of the books to the show site
                      </h6>
                    </li>
                    <li>
                      <h6>
                        Announcement of the autographing in pre-show mailing to
                        local librarians
                      </h6>
                    </li>
                    <li>
                      <h6>Onsite Poster at the fair announcing the signing</h6>
                    </li>
                    <li>
                      <h6>Media Release Campaign – 2,000 Channels (US only)</h6>
                    </li>
                    <li>
                      <h6>ARP Website feature</h6>
                    </li>
                    <li>
                      <h6>ARP Social Media feature</h6>
                    </li>
                  </ul>
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

export default BookSigningInternational;
