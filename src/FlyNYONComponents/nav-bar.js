import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Data from "./data.json"

export default function SimpleMenu() {
  const [navbar, setNavbaR] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setNavbaR(event.currentTarget);
  };

  const handleClose = () => {
    setNavbaR(null);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollTo){
        const x = document.querySelector('.menu-bar');
        if(window.scrollY > 52 && x){
          x.classList.add('scrolled');
        } else {
          return x && x.classList.remove('scrolled')
        }
      }
    })
  },[])

  return (
    <div className="menu-bar">
      <div className="icon-bar">
        <img src="https://d33wubrfki0l68.cloudfront.net/e38c45434ce2966355c12edc27b98f81243cf428/cad66/_nuxt/img/logo-flynyon.6bda6ef.svg" />
        <i
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <i className="fa fa-bars"></i>
        </i>
      </div>
      <Menu
        id="simple-menu"
        navbar={navbar}
        keepMounted
        open={Boolean(navbar)}
        onClose={handleClose}
      >
        <div className="menu-list">
          <MenuItem id="span" onClick={handleClose}>
            X
          </MenuItem>
          <ul>
            { Data.NavbarItem.Item.map((item, i)=> {
              return <li key={i}><a href={item.link}>{item.name}</a></li>
            })}
            </ul>
            {
              Data.NavbarItem.image.map((item, i) => {
                return <img src={item.url}/>
              })
            }
            
          

          {/* <ul>
            <li onClose={handleClose}>
              <a href="#">Book A Flight</a>
            </li>
            <li>
              <a href="#">Safety</a>
            </li>
            <li>
              <a href="#">NYON SkyClub Membership</a>
            </li>
            <li>
              <a href="#">
                <span>Packges</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Focus Flights</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>New York</span>
              </a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">FAQ's</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">
                Helicopter Charter
                <img src="https://d33wubrfki0l68.cloudfront.net/99d08f49504e82b73e2941778464fb6847a62fe2/4906a/logo-foxtrot-icon.svg"></img>
              </a>
            </li>
          </ul> */}
        </div>
      </Menu>
    </div>
  );
}
