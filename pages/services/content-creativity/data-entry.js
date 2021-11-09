import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";

const DataEntry = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Data Entry | Services </title>
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
                    <h2>Data Entry</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h3>$0.011/Word</h3>

                <h5 style={{ marginTop: "2rem" }}>
                  We Offer Reliable Data Entry Services
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Converting your manuscript into a digital file that’s ready
                  for publication is a key step in publishing your book.
                  Sometimes, however, the task can be daunting especially if
                  your work spans several hundreds of pages. At Author
                  Reputation Press, we offer affordable data entry services to
                  our customers as they realize their dream of becoming a
                  published author.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  This service aims to help authors turn their manuscripts into
                  an electronic format. Our typist offers a reliable and fast
                  service while also providing a high level of accuracy.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Our data entry process:</h5>
                  <ul>
                    <li>
                      <h6>
                        Submit a copy of your manuscript to Author Reputation
                        Press through email with no edits or mark of any sort.
                        You can edit the digital version of your manuscript
                        after this step.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        We will check the material for errors in data and
                        spelling.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        You will receive a copy of your manuscript via email in
                        .doc format (MS Word) with instructions on how to review
                        the material against the original version.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        We will give you time to edit the material and make
                        necessary changes to its formatting.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        After reviewing the material, send the manuscript back
                        to us in order to start the publishing process.
                      </h6>
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Our Data Entry Service Includes:</h5>
                  <ul>
                    <li>
                      <h6>Image/PDF to Word conversion</h6>
                    </li>
                    <li>
                      <h6>Image/PDF to Excel conversion</h6>
                    </li>
                    <li>
                      <h6>Data sorting</h6>
                    </li>
                    <li>
                      <h6>Data typing</h6>
                    </li>
                    <li>
                      <h6>Web research</h6>
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

export default DataEntry;
