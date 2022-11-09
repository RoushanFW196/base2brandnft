import React,{useState} from "react";
import "./creator.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Creatorslide from "./Creatorslide.jsx";
const Creator = () => {
 const[bgcolor,setBgcolor]=useState(false)














  return (
    <>
    <div className="creatorcontainer">
      <div className="creatorheading">
        <div style={{marginRight:"20px"}}>
          <h2>Trending Creators</h2>
        </div>
        <div style={{border:"1px solid gray"}}>
          <button className="creatorbtn" onClick={()=>setBgcolor(!bgcolor)}>
         
           {bgcolor==false? <YouTubeIcon style={{color:"red",backgroundColor:"#ff9999"}}/>:(<YouTubeIcon style={{color:"red"}}/>)}
          </button>
          <button className="creatorbtn" onClick={()=>setBgcolor(!bgcolor)}>
          {bgcolor? <img style={{width:"22px",height:"24px",backgroundColor:"#ff9999"}}src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"/>:(<img style={{width:"22px",height:"24px"}}src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"/>)}
          </button>
        </div>
      </div>
    </div>
    <Creatorslide/>
    </>
  );
};

export default Creator;
