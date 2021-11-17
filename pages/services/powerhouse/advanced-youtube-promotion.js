import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";

const AdvancedYoutubePromotion = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Advanced Youtube Promotion</title>
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
                    <h2>Advanced Youtube Promotion</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h4>The Best Tool To Promote YouTube Videos</h4>
                <p style={{ marginTop: "1rem" }}>
                  Independently published books need more than just traditional
                  media channels for promotion. With the onslaught of online
                  platforms, content now holds sway over the success of your
                  book. Therefore, It makes perfect sense more than ever to
                  consider mainstream web services when looking for marketing
                  channels, such as YouTube promotion.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Video sharing websites like YouTube play a key role in online
                  marketing. With 2 billion users worldwide, YouTube is the best
                  platform to give your book a wide exposure across a vast range
                  of audiences.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  YouTube’s user engagement far more outruns any other social
                  platforms as people actively search for content, unlike other
                  social media where users merely scrolling down the feed of
                  information. With YouTube, authors are more likely to capture
                  the reader’s attention than they would in other platforms.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Why this service?</h5>

                  <p>
                    There are hundreds of ways to get more views on YouTube, but
                    ours is the fastest. Boost the number of views for your
                    video in as early as five days and be recognized by tens of
                    thousands of audiences on YouTube.
                  </p>
                  <p>
                    This service is guaranteed as it relies on Google Adwords,
                    the only trusted and legitimate tool for promoting videos on
                    YouTube. Adwords will position your video in places where
                    people search for content related to your book.
                  </p>
                </div>

                <Row style={{ marginTop: "2rem" }}>
                  <Col lg={4} md={4}>
                    <h5>Organic Views</h5>
                    <p>
                      We don't use bots. Apart from being guaranteed, our
                      YouTube views are genuine. We use YouTube's official video
                      advertising platform to promote your videos and make them
                      viral.
                    </p>
                  </Col>
                  <Col lg={4} md={4}>
                    <h5>Smart Targeting</h5>
                    <p>
                      We deliver only quality views. We customize how your
                      videos are distributed based on your book's genre and
                      other related parameters in order to target only the right
                      viewers.
                    </p>
                  </Col>
                  <Col lg={4} md={4}>
                    <h5>Fast Delivery</h5>
                    <p>
                      Our video promotions go live on YouTube within two days
                      after approval by Google. Your YouTube campaign will then
                      start picking up speed during the campaign period.
                    </p>
                  </Col>
                </Row>

                <div style={{ marginTop: "2rem" }}>
                  <h5>How it Works</h5>
                  <div style={{ marginTop: "2rem" }}>
                    <h6>Choose your target viewers</h6>
                    <p>
                      On top of growing your presence on You Tube, you can reach
                      the right people for your videos unproductive video
                      distribution and invest on getting quality views from real
                      people. You can specify the types of audiences for your
                      video with the following parameters:
                    </p>
                    <ul>
                      <li>Region/country</li>
                      <li>Age</li>
                      <li>Gender</li>
                      <li>Interest</li>
                    </ul>
                  </div>

                  <div style={{ marginTop: "2rem" }}>
                    <h6>We use Google Ads</h6>
                    <p>
                      You never have to worry about fake views and getting your
                      videos suspended. This service guarantees real, organic
                      views using Google Ads, the only trusted method for
                      promoting videos on YouTube.
                    </p>
                  </div>

                  <div style={{ marginTop: "2rem" }}>
                    <h6>Target your campaign</h6>
                    <p>
                      You can target your video campaign by gender age and
                      interest. This ensures that your videos reach only the
                      people who will most likely engage with your video and
                      ultimately purchase your book.
                    </p>
                  </div>

                  <div style={{ marginTop: "2rem" }}>
                    <h6>View your metrics</h6>
                    <p>
                      At the end of each campaign, we will send you a report of
                      your video’s performance based on the following metrics:
                    </p>
                    <ul>
                      <li>Region/country</li>
                      <li>Age</li>
                      <li>Gender</li>
                      <li>Interest</li>
                    </ul>
                    <p>
                      Views are guaranteed and can even exceed individual
                      targets based on your video quality and ad performance.
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Campaign Durations</h5>
                  <Row style={{ marginTop: "2rem" }}>
                    <Col lg={4} md={4} style={{ padding: "1rem" }}>
                      <h6>Five Days</h6>
                      <p>Estimated 3,333 views with 700 free views</p>
                    </Col>
                    <Col lg={4} md={4} style={{ padding: "1rem" }}>
                      <h6>Six Days</h6>
                      <p>Estimated 10,000 views with 2,200 free views</p>
                    </Col>
                    <Col lg={4} md={4} style={{ padding: "1rem" }}>
                      <h6>Nine Days</h6>
                      <p>Estimated 16,667 views with 3800 free views</p>
                    </Col>
                    <Col lg={4} md={4} style={{ padding: "1rem" }}>
                      {" "}
                      <h6>Eleven Days</h6>
                      <p>Estimated 23,500 views with 5,000 free views</p>
                    </Col>
                    <Col lg={4} md={4} style={{ padding: "1rem" }}>
                      {" "}
                      <h6>Twelve Days</h6>
                      <p>Estimated 33,333 views with 9,000 free views</p>
                    </Col>
                  </Row>
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

export default AdvancedYoutubePromotion;
