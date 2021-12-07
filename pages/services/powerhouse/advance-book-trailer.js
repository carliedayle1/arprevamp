import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const AdvanceBookTrailer = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Advance Book Trailer</title>
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
                    <h2>Advance Book Trailer</h2>
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
                  Create One of the Best Book Trailers That Converts to Sales
                </h4>
                <p style={{ marginTop: "1rem" }}>
                  A book trailer is necessary for promotion even if you are not
                  a filmmaker. Video trailers help build an audience and spark
                  interest in your work by engaging potential readers through
                  visual, aural, and emotional means. Video trailers are also
                  proven methods of increasing sales at a time when media
                  consumption is reaching stratospheric heights.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Creating a video trailer might be a daunting task for some
                  writers, but that should not be a problem. Our book trailer
                  service will help you tell your story and bring your work to
                  life in a way that you could only imagine during the writing
                  process.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Our Advanced Book Trailer is our motion picture-like video
                  service for authors, bringing your book’s texts to life
                  through motions and layers that will draw the crowd’s
                  attention.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5>
                    The Advanced Book Trailer Package Includes The Following
                    Services:
                  </h5>
                  <ul>
                    <li>
                      Staged performance by real actors in costumes and in
                      carefully scouted locations with the goal of creating
                      buzz-worthy videos that can go viral in hours or days.
                    </li>
                    <li>
                      Audible storytelling through voiceover by a professional
                      actor
                    </li>
                    <li>
                      Imagery includes complex design, such as lighting effects,
                      3-D space, visual effects and motion graphics
                    </li>
                    <li>Two live-action video scenes</li>
                    <li>
                      Distribution of your book video to Dailymotion, YouTube
                      and other video-sharing sites
                    </li>
                    <li>
                      Web streaming support and high-quality video downloads
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Revisions:</h5>
                  <p>
                    You will be able to make two rounds of revisions to your
                    video at no additional cost. Any additional rounds of
                    revisions will incur charges. Acceptable changes include:
                  </p>
                  <ul>
                    <li>Simple text changes</li>
                    <li>Changes in font size</li>
                    <li>
                      Corrections or additions to book cover info and author
                      information
                    </li>
                    <li>Changes to audio levels</li>
                    <li>
                      Image changes (if you provide your own or you feel like an
                      image is not appropriate).
                    </li>
                    <li>
                      With actors, costumes and locations, this buzz-worthy
                      video has the most potential to go viral with no limits.
                    </li>
                    <li>
                      This package includes support from our professional video
                      editors and script writers whose attention to detail is
                      impeccable.
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

export default AdvanceBookTrailer;
