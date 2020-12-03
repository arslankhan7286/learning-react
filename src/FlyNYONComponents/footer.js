import React, { Component } from "react";
import Footer from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function FooterMenu() {
  const [navbar, setFooter] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setFooter(event.currentTarget);
  };

  const handleClose = () => {
    setFooter(null);
  };
  const handleChange = () => {};
  return (
  <div class="footer">
      <div className="footer-homepage">
        <div className="footer-icons">
          <i class="fa fa-facebook">
            <a href="#"></a>
          </i>
          <i class="fa fa-instagram">
            <a href="#"></a>
          </i>
          <i class="fa fa-snapchat">
            <a href="#"></a>
          </i>
          <i class="fa fa-twitter">
            <a href="#"></a>
          </i>
          <i class="fa fa-youtube" id="youtube">
            <a href="#"></a>
          </i>
          <i class="fa fa-tiktok">
            <a href="#"></a>
          </i>
          <span>@FlyNYON</span>
        </div>
        <p>
          Questions? Call us at <a href>1-855-696-6247</a>
        </p>
      </div>
      <div class="comment-buttton">
        <i
          aria-controls="footer-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <i class="fa fa-comment"></i>
          <i class="fas fa-smile-beam"></i>
        </i>
      </div>

    <div class='box-section'>
      <Footer class="abc"
        id="footer-menu"
        navbar={navbar}
        keepMounted
        open={Boolean(navbar)}
        onClose={handleClose}
      >
        <div className="message-box">
          <h3>
            Send a message
            <br />
            <br />
            How can we help? <br />
            <span>We usually respond in a few hours</span>
          </h3>
          <br />
          <input type="text" onChange={handleChange} placeholder="Name" />
          <br />
          <input type="text" onChange={handleChange} placeholder="Subject" />
          <br />
          <input
            type="text"
            onChange={handleChange}
            placeholder="Email address"
          />
          <br />
          <input
            id="text-message"
            type="text"
            onChange={handleChange}
            placeholder="How can we help?"
          />
          
          <br />
          <button onClick={() => this.onClick()}> Send a message </button>
        </div>
        <MenuItem id="Item" onClick={handleClose}>
          X
        </MenuItem>
      </Footer>
    </div>
  </div>
  );
}

// // export default Footer;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// export default function SimpleModal() {
//   const classes = useStyles();
//   // getModalStyle is not a pure function, we roll the style only on the first render
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const body = (
//     <div style={modalStyle} className={classes.paper}>
//       <h2 id="simple-modal-title">Text in a modal</h2>
//       <p id="simple-modal-description">
//         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//       </p>
//       <SimpleModal />
//     </div>
//   );

//   return (
//     <div>
//     <div class="footer">
//            <div className="footer-homepage">
//              <div className="footer-icons">
//                <i class="fa fa-facebook">
//                  <a href="#"></a>
//                </i>
//                <i class="fa fa-instagram">
//                  <a href="#"></a>
//                </i>
//                <i class="fa fa-snapchat">
//                  <a href="#"></a>
//                </i>
//                <i class="fa fa-twitter">
//                  <a href="#"></a>
//                </i>
//                <i class="fa fa-youtube" id="youtube">
//                  <a href="#"></a>
//                </i>
//               <i class="fa fa-tiktok">
//                 <a href="#"></a>
//               </i>
//             <span>@FlyNYON</span>
//             </div>
//             <p>
//              Questions? Call us at <a href>1-855-696-6247</a>
//            </p>
//       </div>
      
//       <div class="comment-buttton">
//          <i
//           onClick={handleOpen}
//         >
//           <i class="fa fa-comment"></i>
//         </i>
//       </div>
//   </div>
//       <div class='footer-section'>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         {body}
//       </Modal>
//       </div>
// </div>
//   );
// }