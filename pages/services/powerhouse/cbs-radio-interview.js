import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const CBSRadioInterview = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>CBS Radio Interview on People of Distinction</title>
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
                    <h2>CBS Radio Interview on People of Distinction</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h4>Reach More Readers With CBS Radio Interview</h4>
                <p style={{ marginTop: "1rem" }}>
                  Become a distinguished guest of one of the most sought after
                  radio programs in the United States with CBS Radio Interview.
                  The radio show is managed by Al Cole Enterprises with a vast
                  network of well-known personalities including The Huffington
                  Post Founder Arianna Huffington. Hosted by Benji Cole and Al
                  Cole from CBS Radio, People of Distinction is the right fit
                  for authors who want to increase their exposure to readers.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  People Of Distinction, one of the most extensive and
                  wide-ranging radio shows in the United States, offers high
                  market visibility to authors, thanks to Arianna Huffington’s
                  Thrive Global Network, which draws millions of audiences. The
                  radio program airs on Apple’s iTunes Radio Network
                  (Professional News/Talk) featuring CBS Radio, Fox News, NPR,
                  and C-Span.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5>How It Works:</h5>
                  <ol>
                    <li style={{ marginTop: "1rem" }}>
                      An author, published by Author Reputation Press, will join
                      the radio program in a recorded interview. It will air on
                      Apple’s iTunes Radio Network (Professional News/Talk)
                      featuring CBS Radio, Fox News, NPR, and C-Span. Also,
                      listeners can listen to each interview at its individual
                      airing time through this web page:
                      <a
                        href="https://peopleofdistinction.org/itunes-radio/"
                        target="_blank"
                      >
                        https://peopleofdistinction.org/itunes-radio/
                      </a>
                    </li>
                    <li style={{ marginTop: "1rem" }}>
                      The author will be provided a copy of the recorded
                      interview in MP3 format within four days of recording.
                      Each interview will be aired within seven days of
                      recording at 8 PM (ET) of any particular day.
                    </li>
                    <li style={{ marginTop: "1rem" }}>
                      Authors can choose a schedule for the interview from four
                      options provided by Author Reputation Press: Wednesday and
                      Thursday from 1 PM through 8 PM (ET). People of
                      Distinction’s staff will then determine the best time for
                      a particular author. Interviews will be recorded via Skype
                      or through one of the program’s phone call-in lines.
                    </li>
                  </ol>
                  <p>
                    Over the past several years, this platform has already
                    interviewed 2,000 of America’s top interesting personalities
                    on his nationally syndicated talk show such as NBC producer
                    Ken Corday and former CBS Morning News anchor Bill Kurtis.
                    Coupled with CBS’ influence and vast reach across the
                    country, authors who get a shot at this radio interview
                    program will definitely reach millions of listeners who may
                    potentially convert into book buyers.
                  </p>
                  <p>
                    Be the next elite guest on People of Distinction today and
                    never miss the opportunity to present your book to the
                    world.
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

export default CBSRadioInterview;
