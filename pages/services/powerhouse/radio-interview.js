import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const RadioInterview = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title> Radio Interview</title>
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
                    <h2> Radio Interview</h2>
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
                  Our Radio Interview service is a guaranteed way to land a slot
                  on Ric Bratton’s show “This Week in America”
                </h4>
                <p style={{ marginTop: "1rem" }}>
                  a popular radio program in the United States distributed
                  across multiple channels. The interview is a perfect
                  opportunity to reach out to your potential readers and tell
                  them why they need to read your book.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Bratton has an extensive background in the broadcast industry
                  both on TV and radio platforms, with 33 years of experience
                  working with other bigwigs in the media including Larry King,
                  Hugh Downs, Chris Matthews, Jay Leno, George Clooney, and
                  Katie Couric, among many others.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  At present, Bratton has two radio shows syndicated on a
                  national level, with “This Week in America” alone live on more
                  than 100 stations featuring nationally-recognized guests and
                  engaging topics. The radio program recently received the Philo
                  T. Farnsworth Award for the Best Professional Talk Show from
                  the Central States Alliance for Community Media.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  ​In addition, Bratton hosts the daily feature Just So You Know
                  that airs on over 40 radio stations nationwide. His television
                  career spans news reporting and anchoring, weather report, and
                  sports newscast. Among his longest-running and highest-rated
                  local TV talk show in the country was the Ric Bratton Show.
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

export default RadioInterview;
