import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const Inside = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Inside the Vatican Ads</title>
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
                    <h2>Inside the Vatican Ads</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h4>Inside the Vatican Ads for Catholic Authors</h4>

                <div style={{ marginTop: "2rem" }}>
                  <h5>About Inside the Vatican</h5>
                  <p style={{ marginTop: "1rem" }}>
                    Inside the Vatican is an independent and comprehensive
                    magazine reporting on the Catholic Church and everything
                    inside the Vatican. It publishes 10 issues every year for
                    its paying subscribers.
                  </p>

                  <p style={{ marginTop: "1rem" }}>
                    Its global publication reaches around 100,000 Catholic and
                    non-Catholic readers across the United States, Canada,
                    Australia, India, Italy, UK, Europe, and Asia. For its
                    scope, the magazine is the largest source of Catholic news.
                  </p>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <h5>Reach Key Audiences</h5>
                  <p style={{ marginTop: "1rem" }}>
                    Advertise with Inside the Vatican to reach key individuals
                    and public figures that play a major role in various
                    decision-making processes inside the Church.
                  </p>
                  <p style={{ marginTop: "1rem" }}>
                    The magazine’s audiences include The Pope, Vatican
                    officials, cardinals and bishops worldwide, embassies to the
                    Holy See, U.S. State Department, and Catholic decision
                    makers in politics and businesses. Its global appeal ensures
                    that your ad reaches a variety of audiences.
                  </p>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Our Movie Script Coverage Features</h5>
                  <p style={{ marginTop: "1rem" }}>
                    A carefully written summary of your work showcasing its
                    characters and plot Comments about the strengths and
                    weaknesses of your book as a factor for consideration of
                    your work’s potential movie or TV adaptation US Copyright
                    Office application to grant you full ownership of your
                    coverage, including those conducted during your pitch
                    appointments
                  </p>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Marketing Strategy</h5>
                  <p style={{ marginTop: "1rem" }}>
                    Our turnkey marketing service allows authors to choose to
                    have their ad placed on a single issue of the magazine in a
                    given month or on all 10 issues published all throughout a
                    year for a lower monthly cost.
                  </p>
                  <h6>This Package Includes The Following Services:</h6>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Objectives </h5>

                  <h6>Our Movie Screenplay Package Includes:</h6>
                  <ul>
                    <li>
                      The ad aims to promote your book to Catholic readers
                      including church leaders
                    </li>
                    <li>
                      The magazine will adjust the release of your ads based on
                      its current publication theme
                    </li>
                    <li>The ad educates the buyer about your story</li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Features </h5>
                  <ul>
                    <li>Free in-house ad design</li>
                    <li>Custom layout and placement for the ad</li>
                    <li>
                      Ad insert on the physical copy of the magazine and online
                      appearance
                    </li>
                    <li>Full color for all ads</li>
                    <li>Email blast to exclusive readers</li>
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

export default Inside;
