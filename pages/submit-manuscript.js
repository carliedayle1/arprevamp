import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Partner from "@/components/Common/Partner";
import { Container, Row, Col } from "react-bootstrap";
import * as Icon from "react-feather";

export default function SubmitManuscript() {
  return (
    <>
      <Head>
        <title>Submit Manuscript | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Submit Your Manuscript" />

      <Container style={{ marginTop: "4rem", marginBottom: "3rem" }}>
        <div>
          <h6 style={{ lineHeight: "2rem" }}>
            Prior to submission, please follow the formatting guidelines below:
          </h6>
          <ul style={{ fontSize: "1rem" }}>
            <li>Use double line spacing</li>
            <li>
              Use the common fonts such as Times New Roman, Georgia, Calibri
            </li>
            <li>Set your font size to 12</li>
            <li>Include page numbers</li>
          </ul>

          <h6 style={{ lineHeight: "2rem" }}>
            To submit your manuscript, please click on the button below, fill
            out the necessary fields in the form, and attach a Word or PDF file
            of your work. In addition, please label your file as follows: LAST
            NAME_SUBMISSION.docx or LAST NAME_SUBMISSION.pdf.
          </h6>

          <h6 style={{ lineHeight: "2rem" }}>
            If we determine that your manuscript is ready for publication, our
            author consultants will give you a call to discuss the potential for
            publishing your book with Author Reputation Press. You will also
            receive an email confirmation after submitting your manuscript.
          </h6>
        </div>
      </Container>
      <Partner />
      <Container style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <h6 style={{ lineHeight: "2rem" }}>
          Author Reputation Press welcomes submissions from authors across all
          types of genre. Our goal is to provide equal opportunities to authors
          who seek a wider audience by evaluating their manuscript and getting
          it ready for publication.
        </h6>
        <h6 style={{ lineHeight: "2rem" }}>
          Our team of editors and proofreaders will guide you through every step
          of polishing your work if it needs a bit more work and revision. We
          are accepting manuscripts in the following genre:
        </h6>
        <Row>
          <Col sm={12} md={6}>
            <h5>Fiction</h5>
            <div className="services-content">
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Action And Adventure
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Children
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Crime And Detective
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Drama
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Espionage
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Fan Fiction
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Fantasy
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Fiction Poetry
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Historical Fiction
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Holiday
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Legend
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Mystery
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Mythology
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Politics
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Religion
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Romance
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Science Fiction (Sci-Fi)
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Short Story
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> Suspense Thriller
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Grid /> War And Military
                </div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={6}>
            <h5>Non-Fiction</h5>
            <div className="services-content">
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Astrology
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Biography/Autobiography
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> BODY, MIND and SPIRIT
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Cooking And Food
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Gardening
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Gay Erotica
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> History
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Humor
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Memoir
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Mental Health
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> MIND and SPIRIT
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Narrative Nonfiction
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Non-Fiction Poetry
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Periodicals
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Philosophy
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Poetry
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Politics
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Psychology
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader /> Puzzle
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader />
                  Reference Books
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader />
                  Religion
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader />
                  Romance
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader />
                  Science
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader />
                  Self-Help
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader />
                  Spiritual
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader />
                  Sports
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="box">
                  <Icon.Loader />
                  Travel
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
