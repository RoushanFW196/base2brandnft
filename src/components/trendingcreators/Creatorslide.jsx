import React, { useState, useEffect } from "react";

const Creatorslide = () => {
  const [creators, setCreators] = useState();
  let ignore = false;
  const getCreators = async () => {
    try {
      const getdata = await fetch(
        "https://random-data-api.com/api/v2/users?size=3&is_xml=true"
      );
      const getUser = await getdata.json();
      console.log("getuser", getUser);
      setCreators(getUser);
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    getCreators();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="container">
     {/* <div className="creatorslidecontainer"> */}
      {/* <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1608463026422-8f43ab4ebac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      


    </div>
  );
};

export default Creatorslide;
