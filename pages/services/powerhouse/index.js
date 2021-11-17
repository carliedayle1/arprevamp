import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
// import ServicesArea from "@/components/ITStartup/ServicesArea";
import * as Icon from "react-feather";
import Head from "next/head";
import Link from "next/link";

export default function Powerhouse() {
  return (
    <>
      <Head>
        <title>Power House Platform | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Services" />
      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <h2>Power House Platform</h2>
                <div className="bar"></div>
                <p>
                  Choose any of our wide array of services that will help you in
                  publishing your literary works!
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/library-journal-ads">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Library Journal Ads
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/readers-digest">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Readers Digest Magazine Ad
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/new-york-times-book-review">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> The New York Times Sunday Book Review Ad
                      Opportunity
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/publisher-weekly-magazine">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe />
                      Publisher Weekly Magazine
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/los-angeles-times-ad">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> The Los Angeles Time Ad Opportunity
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/the-new-york-review-of-books">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> The New York Review of Books Advertising
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/comprehensive-facebook-ad">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Comprehensive Facebook Ad Campaign
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/branding-and-marketing-strategy">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Branding and Marketing Strategy
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/author-spotlight-full-production">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Author Spotlight Full Production
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/online-video-discovery">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Online Video Discovery
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/hollywood-book-to-screen">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Hollywood Book To Screen
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/credibility-and-recognition">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Credibility and Recognition
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/premium-seo-service">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Premium SEO Service
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/inside-the-vatican-ads">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Inside The Vatican Ads
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/press-release-service">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Press Release Service
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/extensive-blog-posting-campaign">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Extensive Blog Campaign
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/advance-radio-interview">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Radio Interview with Kate Delaney
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/cinematic-book-trailer">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Cinematic Book Trailer
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/internet-based-marketing">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Internet Based Marketing
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/advance-book-trailer">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Advance Book Trailer
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/print-ad-trio-blast">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Print-ad Trio Blast
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/author-publicity-spotlight">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Author Publicity Spotlight
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/social-media-blast">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Social Media Blast
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/radio-interview">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe />
                      Ric Brattan Radio Interview
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/premium-tv-advertising">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Premium TV Advertising
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/cbs-radio-interview">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> CBS Radio Interview on People of
                      Distinction
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/amazon-booksellers-campaign">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Amazon Booksellers Campaign
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/extensive-media-coverage">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Extensive Media Coverage
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/publishers-review">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe /> Publisher's Review
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/advanced-youtube-promotion">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe />
                      Advance Youtube Promotion
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/traditional-publishing">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe />
                      Traditional Publishing
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/powerhouse/pittsburg-post">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Globe />
                      Pittsburg Post - Gazette Ads
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
