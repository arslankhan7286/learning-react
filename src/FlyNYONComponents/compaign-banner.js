import React, { Component } from "react";
import CitySelection from "./city-selection";
import Media from "./FlyNYON-media";
import SimpleModal from "./footer";
import Header from "./header";
import SimpleMenu from "./nav-bar";
class Compaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: new Date().toLocaleString()
    };
  }
  render() {
    return (
      <div>
        <div className="compaign-banner">
          <div className="absolute">
            <video className="videoTag" autoPlay loop muted>
              <source
                src="/video/video-flynyon-homepage.mp4"
                type="video/mp4"
              /> 
              <source
              src="/video/video-flynyon-homepage.OGV"
              type="video/OGV"
            />
            <source
                src="/video/video-flynyon-homepage.WEBM"
                type="video/WEBM"
              />
            </video>
          </div>
          <div className="position">
            <Header />
            <SimpleMenu />
            <CitySelection />
            <Media />
            <SimpleModal />
            {/* <FooterMenu /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Compaign;
