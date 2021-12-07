import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const BookIndexing = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Book Indexing | Services </title>
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
                    <h2>Book Indexing Service</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>

                <h5 style={{ marginTop: "2rem" }}>
                  Essential Book Indexing Services for Authors
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  If you need an index, you should think about hiring book
                  indexing services. Hiring someone to create an index for your
                  book offers a lot of benefits and convenience. Professionals
                  who work in indexing services are well-versed in the process.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  In fact, you can rest assured that your book is in capable
                  hands with these experts. The best part about hiring indexing
                  services is that you won’t have to look far and wide for
                  assistance. If you’re looking for indexing professionals to
                  assist you with your book, you’ve come to the right place.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  First and foremost, we are the best place to find an indexing
                  expert. Second, we have a plethora of connections, ensuring
                  that you always get the best of the best. Finally, we are an
                  excellent resource for locating a professional with whom you
                  may be able to collaborate on a long-term basis.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Our book indexing service provides your readers with an
                  enhanced reading experience and allows them to quickly search
                  for important information within your book. Our book indexing
                  system extracts the most significant details from your
                  manuscript in order to make information search quick and easy
                  for readers.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  This service is available in two categories:
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5>ARP Supplied</h5>
                  <p style={{ marginTop: "1rem" }}>
                    Authors have the option to let our team deliver the index
                    for their book, sparing them the hassle of going through
                    this arduous task. This option is split into three levels
                    based on the amount of words:
                  </p>

                  <ul>
                    <li>
                      <h6>0-60K words ($0.013 per Word)</h6>
                    </li>
                    <li>
                      <h6>60K-120K words ($0.012 per Word)</h6>
                    </li>
                    <li>
                      <h6>120K+ words ($0.011 per Word)</h6>
                    </li>
                  </ul>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h5>Author Supplied</h5>
                  <p style={{ marginTop: "1rem" }}>
                    Authors can also choose to supply their own index to help
                    readers find important information in their book. To add an
                    index to your manuscript, follow these steps:
                  </p>

                  <ul>
                    <li>
                      <h6>
                        Prepare your manuscript in the latest version of
                        Microsoft Word or WordPerfect using its Index tool.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        ARP will provide you with a paper gallery of your book
                        which will serve as a reference for the index creation.
                        Your index can contain final page numbers. You should
                        save it to a PC formatted disk and submit it as a
                        separate file to ARP.
                      </h6>
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

export default BookIndexing;
