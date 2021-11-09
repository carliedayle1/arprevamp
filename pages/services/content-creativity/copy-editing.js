import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";

const CopyEditing = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Copy Editing | Services </title>
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
                    <h2>Copy Editing</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h3>$0.0133/Word</h3>

                <h5 style={{ marginTop: "2rem" }}>
                  Have Your Book Professionally Edited with These Copy Editing
                  Services
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Our professional editors will make sure that every word you
                  have written supports your goal as an author through our
                  quality copyediting service. Your work will be checked for
                  grammar, spelling, punctuation, and visual presentation. Plus,
                  you can monitor the changes we will be making to your
                  manuscript to ensure transparency and to keep you in the loop.
                  With our copyediting service, your manuscript will be
                  thoroughly checked for:
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <ul>
                    <li>
                      <h6>Spelling</h6>
                    </li>
                    <li>
                      <h6>Grammar</h6>
                    </li>
                    <li>
                      <h6>Usage</h6>
                    </li>
                    <li>
                      <h6>Structure</h6>
                    </li>
                    <li>
                      <h6>Flow</h6>
                    </li>
                    <li>
                      <h6>Other Issues with Style</h6>
                    </li>
                  </ul>
                </div>

                <p style={{ marginTop: "1rem" }}>
                  Our resident copy editor may also rewrite your manuscript if
                  necessary changes must be made in order to polish its
                  wordiness, transitions, and style. Edits will also be made
                  when we detect inconsistencies in spelling, capitalization,
                  font usage, numerals, and hyphenation. Additionally, we will
                  check for inconsistency within the story itself, including
                  plot points, character description, and setting.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  As your partner in publishing your book, our copy editor aims
                  to ensure your book goes out of the production stage free or
                  errors. More importantly, our copy editing service is intended
                  to let you tell your story the best way possible.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  This process focuses on both the small and major details of
                  your book, with our editor meticulously looking into the
                  technical aspect of your work while keeping its themes and
                  storyline uncompromised throughout the process. In addition,
                  the editor will check for factually incorrect sentences. For
                  non-fiction books, this is an important part of the copy
                  editing process.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  As the final step prior to publication, this step is done
                  after all other forms of edits are completed. Typically, this
                  process comprises manuscript critique, where the editor reads
                  your manuscript and prepares a comprehensive evaluation, and
                  extensive edit, where your manuscript is assessed line by
                  line.
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

export default CopyEditing;
