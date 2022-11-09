import React from "react";
import "./footer.css";
import PublicIcon from '@mui/icons-material/Public';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-body">
        <div className="footer-text">
          <div>
            <h3>Useful Links</h3>
            <div className="footer-text1">
              <div>
                <span>Explore</span>
                <span>Marketplace</span>
              </div>
              <div>
                <span>Auction</span>
                <span>Real-Time</span>
              </div>
              <div>
                <span>Stats</span>
              </div>
            </div>
          </div>
          <div className="footer-text1">
            <h3>Legal</h3>
            <div>
              <span>Terms & Conditions</span>
            </div>
            <div>
              <span>Privacy Policy</span>
            </div>
          </div>
          <div className="footer-text1">
            <h3>Help</h3>
            <div>
              <span>Support</span>
            </div>
            <div>
              <span>Contact</span>
            </div>
          </div>
          <div className="footer-text1">
            <h3>Our Newsletter</h3>
            <div >
              <span className="footer-newsemail">Email</span>
              <span className="footer-newsend">Send</span>
            </div>
          </div>
        </div>
        <div className="footer-socioicon">
         <div>
          <PublicIcon/>
          <span style={{marginLeft:"10px",fontSize: "16px",fontWeight: "500"}}>English</span>
         </div>
         <div>
          <span style={{marginRight:"10px",fontSize: "16px",fontWeight: "500"}}>Follow and Stay Updated</span>
          <span className="socioicon"><TelegramIcon/></span>
          <span className="socioicon"><TwitterIcon/></span>
          <span className="socioicon"><InstagramIcon/></span>
         </div>
        </div>
        <p style={{textAlign: "center",margin:"9px",paddingBottom:"10px"}}>@nftbook.io,inc.All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
