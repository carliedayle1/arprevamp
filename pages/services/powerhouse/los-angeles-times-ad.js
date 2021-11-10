import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Table, Row, Col } from "react-bootstrap";
import Image from "next/image";
import * as Icon from "react-feather";
import Link from "next/link";

const LosAngelesTimesAd = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Los Angeles Times Ad Opportunity</title>
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
                    <h2>Los Angeles Times Ad Opportunity</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h5>Trusted. Credible. Ambitious.</h5>
                <p style={{ marginTop: "1rem" }}>
                  The publication is the largest metropolitan daily newspaper in
                  the country. They reach distinct, affluent and diverse
                  audiences of multiple generations, demographics, preferences
                  and interests.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  LA Times brings truth to power through creative storytelling,
                  original reporting and accountability journalism that impacts
                  lives and pushes change. They have 1.2 million daily print
                  readers and 1.7 million Sunday print readers in the U.S.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  The Pulitzer Prize-winning Times has been covering Southern
                  California for more than 139 years.
                </p>

                <div
                  className="features-area"
                  style={{ marginTop: "2rem", marginBottom: "2rem" }}
                >
                  <div className="container">
                    <h4>Features</h4>
                    <div className="row">
                      <div className="col-lg-4 col-md-4">
                        <div className="single-features">
                          <div className="icon">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>1/8 PAGE</h6>
                          </h3>
                          <p>
                            Shared by 2 authors. The ad measures 4.92″ x 5.25″
                            and occupies three columns of the magazine.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4">
                        <div className="single-features">
                          <div className="icon  bg-eb6b3d">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>Full Page</h6>
                          </h3>
                          <p>
                            Shared by 12 authors. The ad measures 10″ x 21.5″
                            and occupies six columns of the magazine.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4">
                        <div className="single-features">
                          <div className="icon bg-c679e3">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>Proof of Copy</h6>
                          </h3>
                          <p>
                            LA Times will send an electronic version of the
                            magazine to the authors; The arts and book sections
                            run every Sunday.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5>Benefits</h5>
                      <p>
                        Print advertising has a higher frequency opportunity of
                        viewing than online ads. Since the newspaper or magazine
                        may sit on a table or rack at a business or home,
                        repeated exposures are allowed. Flyers, brochures, and
                        other physical pieces are often reviewed multiple, times
                        and shared with other prospects. Unlike digital
                        messaging, print media does not disappear after
                        generating an impression. It piles up, creates clutter,
                        and is thereby reviewed once more, even before recycling
                        or discarding. Because of this long shelf life, you can
                        benefits from having your ad seen by more people more
                        often.
                      </p>
                    </div>
                  </div>
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

export default LosAngelesTimesAd;
