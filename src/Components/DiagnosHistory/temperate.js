import React, { useEffect, useState } from 'react';
import Card from '../DiagnosHistory/card';  // Import the Card component
import { fetchData } from '../../Service/api';
import temperature from '../../assets/images/temperature.png';
const TemperatureCards = () => {
  const [temperatureData, settemperatureData] = useState([]);

  
  useEffect(() => {
   
    const fetchtemperatureData = async () => {
      try {
        const response = await fetchData(); // Fetch lab results
           console.log(response[0].diagnosis_history[0].temperature);

        if (response && response[0].diagnosis_history[0].temperature) {
          settemperatureData(response[0].diagnosis_history[0].temperature);
          console.log("lab temp result found")
        } else {
          console.log("No lab temp results found.");
        }
      } catch (error) {
        console.error("Error fetching lab results:", error);
      }
    };
    
    

    fetchtemperatureData();
  }, []); 
  return (
    <div className="respiratory-cards-container">
        
  {temperatureData ? (
        <>
        <Card
        cardname="Temperature"
        background="#FFE6E9 "
        image={temperature}
          heading={`${temperatureData.value}F`}
          subHeading={temperatureData.levels}
        />
        {/* {console.log(temperatureData.levels)}  */}
      </>
      ) : (
        <p>No respiratory data available</p>
      )}
    </div>
  );
};

export default TemperatureCards;
