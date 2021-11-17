import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Table } from "react-bootstrap";

const PremiumTvAdvertising = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Premium TV Advertising</title>
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
                    <h2>Premium TV Advertising</h2>
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
                  Our TV advertising service will literally make your book known
                  across boundaries with international and nationwide coverage.
                  Since television is still one of the most powerful advertising
                  platforms, you will be able to get your message across your
                  target audience and create a buzz for your work.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Leave a lasting impression with hundreds of millions of people
                  by letting our national media partners promote your book
                  through TV ads to be aired on major cable networks across key
                  areas in the United States and abroad. Major networks that
                  will carry your TV advertising include the bigwigs in the
                  industry:
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th colSpan="6">TV Networks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>A&E</td>
                        <td>Altitude</td>
                        <td> AMC</td>
                        <td> American Heroes Channel</td>
                        <td>Animal Planet</td>
                        <td> AntennaTV</td>
                      </tr>
                      <tr>
                        <td>AspireTV</td>
                        <td>AWE</td>
                        <td> BBC America</td>
                        <td> beIN SPORTS</td>
                        <td> BET</td>
                        <td> Bloomberg Television</td>
                      </tr>
                      <tr>
                        <td>Bravo</td>
                        <td>Cartoon Network</td>
                        <td>CBS Sports Network</td>
                        <td>CMT</td>
                        <td>CNBC</td>
                        <td>CNN</td>
                      </tr>
                      <tr>
                        <td>CNN Airport</td>
                        <td>CNN en Español</td>
                        <td>Comedy Central</td>
                        <td>Cooking</td>
                        <td>Decades</td>
                        <td> Discovery</td>
                      </tr>
                      <tr>
                        <td>Discovery en Español</td>
                        <td>Discovery Familia</td>
                        <td> DisneyXD</td>
                        <td>DIY</td>
                        <td> E!</td>
                        <td> ESPN</td>
                      </tr>
                      <tr>
                        <td>ESPN Classic</td>
                        <td>ESPN Deportes</td>
                        <td> ESPN News</td>
                        <td>ESPNU</td>
                        <td> FOOD Network</td>
                        <td> Fox Business</td>
                      </tr>
                      <tr>
                        <td>Fox News</td>
                        <td>Fox Sports (1 & 2)</td>
                        <td>Freeform</td>
                        <td>FX</td>
                        <td>FXM</td>
                        <td>FXX</td>
                      </tr>
                      <tr>
                        <td>FYI</td>
                        <td>Galavision</td>
                        <td>Golf Channel</td>
                        <td>Great American Country</td>
                        <td>GSN</td>
                        <td>Hallmark</td>
                      </tr>
                      <tr>
                        <td>Hallmark Movies & Mysteries</td>
                        <td>Heroes & Icons</td>
                        <td>HGTV</td>
                        <td>History</td>
                        <td>History en Español</td>
                        <td>HLN</td>
                      </tr>
                      <tr>
                        <td>IFC</td>
                        <td>Inspiration</td>
                        <td> Investigation Discovery</td>
                        <td>ION</td>
                        <td>Lifetime</td>
                        <td>Lifetime Movie Network</td>
                      </tr>
                      <tr>
                        <td>Logo</td>
                        <td>MAVTV</td>
                        <td>MeTV</td>
                        <td>MLB</td>
                        <td>Motortrend</td>
                        <td>MOVIES!</td>
                      </tr>
                      <tr>
                        <td>MSNBC</td>
                        <td>MTV</td>
                        <td> National Geographic</td>
                        <td>NBC Sports Network</td>
                        <td> NBC Universo</td>
                        <td>Newsmax</td>
                      </tr>
                      <tr>
                        <td>Nickelodeon</td>
                        <td>Nick At Nite</td>
                        <td> NFL Network</td>
                        <td> One America News</td>
                        <td>Outdoor</td>
                        <td>OWN</td>
                      </tr>
                      <tr>
                        <td>Oxygen</td>
                        <td>Paramount </td>
                        <td>POP</td>
                        <td>Retirement Living TV</td>
                        <td>RFD</td>
                        <td>Science</td>
                      </tr>
                      <tr>
                        <td>SyFy</td>
                        <td>StartTV</td>
                        <td>TBS</td>
                        <td>Telemundo</td>
                        <td>Tennis Channel</td>
                        <td>TLC</td>
                      </tr>
                      <tr>
                        <td>ThisTV</td>
                        <td>TNT</td>
                        <td>Travel Channel</td>
                        <td>TR3S</td>
                        <td>TR3S</td>
                        <td> TRU TV</td>
                      </tr>
                      <tr>
                        <td>TV One</td>
                        <td>UP</td>
                        <td> USA Network</td>
                        <td>VH1</td>
                        <td>Viceland</td>
                        <td>WE</td>
                      </tr>
                      <tr>
                        <td>Weather Channel</td>
                        <td>World Fishing Network</td>
                        <td>Zee TV</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>

                  <p style={{ fontStyle: "italic" }}>
                    Note: This service provides advertising distribution to US
                    Cable networks only. Your promotional campaign will be
                    managed by TV advertising experts and they will determine
                    which ideal markets will best view your TV ads.
                  </p>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h4>Media Production</h4>
                  <p>
                    Author Reputation Press boasts a team of professional
                    videographers, cinematographers, and video editors who will
                    work together to produce the media material for your TV
                    advertisement. Our production team will be responsible for
                    the creative aspect of your TV ads.
                  </p>

                  <p>See our production rates below:</p>
                  <div style={{ paddingLeft: "1rem" }}>
                    <div style={{ marginTop: "2rem" }}>
                      <h5>Production Package 1</h5>
                      <p>
                        Our team will edit your existing TV ad material
                        (provided you submit it to us in an editable format) and
                        enhance the media with new text, logos, graphics,
                        voiceover and/or high-definition music in accordance
                        with your campaign needs.{" "}
                      </p>
                      <h6>Services Included:</h6>
                      <ul>
                        <li>Voiceover Artist & Studio Time</li>
                        <li>Stock Images (Up To 5)</li>
                        <li>Text & Text Effects</li>
                        <li>Background Music</li>
                        <li>Scene Transitions & Image/Text Transitions</li>
                        <li>Rendering To Broadcast Quality Versions</li>
                        <li>
                          Rendering To QuickTime File for Client via FTP
                          Download
                        </li>
                      </ul>
                    </div>

                    <div style={{ marginTop: "2rem" }}>
                      <h5>Production Package 2</h5>
                      <p>
                        This commercial type combines text, graphics, voiceover,
                        and music in high definition. Note that there are no
                        actors or locations in this package.
                      </p>
                      <h6>Services Included:</h6>
                      <ul>
                        <li>Voiceover Artist & Studio Time</li>
                        <li>2 Revisions</li>
                        <li>Text & Text Effects</li>
                        <li>Background Music</li>
                        <li>Scene Transitions & Image/Text Transitions</li>
                        <li>Rendering To Broadcast Quality Versions</li>
                        <li>
                          Rendering To QuickTime File for Client via FTP
                          Download
                        </li>
                      </ul>
                    </div>

                    <div style={{ marginTop: "2rem" }}>
                      <h5>Production Package 3</h5>
                      <p>
                        This package is a combination of text graphics,
                        voiceover, music and stock images and videos in high
                        definition. No actors or locations are included in this
                        package.
                      </p>
                      <h6>Services Included:</h6>
                      <ul>
                        <li>Voiceover Artist & Studio Time</li>
                        <li>2 Revisions</li>
                        <li>Stock Images & Videos (Up To 5)</li>
                        <li>Text & Text Effects</li>
                        <li>Background Music</li>
                        <li>Scene Transitions & Image/Text Transitions</li>
                        <li>Rendering To Broadcast Quality Versions</li>
                        <li>
                          Rendering To QuickTime File for Client via FTP
                          Download
                        </li>
                      </ul>
                    </div>

                    <div style={{ marginTop: "2rem" }}>
                      <h5>Production Package 4</h5>
                      <p>
                        This type of commercial includes an actor with approval
                        from the client to provide a human touch to it. It will
                        be an endorsement type of TV ad. (Custom quote provided
                        based on motion graphics, opening/end slate.)
                      </p>
                      <h6>Services Included:</h6>
                      <ul>
                        <li>Production Studio Time & Production Crew</li>
                        <li>
                          Actor/Actress from NMS Talent Pool – Hair & Makeup
                        </li>
                        <li>Text/Graphic & Music Changes</li>
                        <li>Teleprompter & Controller</li>
                        <li>Background Music</li>
                        <li>Scene Transitions & Image/Text Transitions</li>
                        <li>Stock Images & Videos If Needed (Up To 5)</li>
                        <li>Rendering To Broadcast Quality Versions</li>
                        <li>
                          Rendering To QuickTime File for Client via FTP
                          Download
                        </li>
                      </ul>
                      <h6>Additional services:</h6>
                      <ul>
                        <li>Casting Sessions</li>
                        <li>Additional Actors</li>
                        <li>On-Location Shoot</li>
                        <li>High End Hollywood Production</li>
                      </ul>
                    </div>

                    <div style={{ marginTop: "2rem" }}>
                      <h5>Production Package 5</h5>
                      <p>
                        This commercial type includes an actor who will
                        demonstrate your product or service on location (1 Day).
                        This uses a large crew who will take multiple shots for
                        the ad. The commercial will also incorporate product
                        shots and/or in-studio shot product demonstrations with
                        on-camera footage and voice over.
                      </p>
                      <h6>Services Included:</h6>
                      <ul>
                        <li>Production Studio Time & Production Crew</li>
                        <li>
                          Actor/Actress from NMS Talent Pool – Hair & Makeup
                        </li>
                        <li>Camera Crews & Travel</li>
                        <li>2 Text/Graphic & Music Changes</li>
                        <li>Teleprompter & Controller</li>
                        <li>Background Music</li>
                        <li>Scene Transitions & Image/Text Transitions</li>
                        <li>Stock Images & Videos If Needed (Up To 5)</li>
                        <li>Rendering To Broadcast Quality Versions</li>
                        <li>
                          Rendering To QuickTime File for Client via FTP
                          Download
                        </li>
                      </ul>
                      <h6>Additional services:</h6>
                      <ul>
                        <li>Casting Sessions</li>
                        <li>Additional Actors</li>
                        <li>On-Location Shoot</li>
                        <li>High End Hollywood Production</li>
                      </ul>
                    </div>

                    <div style={{ marginTop: "2rem" }}>
                      <h5>Production Package 6</h5>
                      <p>
                        This commercial type consists of a high-end brand
                        story-telling that taps actors who will play a role in a
                        scenario that your viewers will identify with, enjoy,
                        and remember. This advertising is proven to have high
                        impact, high conversion, and highly talked about TV
                        commercial results. This package includes scripting, 2
                        primary actors, 2 locations, makeup artist, stylized
                        color correction.
                      </p>
                      <h6>Services Included:</h6>
                      <ul>
                        <li>
                          Production Studio Time & Production Crew to 2
                          Locations
                        </li>
                        <li>
                          2 Actor/Actress from NMS Talent Pool – Hair & Makeup
                        </li>
                        <li>Camera Crews & Travel</li>
                        <li>2 Text/Graphic & Music Changes</li>
                        <li>Teleprompter & Controller</li>
                        <li>Background Music</li>
                        <li>Scene Transitions & Image/Text Transitions</li>
                        <li>Stock Images & Videos If Needed (Up To 5)</li>
                        <li>Rendering To Broadcast Quality Versions</li>
                        <li>
                          Rendering To QuickTime File for Client via FTP
                          Download
                        </li>
                      </ul>
                      <h6>Additional services:</h6>
                      <ul>
                        <li>Casting Sessions</li>
                        <li>Additional Actors</li>
                        <li>On-Location Shoot</li>
                        <li>High End Hollywood Production</li>
                      </ul>
                    </div>

                    <div style={{ marginTop: "2rem" }}>
                      <h5>Production Package 7</h5>
                      <p>
                        This package includes a premium story-telling service
                        along with storyboards, up to 2 weeks of casting
                        sessions, multiple locations, up to 6 actors, 2 days of
                        filming with the full crew, custom motion graphics, and
                        High End Hollywood Production.
                      </p>
                      <h6>Services Included:</h6>
                      <ul>
                        <li>
                          Production Studio Time & Production Crew to 3
                          Locations and 2 Day Studio Rental
                        </li>
                        <li>Up to 4 Actor/Actress (with hair & makeup)</li>
                        <li>Up to 8 Background Extras</li>
                        <li>Camera Crews & Travel</li>
                        <li>Teleprompter & Controller</li>
                        <li>2 Text/Graphic & Music Changes</li>
                        <li>Background Music</li>
                        <li>Scene Transitions & Image/Text Transitions</li>
                        <li>Stock Images & Videos If Needed (Up To 5)</li>
                        <li>High End Hollywood Production</li>
                        <li>Rendering To Broadcast Quality Versions</li>
                        <li>
                          Rendering To QuickTime File for Client via FTP
                          Download
                        </li>
                      </ul>
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

export default PremiumTvAdvertising;
