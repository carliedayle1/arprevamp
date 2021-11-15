import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Table, Row, Col } from "react-bootstrap";
import * as Icon from "react-feather";

const AdvancedRadioInterview = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Advance Radio Interview</title>
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
                    <h2>Advance Radio Interview</h2>
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
                  Choose The Most Extensive Radio Interview Platform for Your
                  Book Marketing Campaign
                </h4>
                <p style={{ marginTop: "1rem" }}>
                  More than three million audiences all over the United States
                  are waiting to hear about your book, courtesy of Kate Delaney
                  – an Emmy-award winning journalist. Delaney’s radio program
                  reaches a wide array of listeners from all walks of life,
                  providing your book with a great opportunity to reach millions
                  of households across the country.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  For over 20 years, Delaney has interviewed almost all types of
                  high-profile individuals from former U.S. President George W.
                  Bush and former Vice Presidents Joe Biden and Dick Cheney to
                  famous sports personalities including LeBron James and
                  Hollywood stars Taylor Swift, Sandra Bullock, and Adam
                  Sandler, to name only a few.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Delaney is a seasoned radio broadcaster and a motivational
                  speaker. She hosts “America Tonight” and two nationally
                  syndicated radio shows every week, namely “The Kate Delaney
                  Show” on the NBC Sports Radio Network and a feature program
                  for ForbesBooks featuring successful business leaders.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Steps for the Radio Interview</h5>
                  <ol>
                    <li>Pre-interview coaching</li>
                    <p style={{ marginTop: "1rem" }}>
                      Prior to the actual interview, Delaney will coach you with
                      the right materials and techniques to quickly capture the
                      attention of listeners. Delaney will provide instructions
                      on the proper ways of presenting your ideas and you can’t
                      miss hitting the right audience for your book.
                    </p>
                    <li>Two-week live book-reading with 10 book commercials</li>
                    <p style={{ marginTop: "1rem" }}>
                      Before finally speaking with Delaney, her radio program
                      will also run announcements for your book across 210
                      stations with more than three million listeners. The
                      teaser will run for two weeks with an accompanying set of
                      10 commercials to drum up interest for your book.
                    </p>
                    <li>Interview Proper</li>
                    <p style={{ marginTop: "1rem" }}>
                      Finally, you will be on air with Delaney following those
                      pre-interview promotions. At this stage, you will have the
                      chance to promote your book on a deeper, personal level,
                      talking directly to your potential readers using the
                      techniques Delaney has taught you. A recorded interview is
                      recommended in order to calibrate the full show before
                      making it live on air. You can also choose the best time
                      for the interview to fit your schedule. Alternatively,
                      Delaney conducts a live interview from 9:15 PM to 11:15 PM
                      Pacific Time.
                    </p>
                  </ol>
                  <p>
                    After speaking with Delaney, your radio interview will be
                    distributed across different digital platforms in
                    collaboration with our several media partners. You will also
                    be asked to provide your social media accounts and pages or
                    websites for a more comprehensive online publicity campaign.
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

export default AdvancedRadioInterview;
