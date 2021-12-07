import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import * as Icon from "react-feather";

const PittsburgPost = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Pittsburgh Post - Gazette Ads</title>
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
                    <h2>Pittsburgh Post - Gazette Ads</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h4>
                  Delivers multiple advertising capabilities to a targeted
                  audience.
                </h4>

                <div className="features-area   ">
                  <h5 style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    Features
                  </h5>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                          <div className="icon">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>Pittsburgh Sunday and Daily Post Gazette</h6>
                          </h3>
                          <p>
                            1/2 Page Horizontal-The ad spot will be shared among
                            5 authors in dimension 10.25”x 9.79”.
                          </p>
                          <p>
                            1/4 Page Vertical-The ad spot will be shared among 2
                            authors in dimension 5.042” x 9.79”.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                          <div className="icon  bg-eb6b3d">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>Weekend Magazine</h6>
                          </h3>
                          <p>
                            1/2 Page Horizontal-The ad spot will be shared among
                            5 authors in dimension 10.25”x 9.79”.
                          </p>
                          <p>
                            1/4 Page Vertical-The ad spot will be shared among 2
                            authors in dimension 4.79” x 4.92”.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Learn More</h5>
                  <p>
                    Reach your target customer with custom ads in the daily
                    and/or Sunday issues of The Pittsburgh Post-Gazette print
                    edition. Target customers in the Pittsburgh DMA and within
                    the core of Downtown Pittsburgh and surrounding counties
                    with the printed edition of The Pittsburgh Post-Gazette
                  </p>
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

export default PittsburgPost;
