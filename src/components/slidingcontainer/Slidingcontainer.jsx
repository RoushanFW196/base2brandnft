import React from 'react';
import "./slidingcontainer.css";
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { ArrowForwardIosSharp } from '@mui/icons-material';






const Slidingcontainer = () => {
  return (
    <div className="Slidingcontainerbox">
     <div className="Slidingcontainer-item">

    <div className="Leftslidepart">
     <div className="leftslideparttext">
     <p>The first NFT marketplace<br/>For Youtube and TikTok creaters</p>
     <p>Buy Sell and Auction Viral Videos as NFT from Your <br/>favourite Creators</p>
     </div>
     <div className="Slidingcontainer-btn">
        <button>Auction</button>
        <button>Marketplace</button>
     </div>
    </div>
     <div className="Rightslidepart">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://plus.unsplash.com/premium_photo-1666323395339-6ab7598938a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span> 
   
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
   </div>





    </div>
  )
}

export default Slidingcontainer;