import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import WatchLaterTwoToneIcon from "@mui/icons-material/WatchLaterTwoTone";
import SurroundSoundIcon from "@mui/icons-material/SurroundSound";
import GavelSharpIcon from "@mui/icons-material/GavelSharp";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-items">
        <div>
          <span className="header-logo">NFTBOOK.IO</span>
        </div>
        <div style={{width: "215px",height: "31px",border: "1px solid gray",borderRadius: "10px" ,"-webkit-box-shadow": "4px 14px 5px -9px rgba(207,206,219,1)",
    "-moz-box-shadow": "4px 14px 5px -9px rgba(207,206,219,1)",
     "box-shadow": "4px 14px 5px -9px rgba(207,206,219,1)"}}>
          <span style={{color:"#de4e4e"}}><SearchIcon /></span>
          <span><input style={{border:"none",borderRadius:"5px"}} type="search" placeholder="Search"/></span>
        </div>

        <div>
          <span style={{color:"#de4e4e"}}><SearchIcon /></span>
          <span style={{padding:"0px 5px"}}>Explore</span>
        </div>
        <div>
         <span style={{color:"#de4e4e"}}><GavelSharpIcon /></span>
         <span style={{padding:"0px 5px"}}>Auction</span>
        </div>

        <div>
          <span style={{color:"#de4e4e"}}><SurroundSoundIcon /></span>
          <span style={{padding:"0px 5px"}}>Marketplace</span>
        </div>

        <div>
          <span style={{color:"#de4e4e"}}> <EqualizerIcon /></span>
          <span style={{padding:"0px 5px"}}>Stats</span>
        </div>

        <div>
        <span style={{color:"#de4e4e"}}><WatchLaterTwoToneIcon/></span>
          <span style={{padding:"0px 5px"}}> Activity</span>
        </div>

        <div>
          <button
            style={{
              color: "white",
              backgroundColor: "#ff3333",
              padding: "5px 10px",
              fontWeight: "500",
              border:"none"
            }}
          >
            Connect wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
