import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="contact-info-area ptb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
              <div className="icon">
                <Icon.Mail />
              </div>
              <h3>Mail Here</h3>
              <p>
                <a href="mailto:info@authorreputationpress.com">
                  info@authorreputationpress.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
              <div className="icon">
                <Icon.Phone />
              </div>
              <h3>Call Here</h3>
              <p>
                Main Domestic Toll Free:{" "}
                <a href="tel:+18888210229">+1 888 821 0229</a>
              </p>
              <p>
                Business Mobile:{" "}
                <a href="tel:+15085457560">+1 (508) 545-7560</a>
              </p>
              <p>
                Fax: <a href="tel:+15085457580">+1 (508) 545-7580</a>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
              <div className="icon">
                <Icon.MapPin />
              </div>
              <h3>Visit Here</h3>
              <p>45 Dan Road Suite 5 Canton, MA 02021</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mr-2">
            <div className="contact-info-box">
              <div className="icon">
                <Icon.UserCheck />
              </div>
              <h3>Follow Us</h3>
              <div className="single-footer-widget">
                <ul className="social-links">
                  <li>
                    <Link href="https://www.facebook.com/AuthorReputationPressLLC/">
                      <a className="facebook" target="_blank">
                        <Icon.Facebook />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/ARPressLLC">
                      <a className="twitter" target="_blank">
                        <Icon.Twitter />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/channel/UC2dTSvm8_PgOT3XxdcTpiYg/featured">
                      <a className="youtube" target="_blank">
                        <Icon.Youtube />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/authorreputationpress/">
                      <a className="instagram" target="_blank">
                        <Icon.Instagram />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/author-reputation-press">
                      <a className="linkedin" target="_blank">
                        <Icon.Linkedin />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
