import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Table, Row, Col } from "react-bootstrap";
import Image from "next/image";
import * as Icon from "react-feather";

const AuthorSpotlight = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Author Spotlight Full Production</title>
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
                    <h2>Author Spotlight Full Production</h2>
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
                  Advance Your Career With Author Spotlight Full Production
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Grow your career and see your author brand soar to the next
                  level with our Author Spotlight Full Production. This powerful
                  marketing service gives you the platform to let people learn
                  more about your work through a recorded video in collaboration
                  with our professional producer and videographer. We will
                  prepare a set of questions and you can answer them on camera.
                  Our team will coach you as well to ensure a smooth flow.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  A videographer will be assigned to record your interview and
                  take some b-roll. The footage will undergo professional
                  editing by one of our expert video editors to produce a final
                  clip that runs from 2 to 4 minutes.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Author Spotlight Inclusions: video editing, script writing,
                  data gathering, advanced product.
                </p>

                <div style={{ marginTop: "1rem" }}>
                  <ul>
                    <li>
                      <h6>
                        The video can be formatted for TV or movie production so
                        it can be used according to the material required by the
                        author.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        The author may attend an event or run his/her own. We
                        will make the necessary promotional campaign by
                        highlighting you and your group or doing a sizzle reel.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        We will distribute the video material to 10+ video
                        sharing sites including YouTube and DailyMotion.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        This service comes with two rounds of edit at no extra
                        cost.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        You will keep the copyright licenses to your video
                        production.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        A web link to the final product will be made available
                        for sharing with your contacts and network.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        We will be posting on your Author Personal Website as
                        part of this package.
                      </h6>
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h6>Disclaimer:</h6>
                  <p>
                    The Price indicated applies to interviews within the
                    metropolitan area only, additional travel tax may incur for
                    areas outside the metropolitan parts of each state, 10 miles
                    away from our partner’s studio, and particularly interviews
                    to be shot in the UK, Australia & Canada.If you intend to be
                    filmed in a public place, you must be able to secure a
                    release for the location before video can be recorded there.
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

export default AuthorSpotlight;
