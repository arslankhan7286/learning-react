import React, { Component } from "react";
import SimpleModal from "./footer";
import Header from "./header";
import SimpleMenu from "./nav-bar";
class BookNow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onclickHandler = () =>{
    const moveIntoView = document.querySelector(".skyline");
    moveIntoView.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }
  render() {
    return (
        <div>
      <div className="book-now">
          <div className='panel'>
        <div className="flynyon-logo">
          <img src="https://d33wubrfki0l68.cloudfront.net/e38c45434ce2966355c12edc27b98f81243cf428/cad66/_nuxt/img/logo-flynyon.6bda6ef.svg" />
        </div>
          <div className='log-out'>
          <button type='button' onClick={this.state.clickHandler}> Log Out </button>
        </div>
        </div>
        <div className="description">
          <h3>Book Your Flight</h3>
          <h1>NYC EXPERIENCE</h1>
          <h3 id="departs">
            $298<span>$104/SEAT</span>
          </h3>
          <p>16 - 19 Minute Doors-Off Flight</p>
          <p>Departs from NYON Terminal in NJ</p>
          <p id='voucher'>
            <span>
              VOUCHERS PURCHASED DURING THIS PROMOTION REMAIN VALID FOR TWO
              YEARS!
            </span>
          </p>
        </div>
        <button onClick={() => this.onclickHandler()}>
          <span>Ready to fly?</span>
          <br /> <h2>BooK Your Flight</h2>
        </button>
        <img src="/images/background-location-Hudson-River-Autumn-Foliage-@2x.jpg" />
        <div className='downtown'>
        <p className='skyline'>
          This 16-minute helicopter flight offers signature downtown skyline
          views from a distinct vantage point that gets you up close and
          personal with Lady Liberty like no one else.
        </p>
        <p>
          Your experience starts at the NYON Terminal, an amazing 10,000 square
          foot space that features helicopter fuselage with an interactive
          floor, and relaxing lounge areas featuring spectacular flight footage
          from around the country and local food and drinks.
        </p>
        <p>
          Next, your group meets with your designated pilot to preview your
          flight path and hear expert tips and advice so that you have the best
          experience possible. Within just a short two minutes after takeoff,
          NYC will be in your sight line so have your camera ready to capture
          amazing downtown landmarks. There is no doubt that you will want to do
          it all over again and book a longer flight next time!
        </p>
        <h3>What you'll see on a 16 minute doors-off flight</h3>
        <p>
          Statue of Liberty
          <br />
          Ellis Island
          <br />
          Wall St
          <br />
          Freedom Tower
          <br />
          9/11 Memorial
          <br />
          The Oculus
          <br />
          Lower Manhattan Money Shot
          <br />
          Brooklyn Bridge
        </p>
        <p className="nyon-saftey">
          See more on a Classic 30 Minute doors-off flight Read about NYON
          Safety Culture
        </p>
        <p><strong>DYNAMIC PRICING:</strong> Certain time slots may be priced higher due to surging demand. If you are redeeming a gift card, you will be subject to these surge fares when you schedule your flight. To avoid higher fares, we recommend booking a few days in advance.</p>
      </div>
      </div>
      <SimpleModal />
      </div>
    );
  }
}

export default BookNow;
