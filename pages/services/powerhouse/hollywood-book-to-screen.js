import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const HollywoodBookToScreen = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Hollywood Book To Screen</title>
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
                    <h2>Hollywood Book To Screen</h2>
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
                  Hollywood Book-to-Screen Service For Your Book's Film
                  Adaptation
                </h4>

                <h5 style={{ marginTop: "2rem" }}>
                  Hollywood Screen Writers For Hire
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  See your book transform into motion picture through our
                  Book-to-Screen service. A film adaptation will be developed
                  based on your story after a thorough scrutiny and analysis of
                  it. We will evaluate your book’s cover, title, character, plot
                  and all its creative components.
                </p>
                <div style={{ marginTop: "2rem" }}>
                  <h5>Movie Script Coverage</h5>
                  <p style={{ marginTop: "1rem" }}>
                    Let us create a written outline of your book in a database
                    through our Movie Script Coverage and be discovered by major
                    studios in search for stories to adapt into motion pictures.
                    To be considered for a movie adaptation, your book needs to
                    have these basic elements: a cover sheet, synopsis and
                    comments. We will endorse your manuscript to movie
                    producers, production companies, and studios. Submit a copy
                    of your manuscript today and we will fine-tune your book to
                    qualify for prospective agents, movie producers, and film
                    studios.
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
                  <h5>Movie Treatment</h5>
                  <p style={{ marginTop: "1rem" }}>
                    Our Movie Treatment service aims to produce a synopsis of
                    your work’s screenplay idea and let you experience a
                    Hollywood-style of fame exclusive only to a few authors.
                    This package includes the creation of a well-constructed
                    7-10 page summary of your book’s screenplay idea,
                    highlighting its thought, plot, and characters in a way that
                    will take readers by storm. Your book will then be
                    registered in an online database to increase its visibility
                    to movie producers in search for interesting stories.
                  </p>
                  <h6>This Package Includes The Following Services:</h6>
                  <ul>
                    <li>
                      A 7-10 page treatment detailing how to convert your
                      manuscript into a movie or TV series
                    </li>
                    <li>
                      Directory registration of your movie treatment to gain
                      traction among movie reviewers and film producers
                    </li>
                    <li>
                      US Copyright Office application to help you retain full
                      ownership of your treatment, which you can use during your
                      pitch appointments on your screenplay applications
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Movie Screenplay</h5>
                  <p style={{ marginTop: "1rem" }}>
                    Your story’s path to Hollywood fame rests entirely on your
                    hands and we want to help you chart that course with our
                    Movie Screenplay service. We are connected to a network of
                    film producers who can help turn your book into a
                    blockbuster movie through creative concept video production,
                    post-production, multimedia and advertising services. The
                    screenplay will focus on your story’s pivotal scenes, major
                    characters, and the dialogue that gives life to the story.
                  </p>
                  <h6>Our Movie Screenplay Package Includes:</h6>
                  <ul>
                    <li>
                      A 7-10 page treatment detailing the strategy to transform
                      your manuscript into a movie or TV adaptation
                    </li>
                    <li>
                      A carefully written screenplay by one of our first-rate
                      screenwriters based on your approved movie treatment
                    </li>
                    <li>
                      Submission of your draft screenplay to a producer for
                      review in preparation for a film adaptation Directory
                    </li>
                    <li>
                      Registration of your screenplay to gain attention from
                      co-writers, movie reviewers, and producers US Copyright
                      Office application to help you retain full ownership of
                      your screenplay, which you can use to produce your own
                      indie film
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

export default HollywoodBookToScreen;
