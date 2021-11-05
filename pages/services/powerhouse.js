import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
// import ServicesArea from "@/components/ITStartup/ServicesArea";
import * as Icon from "react-feather";
import Head from "next/head";

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
                  <div className="box">
                    <Icon.Globe /> Library Journal Ads
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Readers Digest Magazine Ad
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> The New York Times Sunday Book Review Ad
                    Opportunity
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe />
                    Publisher Weekly Magazine
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> The Los Angeles Time Ad Opportunity
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> The New York Review of Books Advertising
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Comprehensive Facebook Ad Campaign
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Branding and Marketing Strategy
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Author Spotlight Full Production
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Online Video Discovery
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Hollywood Book To Screen
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Credibility and Recognition
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Premium SEO Service
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Inside The Vatican Ads
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Press Release Service
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Extensive Blog Campaign
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Radio Interview with Kate Delaney
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Cinematic Book Trailer
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Internet Based Marketing
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Advance Book Trailer
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Print-ad Trio Blast
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Author Publicity Spotlight
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Social Media Blast
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe />
                    Ric Brattan Radio Interview
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Premium TV Advertising
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> CBS Radio Interview on People of Distinction
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Amazon Booksellers Campaign
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Extensive Media Coverage
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Publisher's Review
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe />
                    Advance Youtube Promotion
                  </div>
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
