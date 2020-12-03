import React, { Component } from "react";
import Data from "./data.json";
class Media extends Component {
  constructor(props) {
    super(props);
    this.selection = React.createRef();

    this.state = {};
  }
  scrollSmooth1 = () => {
    const moveIntoView = document.querySelector(".selection");
    moveIntoView.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  handleClick = () => {};
  render() {
    return (
      <div className="FlyNyon-media">
        <div className="media-section">
          <h5>AS SEEN ON:</h5>
          {Data.FlyNYONmedia.logo.map((item) => {
            return (
              <a href="#">
                <img src={item.url} />
              </a>
            );
          })}
          <h1>THE ULTIMATE HELICOPTER PHOTO EXPERIENCE</h1>
          <p>
            FlyNYON takes the thrill of shooting images from a helicopter and
            makes it accessible to everyone. Flights are sold by the
            seat. Select a city above for an ultimate aerial photo experience.
          </p>
          <button onClick={this.scrollSmooth1}>
            <span>DOORS ON OR DOORS OFF</span>
            <br /> <h2>BOOK NOW</h2>
          </button>
          <br />
        </div>
        <div className="NYON-family">
          <h1>WHAT MAKES US DIFFERENT?</h1>
          <p>
            The NYON family has worked tirelessly to mold the photo-flight into
            the number one ranked helicopter experience in New
            York City. Last year, NYON safely flew over 50,000 passengers -
            becoming the fastest growing aviation brand in the
            experience category. Thanks to optimizations to our business model
            and economies of scale, NYON is now able to offer
            more memorable experiences at better prices to passengers.
          </p>
          <div className="OPTIONAL-ADD-ONS">
            <div className="container">
              <div className="experience-category">
               <h3></h3>
                <h3>FLYNYON NYC PHOTO FLIGHT</h3>
                <h3 id="traditional">TRADITIONAL NYC HELICOPTER TOUR</h3>
              </div> 
              {Data.FlyNYONmedia.table.map((item, i) => {
                if (i === Data.FlyNYONmedia.table.length - 1) {
                  return (
                    <div className="experience-category">
                      <h3 id="rentals">{item.heading}</h3>
                      <p id="rentals">{item.firstInfo}</p>
                      <p id="traditional" className="rentals">
                        {item.secondInfo}
                      </p>
                    </div>
                  );
                }
                return (
                  <div className="experience-category">
                    <h3>{item.heading}</h3>
                    <p>{item.firstInfo}</p>
                    <p id="traditional">{item.secondInfo}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="ultimate">
            <div className="container">
              <div className="create-enduring">
                <div className="deeply">
                  <div className='responsive'></div>
                </div>
                <div className="sweeping-view">
                  <h1>
                    THE FLYNYON FAMILY TRADITION
                  </h1>
                  <p>
                    Our inspiration to design and share the ultimate helicopter
                    experience is deeply rooted in three generations of aviation
                    heritage. We proudly create enduring memories, one sweeping
                    view at a time.
                  </p>
                  <button onClick={this.scrollSmooth1}>
                    <span>DOORS ON OR DOORS OFF</span>
                    <br /> <h2>BOOK NOW</h2>
                  </button>
                  <br />
                </div>
                <div className="ultimate-helicopter">
                  <img src="/images/photo-doors-off-flight.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="FlyNYON">
          <div className=" Reserved-FlyNYON ">
            <p>2020 © All Rights Reserved. FlyNYON is a NYONair company</p>
          </div>
          <div className="Terms-Conditions">
            <ul>
              {Data.ReservedItem.reserved.map((item, i) => {
                return (
                  <li key={i}>
                    <a href="#">{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Media;
