import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const AdvancedEditorialService = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Advanced Editorial Service | Services </title>
      </Head>
      <Navbar />
      <PageBanner pageTitle="Content and Creativity" />
      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h2>Advanced Editorial Service</h2>
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
                  Refine the Structure and Substance of Your Book with Our
                  Professional Editing Services
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Our seasoned editors will closely look into your manuscript
                  and recommend changes to its content and style where necessary
                  in order to refine your work into a full-fledged literary
                  masterpiece. Regardless of your book’s genre, our advanced
                  editorial services aim to help turn your book into a riveting
                  read.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  We offer three types of editorial services including:
                </p>

                <div>
                  <h3>Line Editing – $0.041 Per Word</h3>
                  <p style={{ marginTop: "1rem" }}>
                    Our industry-leading line editing service effectively fixes
                    all grammar, spelling, and punctuation issues with your
                    manuscript. In addition, our editors will work to improve
                    the flow and readability of your work so that it can
                    effectively convey its message to the readers.
                  </p>
                </div>

                <p style={{ marginTop: "1rem" }}>
                  Author Reputation Press believes that vivid storytelling
                  requires the right use of language in order to help your
                  audience evoke the story in their mind. Our editors will help
                  you achieve just that.
                </p>

                <div style={{ paddingLeft: "2rem" }}>
                  <div>
                    <h5>Line Editing Addresses The Following</h5>
                    <ul>
                      <li>
                        <h6>Perspective</h6>
                      </li>
                      <li>
                        <h6>Point of View</h6>
                      </li>
                      <li>
                        <h6>Character Voice</h6>
                      </li>
                      <li>
                        <h6>Character Development</h6>
                      </li>
                      <li>
                        <h6>Plot Structure</h6>
                      </li>
                      <li>
                        <h6>Overall Theme</h6>
                      </li>
                      <li>
                        <h6>Consistency</h6>
                      </li>
                      <li>
                        <h6>Weaknesses Within the Story</h6>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 style={{ marginTop: "2rem" }}>
                      Estimated Time Of Fulfillment
                    </h5>
                    <p style={{ marginTop: "1rem" }}>
                      Our turnaround time for improving your manuscript is
                      typically up to three weeks, subject to the firm’s work
                      queue and the level of line editing required for your
                      work.
                    </p>
                  </div>
                  <div>
                    <h5 style={{ marginTop: "2rem" }}>Limitations</h5>
                    <p style={{ marginTop: "1rem" }}>
                      Extensive Editorial Service can only apply during the
                      production stage. This service is not available if the
                      book is already in print or out for distribution.
                    </p>
                  </div>

                  <div style={{ marginTop: "2rem" }}>
                    <h5>Revisions</h5>
                    <ul>
                      <li>
                        <h6>Only one (1) free revision is available.</h6>
                      </li>
                      <li>
                        <h6>
                          Standard rate applies for the succeeding revisions.
                        </h6>
                      </li>
                      <li>
                        <h6>
                          It is important to ensure that all corrections are
                          sent back to us in one communication to avoid
                          additional charges.
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr style={{ marginTop: "2rem" }} />
                <div style={{ marginTop: "2rem" }}>
                  <h3>Content Editing – $0.051 Per Word</h3>
                  <p style={{ marginTop: "1rem" }}>
                    Our content editing service addresses all inconsistencies
                    with the story line, plot, and characterization. The editors
                    will also straighten out inaccuracies with the facts in the
                    story, fix issues with the dialogue, remove redundancies,
                    rectify errors in diction, and clear non-sequitur rhetoric
                    or flow of ideas. Our team also checks for instances where
                    stated facts in the story need external approval.
                  </p>
                </div>

                <div style={{ paddingLeft: "2rem" }}>
                  <div style={{ marginTop: "2rem" }}>
                    <h5>
                      Our Content Editing Service Is Split Into Two Categories
                    </h5>
                    <ul>
                      <li>
                        <h6>
                          For fiction, an editor will check for inconsistencies
                          with the plot, characterization, and setting.
                        </h6>
                      </li>
                      <li>
                        <h6>
                          For nonfiction, an editor will work to maintain the
                          accuracy of stated facts and ensure consistent
                          information and ideas.
                        </h6>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 style={{ marginTop: "2rem" }}>
                      Estimated Time Of Fulfillment
                    </h5>
                    <p style={{ marginTop: "1rem" }}>
                      Our content editing service usually takes two to three
                      weeks to complete, subject to our current work queue and
                      the complexity of your manuscript.
                    </p>
                  </div>
                  <div>
                    <h5 style={{ marginTop: "2rem" }}>Limitations</h5>
                    <p style={{ marginTop: "1rem" }}>
                      Extensive Editorial Service can only apply during the
                      production stage. This service is not available if the
                      book is already in print or out for distribution.
                    </p>
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                    <h5>Revisions</h5>
                    <ul>
                      <li>
                        <h6>Only one (1) free revision is available.</h6>
                      </li>
                      <li>
                        <h6>
                          Standard rate applies for the succeeding revisions.
                        </h6>
                      </li>
                      <li>
                        <h6>
                          It is important to ensure that all corrections are
                          sent back to us in one communication to avoid
                          additional charges.
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>

                <hr style={{ marginTop: "2rem" }} />

                <div style={{ marginTop: "2rem" }}>
                  <h3>Developmental Editing – $0.092 Per Word</h3>
                  <p style={{ marginTop: "1rem" }}>
                    Our developmental editing service is designed to assess the
                    important elements of your story including the general plot,
                    characters, and story pacing. The task of our editors is to
                    determine the weak points in the manuscript that need to be
                    improved. Our goal is to heighten the impact of every scene
                    on your readers by building an emotional connection between
                    the characters and the story. As the most comprehensive type
                    of editing, it carries a huge potential to introduce major
                    changes to the story.
                  </p>
                </div>

                <div style={{ paddingLeft: "2rem" }}>
                  <div style={{ marginTop: "2rem" }}>
                    <h5>Developmental Editing Checks For</h5>
                    <ul>
                      <li>
                        <h6>Perspective</h6>
                      </li>
                      <li>
                        <h6>Point of View</h6>
                      </li>
                      <li>
                        <h6>Character Voice</h6>
                      </li>
                      <li>
                        <h6>Character Development</h6>
                      </li>
                      <li>
                        <h6>Plot Structure</h6>
                      </li>
                      <li>
                        <h6>Overall Theme</h6>
                      </li>
                      <li>
                        <h6>Overall Consistency</h6>
                      </li>
                      <li>
                        <h6>Weaknesses Within the Story</h6>
                      </li>
                    </ul>
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                    <h5>
                      Our Developmental Editing Consists Of Two Categories
                    </h5>
                    <ul>
                      <li>
                        <h6>
                          For works of fiction, an editor will gauge the
                          appropriateness of content based on an evaluation of
                          genre and readership. This is followed by a deep
                          analysis of the plot, story pace, characterization,
                          and dialogue.
                        </h6>
                      </li>
                      <li>
                        <h6>
                          For nonfiction, an editor will determine the title’s
                          potential applications and see to it that its content
                          is well aligned with its purpose and all relevant
                          points are covered. Another equally important task of
                          the editor is to help ensure the accuracy and
                          organization of factual assertions. Where appropriate,
                          all illustrations and graphical presentations will be
                          vetted for their relevance to the general content of
                          the book.
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 style={{ marginTop: "2rem" }}>
                      Estimated Time Of Fulfillment
                    </h5>
                    <p style={{ marginTop: "1rem" }}>
                      Our developmental editing service usually takes three to
                      seven weeks to complete, depending on our current work
                      queue and the complexity of your manuscript.
                    </p>
                  </div>
                  <div>
                    <h5 style={{ marginTop: "2rem" }}>Limitations</h5>
                    <p style={{ marginTop: "1rem" }}>
                      Extensive Editorial Service can only apply during the
                      production stage. This service is not available if the
                      book is already in print or out for distribution.
                    </p>
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                    <h5>Revisions</h5>
                    <ul>
                      <li>
                        <h6>Only one (1) free revision is available.</h6>
                      </li>
                      <li>
                        <h6>
                          Standard rate applies for the succeeding revisions.
                        </h6>
                      </li>
                      <li>
                        <h6>
                          It is important to ensure that all corrections are
                          sent back to us in one communication to avoid
                          additional charges.
                        </h6>
                      </li>
                    </ul>
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

export default AdvancedEditorialService;
