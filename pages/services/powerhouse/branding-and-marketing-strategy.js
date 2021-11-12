import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Table, Row, Col } from "react-bootstrap";
import Image from "next/image";
import * as Icon from "react-feather";

const BrandingAndMarketing = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Branding and Marketing Strategy</title>
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
                    <h2>Branding and Marketing Strategy</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h5>Develop A Successful Branding And Marketing Strategy</h5>
                <p style={{ marginTop: "1rem" }}>
                  Authors face the challenge of getting their books to the
                  market after completing their manuscript. This roadblock can
                  be remedied with our branding and marketing strategy method
                  comprising book signing tours and media exposures. However,
                  these campaigns do not happen overnight for self-published
                  authors because, oftentimes, not a lot of people know they
                  exist yet.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Hiring a publicist is one of the wisest moves both
                  traditionally and self-published authors can make. While
                  traditionally published books have higher chances of making
                  their way to physical bookstores, self-published titles do
                  not. Oftentimes, these books need to compete with millions of
                  other titles to get the readers’ attention. It can be hard to
                  stand out when you are only one of many authors in the
                  self-publishing industry. Our publicists offer a competitive
                  edge that expands your book’s visibility across a wide
                  spectrum of readers.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Our publicists have nurtured work relationships with hundreds
                  of high-profile contacts, including journalists, buyers,
                  bloggers, AND TV producers. They will leverage this network to
                  promote your book, combined with their marketing expertise.
                  Publicists are inherently skilled at getting you in front of
                  your target audiences that you would otherwise not be able to
                  capture on your own.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Finally, it is almost impossible to be an author and a
                  publicist at the same time. Instead of navigating the tricky
                  landscape of publicity, you can just hire a publicist and
                  focus on your creative process. Doing your own marketing can
                  be a heavy and unnecessary burden that will only distract you
                  from what you do best.
                </p>
                <hr />
                <div style={{ marginTop: "2rem" }}>
                  <h4>Online Focus – Exploratory Package</h4>
                  <p style={{ marginTop: "1rem" }}>
                    We always make sure our publicity campaigns are worth your
                    investments, so we will gauge the viability of your title
                    before allowing you to invest in a publicity campaign. Our
                    Exploratory Package involves a team of expert reviewers who
                    will read your work in order to provide you an intelligent
                    feedback, post reviews online, or a combination of both.
                  </p>
                  <p style={{ marginTop: "1rem" }}>
                    The review process takes up to 90 days, after which our team
                    will decide whether a publicity campaign can yield a
                    promising result. Otherwise, we will identify the stumbling
                    blocks to your project and develop ways to overcome them.
                  </p>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <h4>Emerging Author Package</h4>
                  <p style={{ marginTop: "1rem" }}>
                    Not all self-published books and small press books make it
                    to a wide distribution across retail stores, and our
                    Emerging Author Package can help expand the reach of these
                    types of books. Under this option, our team will write pitch
                    emails and press releases related to your title and send
                    them to various blog websites and media outlets (TV, radio,
                    and newspaper) with the goal of helping authors land at
                    least five in-depth and thorough reviews for their title,
                    one radio interview, or a TV appearance.
                  </p>
                  <p style={{ marginTop: "1rem" }}>
                    We also provide a comprehensive consultation that best fits
                    the distinct needs of authors across a wide range of genres.
                    Where necessary, our team will also connect with the right
                    organizations to pursue better opportunities for a specific
                    title. It usually takes up to six months for the final
                    report to complete, after which our team will recommend ways
                    for the advancement of an author’s work.
                  </p>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h4>Paramount – Events Publicity Package</h4>
                  <p style={{ marginTop: "1rem" }}>
                    This comprehensive package involves all of the above
                    mentioned services combined with additional outreach to
                    mainstream media including print, radio, and television. On
                    top of those initiatives, the company also provides targeted
                    research, recommendations for live appearances where
                    necessary, guesting with online literary communities, and
                    mentions of your book in popular forums. The turnaround time
                    for this publicity campaign is six months before our team
                    makes suggestions to accelerate the progress of your work
                    toward publication.
                  </p>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <h4>Superior Express Custom Publicity</h4>
                  <p style={{ marginTop: "1rem" }}>
                    This branding and marketing strategy transcend the
                    traditional media exposure to involve outreach across social
                    media platforms including Facebook, Twitter, Pinterest,
                    LinkedIn, Goodreads, and dedicated blog sites. Additionally,
                    this service includes book trailer placement, digital
                    marketing, SEO consulting, feature articles on literary and
                    academic magazines, coaching support for manuscript
                    revisions, blog creation, and physical book tours.
                  </p>
                  <p style={{ marginTop: "1rem" }}>
                    The timeframe for this type of publicity is flexible based
                    on your specific needs as we work together to establish your
                    author brand and achieve your goals. Options for completing
                    deliverables under this package vary between at least 30,
                    60, or 90 days.
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

export default BrandingAndMarketing;
