import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const NationalShow = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Book Exhibit - National Show | Services </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Book Events and Tours" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h2>Book Exhibit - National Show</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h3>$1599.00</h3>

                <h5 style={{ marginTop: "2rem" }}>
                  Boost Your Campaign With Exhibit Marketing
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Author Reputation Press’ Book Exhibition Marketing holds the
                  key to growing your book sales by enabling you to reach your
                  target audience at trade shows. You can choose from over 20
                  annual shows where you can exhibit your book and unleash the
                  full potential of your marketing campaign.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ marginTop: "1rem" }}>National Show Exhibit</h5>
                  <ul>
                    <li>
                      <h6>Inclusion in National Show Exhibit</h6>
                    </li>
                    <li>
                      <h6>Full-page Black & White Ad in Exhibit Catalog</h6>
                    </li>
                    <li>
                      <h6>Press Release Campaign Essential 100 outlets</h6>
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ marginTop: "1rem" }}>How It Works</h5>
                  <ul>
                    <li>
                      Author Reputation Press will create a buzz around your
                      upcoming exhibit by sending out an original and compelling
                      press release to several media outlets and to thousands of
                      interested parties via newswire.
                    </li>
                    <li>
                      At the show of your choice, your book will be assigned a
                      number, either based on its Dewey Decimal subject category
                      at library shows, or based on its alphabetical order by
                      publisher at international venues.
                    </li>
                    <li>
                      Your book’s entry in the exhibit catalogue includes the
                      title, your byline (as well as illustrator and/or editor
                      where applicable), year of publication, price, ISBN, a
                      25-word description (feel free to write your own, or our
                      professional copywriters can do it for you), and citations
                      received.
                    </li>
                    <li>
                      We will design a full-page black-and-white advertisement
                      of your book for the exhibitor catalog, which will be sent
                      to you for approval.
                    </li>
                    <li>
                      Author Reputation Press ® information is also included in
                      the catalogue as part of the publisher directory, where
                      all pertinent contact and distribution information is
                      included.
                    </li>
                    <li>
                      This information is also available online – via a live,
                      searchable database – and it will be archived for up to
                      one year.
                    </li>
                    <li>
                      Your book will be displayed along with other Author
                      Reputation Press ® titles in a prime position on the
                      exhibit floor.
                    </li>
                    <li>Your book will be displayed face-out on the shelf.</li>
                    <li>
                      A sticker bearing a unique QR code will be placed on the
                      lower left hand side of the cover of the books on display.
                      Book fair attendees can then scan the code using the CBE
                      Book Fair Buddy app to learn more about your book and add
                      it to their reading list. They may also share the book
                      with their friends, family, or social media contacts, plus
                      an option to purchase your book from reseller sites.
                    </li>
                    <li>
                      An official report and PDF of the exhibit catalogue can
                      also be found online for up to one year after the event.
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ marginTop: "1rem" }}>
                    About The Combined Book Exhibit
                  </h5>
                  <p style={{ marginTop: "1rem" }}>
                    The Combined Book Exhibit (CBE) is the go-to service among
                    authors for book promotion and marketing campaign. CBE has
                    been exhibiting published works at national and
                    international book events over the past 85 years, cementing
                    its reputation as a reliable resource for publishers,
                    librarians and educators.
                  </p>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ marginTop: "1rem" }}>Note</h5>
                  <ul style={{ marginTop: "1rem" }}>
                    <li>
                      Publish dates are subject to change by the event
                      organizers without prior notice. Please contact Author
                      Reputation Press ® to confirm dates for you.
                    </li>
                    <li>
                      Please note that the Purchase Deadline will be two (2)
                      weeks before your preferred show’s Registration Deadline.
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5 style={{ marginTop: "1rem" }}>Getting Started</h5>
                  <p style={{ marginTop: "1rem" }}>
                    For bundles and discounts, our Marketing Consultants are
                    available for pro bono consultation via e-mail at
                    info@authorreputationpress.com or telephone at
                    1-800-220-7660.
                  </p>
                  <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
                    Disclaimer: Prices are subject to change without prior
                    notice. Prices listed do not include any applicable sales,
                    use, excise, value-added, goods and services, or other tax,
                    which will be added to the total payable at the time of
                    purchase. Other restrictions may also apply.
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

export default NationalShow;
