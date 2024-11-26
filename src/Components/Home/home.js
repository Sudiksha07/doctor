import React from "react";
import "../Home/home.css";
import RespiratoryCards from "../DiagnosHistory/respiratory";
import TemperatureCards from "../DiagnosHistory/temperate";
import HeartRateCards from "../DiagnosHistory/heartrate";
import  DiagnosticList from "../DiagnosticList/DiagnosticList";
import Index from "../PersonalDetails";
import LabResults from "../LabResult";
const HomePage = () => {
  return (
    <div className="container">
      
      <div className="left-column">
        <div className="left-top"></div>
        <div className="left-middle"><RespiratoryCards/>
      <TemperatureCards/>
      <HeartRateCards/></div>
        <div className="left-bottom">
            <DiagnosticList/>
        </div>
      </div>

      
      <div className="right-column">
        <div className="right-top"><Index/></div>
        <div className="right-bottom"><LabResults/></div>
      </div>
    </div>
  );
};

export default HomePage;

