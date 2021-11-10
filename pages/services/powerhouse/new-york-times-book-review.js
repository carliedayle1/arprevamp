import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Table, Row, Col } from "react-bootstrap";
import Image from "next/image";
import * as Icon from "react-feather";
import Link from "next/link";

const NewYorkTimes = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>New York Times Sunday Book Review Ad Opportunity</title>
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
                    <h2>New York Times Sunday Book Review Ad Opportunity</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>

                <p style={{ marginTop: "1rem" }}>
                  Print advertising in the digital age isn’t dead, contrary to
                  popular misconceptions. In reality, there are benefits from
                  print that digital doesn’t offer, and ads placed on large
                  magazines combined with digital communication can maximize the
                  impact of your message.
                </p>

                <div>
                  <ol>
                    <li>
                      <h6>
                        Targeted audience. The New York Times Sunday Book Review
                        directs your ad to your target audience – the book
                        readers. Magazines have more specific focus than any
                        marketing platform.{" "}
                      </h6>
                    </li>
                    <li>
                      <h6>
                        Deeper engagement. People who subscribed to a magazine
                        made a deliberate choice to reedit, thus they sift
                        through every page. In contrast, people searching online
                        spend only seconds to scan a website.
                      </h6>
                    </li>
                  </ol>
                </div>

                <div
                  className="features-area"
                  style={{ marginTop: "2rem", marginBottom: "2rem" }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                          <div className="icon">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>Pass-along visibility</h6>
                          </h3>
                          <p>
                            Print has a higher chance of being passed from one
                            person to another especially in coffee shops or
                            libraries, so your ad gets additional exposure along
                            with it.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                          <div className="icon  ">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>Legitimacy and credibility</h6>
                          </h3>
                          <p>
                            When readers see your book featured in an ad on a
                            national magazine like NY Sunday Book Review, they
                            view it with more respect than if they saw it in a
                            lesser known publication
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                          <div className="icon  bg-eb6b3d">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>High brand recall</h6>
                          </h3>
                          <p>
                            Print ads have the highest receptivity of any media,
                            meaning readers tend to remember it more often.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                          <div className="icon bg-eb6b3d">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>Longevity</h6>
                          </h3>
                          <p>
                            Print ads will stay long enough even after an online
                            or TV ad has expired.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                          <div className="icon  bg-c679e3">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>Full page ad</h6>
                          </h3>
                          <p>
                            Your book cover, synopsis, and book price will be
                            included in a full page ad of 12books and also the
                            1/5 page ad of 3 books.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                          <div className="icon bg-c679e3">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>Media campaign</h6>
                          </h3>
                          <p>
                            Along with the print ad, a press release or blog
                            post about your book will be submitted to online
                            media outlets, print publications, and broadcast
                            media.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="single-features">
                          <div className="icon  ">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>Ad size and dimension</h6>
                          </h3>
                          <p>
                            The full page ad measures 9.6″ x 10.875″and occupies
                            five columns of the magazine. The 1/5 page ad
                            measures 1.8” x 10.875″and occupies vertical side of
                            the magazine.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="single-features ">
                          <div className="icon ">
                            <Icon.BookOpen />
                          </div>
                          <h3>
                            <h6>Print Ads Versus Online Ads</h6>
                          </h3>
                          <p>
                            Online marketers are often confronted with anti-ad
                            sentiments. Most people who browse the internet are
                            using ad blockers to prevent intrusive ads from
                            popping up on their screen without their consent.
                            This leads to poor visibility of your band when
                            advertised online.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>
                        On the other hand, those who subscribe to a print
                        magazine are fully aware that ads are part of their
                        reading material, so your book is surety be seen by
                        everyone who reads it. High brand recall Print ads have
                        the highest receptivity of any media, meaning readers
                        tend to remember it more often. Longevity Print ads will
                        stay long enough even after an online or TV ad has
                        expired.
                      </p>
                    </div>
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

export default NewYorkTimes;
