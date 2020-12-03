import React, { Component } from "react";
import { Link } from "react-router-dom";
import Data from "./data.json";
class CitySelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DoorsOff: true,
      DoorsOn: false,
      FocusFlight: false
    };
  }
  scrollSmooth = () => {
    const moveIntoView = document.querySelector(".selection");
    moveIntoView.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  render() {
    console.log(this.state);
    const { DoorsOff, DoorsOn, FocusFlight } = this.state;
    return (
      <div className="city-selection">
        <h1>
          FLYNYON CREATES ENDURING MEMORIES THROUGH HELICOPTER EXPERIENCES
        </h1>
        <button onClick={this.scrollSmooth}>
          <span>DOORS ON OR DOORS OFF</span>
          <br /> <h2>BOOK NOW</h2>
        </button>
        <br />
        <button id="button" onClick={(e) => this.scrollSmooth()}>
          <h2>
            BY NOW SCHEDULE
            <br />
            LATER
          </h2>
        </button>
        <br />
        <h4>
          <a href="#">HOW WE DO THINGS DIFFERENTLY</a>
        </h4>
        <div className="logo">
          {Data.CitySelection.logo.map((item) => {
            return <img src={item.url} />;
          })}
          <p>
            FlyNYON has held the Trip Advisor Certificate Of Excellence Award
            for two consecutive years and is the proud recipient of the Eastern
            Region Helicopter Council (ERHC) for our unwavering commitment to
            Ground and Flight Safety. NYON Pilots hold Bell 206 Factory School
            Certificates.
          </p>
        </div>
        <div className="selection">
          <h1>
            FLY IN A HELICOPTER ABOVE NYC
            <br />
            DOORS-OFF OR DOORS-ON
          </h1>
          <button
            id="DOORS-BTN"
            onClick={() =>
              this.setState({
                DoorsOff: true,
                DoorsOn: false,
                FocusFlight: false
              })
            }
            className={DoorsOff ? "button-active" : ""}
          >
            DOORS-OFF
          </button>
          <button
            id="DOORS-BTN"
            onClick={() =>
              this.setState({
                DoorsOff: false,
                DoorsOn: true,
                FocusFlight: false
              })
            }
            className={DoorsOn ? "button-active" : ""}
          >
            DOORS-ON
          </button>
          <button
            id="DOORS-BTN"
            onClick={() =>
              this.setState({
                DoorsOff: false,
                DoorsOn: false,
                FocusFlight: true
              })
            }
            className={FocusFlight ? "button-active" : ""}
          >
            FOCUS-FLIGHT
          </button>
          <br />

          {/* PRODUCT-CARD === SECTION => 1 */}

          <div className={`${DoorsOff ? " show " : "hide"} product-card`}>
            <div className="nyc-experience">
              <div className="NYC-product-card">
                <div className="DOORS-img">
                  <img src="/images/background-location-new-york.jpg" />
                  <div className="NYC-Flight-ornament">
                    <img src="/images/nyc-exp doors-off ornament lights.png" />
                  </div>
                  <div className="NYC-Flight">
                    <h4>NYC EXPERIENCE</h4>
                    <p id="nyc">$298</p>
                    <h3>$119/SEAT</h3>
                    <p id="flight">16 MINUTE DOORS-OFF FLIGHT</p>
                  </div>
                  <div className="btn">
                  <Link to ='/book-now'>
                    <button>
                    BOOK NOW</button>
                    </Link>
                    <button
                      className="btn-green"
                      onClick={() => this.clickHandler()}
                    >
                      BY NOW
                      <br /> SCHEDULE LATER
                    </button>
                    <br />
                  </div>
                </div>
              </div>
              <div className="NYC-product-card">
                <div className="DOORS-img">
                  <img src="/images/background-location-nyc-classic.jpg" />
                  <div className="NYC-Flight-ornament">
                    <img src="/images/doors-off ornament lights.png" />
                  </div>
                  <div className="NYC-Flight">
                    <h4>NYC CLASSIC</h4>
                    <p id="nyc">$549</p>
                    <h3>$220/SEAT</h3>
                    <p id="flight">30 MINUTE DOORS-OFF FLIGHT</p>
                  </div>
                  <div className="btns">
                    <button onClick={() => this.onClick()}>BOOK NOW </button>
                    <button
                      className="btns-green"
                      onClick={() => this.onClick()}
                    >
                      BY NOW
                      <br /> SCHEDULE LATER
                    </button>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCT-CARDS === SECTION => 2 */}

          <div className={`${DoorsOn ? "show" : "hide"} product-card`}>
            <div className="nyc-experience">
              <div className="NYC-product-card">
                <div className="DOORS-img">
                  <img src="/images/background-location-nyc-intro.jpg" />
                  <div className="NYC-Flight-ornament">
                    <img src="/images/doors-on ornament.png" />
                  </div>
                  <div className="NYC-Flight">
                    <h4>NYC INTRO</h4>
                    <p id="nyc">$309</p>
                    <h3>$105/SEAT</h3>
                    <p id="flight">15 MINUTE DOORS-ON FLIGHT</p>
                  </div>
                  <div className="btn">
                    <button onClick={() => this.onClick()}>BOOK NOW </button>
                    <button
                      className="btn-green"
                      onClick={() => this.onClick()}
                    >
                      BY NOW
                      <br /> SCHEDULE LATER
                    </button>
                    <br />
                  </div>
                </div>
              </div>
              <div className="NYC-product-card">
                <div className="DOORS-img">
                  <img src="/images/background-location-nyc-vip.jpg" />
                  <div className="NYC-Flight-ornament">
                    <img src="/images/doors-on ornament.png" />
                  </div>
                  <div className="NYC-Flight">
                    <h4>NYC VIP</h4>
                    <p id="nyc">$469</p>
                    <h3>$159/SEAT</h3>
                    <p id="flight">27 MINUTE DOORS-ON FLIGHT</p>
                  </div>
                  <div className="btns">
                    <button onClick={() => this.onClick()}>BOOK NOW </button>
                    <button
                      className="btns-green"
                      onClick={() => this.onClick()}
                    >
                      BY NOW
                      <br /> SCHEDULE LATER
                    </button>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCT-CARDS === SECTION => 3 */}

          <div className={`${FocusFlight ? "show" : "hide"} product-card`}>
            <div className="nyc-experience">
              <div className="NYC-product-card">
                <div className="DOORS-img">
                  <img src="/images/background-location-July-4th.jpg" />
                  <div className="NYC-Flight-ornament">
                    <img src="/images/doors-off ornament lights.png" />
                  </div>
                  <div className="NYC-Flight" id="lights">
                    <h4>FIREWORKS:JULY 4TH</h4>
                    <p id="nyc">$1199</p>
                    <h3>$408/SEAT</h3>
                    <p id="flight">30 MINUTE DOORS-OFF FLIGHT</p>
                  </div>
                  <div className="btn">
                    <button onClick={() => this.onClick()}>BOOK NOW </button>
                    <button
                      className="btn-green"
                      onClick={() => this.onClick()}
                    >
                      BY NOW
                      <br /> SCHEDULE LATER
                    </button>
                    <br />
                  </div>
                </div>
              </div>
              <div className="NYC-product-card">
                <div className="DOORS-img">
                  <img src="/images/background-location-newark-airport-@2x.jpg" />
                  <div className="NYC-Flight-ornament">
                    <img src="/images/doors-off ornament lights.png" />
                  </div>
                  <div className="NYC-Flight" id="lights">
                    <h4>TRIBUTES IN LIGHTS:9/11</h4>
                    <p id="nyc">$469</p>
                    <h3>$699/SEAT</h3>
                    <p id="flight">30 MINUTE DOORS-OFF FLIGHT</p>
                  </div>
                  <div className="btns">
                    <button onClick={() => this.onClick()}>BOOK NOW </button>
                    <button
                      className="btns-green"
                      onClick={() => this.onClick()}
                    >
                      BY NOW
                      <br /> SCHEDULE LATER
                    </button>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CitySelection;
