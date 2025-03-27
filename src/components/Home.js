import React from "react";
import Carousel from "./Carousel";
import About from "./About"; // Import About component
import Services from "./Services";
import Doctors from "./Doctors";
import Mission from "./Mission";
// import Prediction from "./Prediction";
import DiseaseInfo from "./DiseaseInfo";
// import Prediction from "./Prediction";

const Home = () => {
  return (
    <div>
      <Carousel />
      <About /> {/* Display About page inside Home page */}
      <Services />
      <Mission />
      <DiseaseInfo />
      {/* <Prediction /> */}
      <Doctors />
      {/* <Prediction /> */}
    </div>
  );
};

export default Home;
