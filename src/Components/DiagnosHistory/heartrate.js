import React, { useEffect, useState } from 'react';
import Card from '../DiagnosHistory/card';  // Import the Card component
import { fetchData } from '../../Service/api';
import  HeartRate from '../../assets/images/HeartBPM.png';
const HeartRateCards = () => {
  const [HeartRateData, setHeartRateData] = useState([]);

  
  useEffect(() => {
   
    const fetchHeartRateData = async () => {
      try {
        const response = await fetchData(); // Fetch lab results
           console.log(response[0].diagnosis_history[0].heart_rate);

        if (response && response[0].diagnosis_history[0].heart_rate) {
   setHeartRateData(response[0].diagnosis_history[0].heart_rate)

          console.log("lab temp result found")
        } else {
          console.log("No lab temp results found.");
        }
      } catch (error) {
        console.error("Error fetching lab results:", error);
      }
    };
    
    

    fetchHeartRateData();
  }, []); 
  return (
    <div className="respiratory-cards-container">
        
  { HeartRateData ? (
        <>
        <Card
        cardname="Heart Rate"
        background="#FFE6F1 "
        image={HeartRate}
          heading={`${HeartRateData.value}bpm`}
          subHeading={HeartRateData.levels}
        />

      </>
      ) : (
        <p>No respiratory data available</p>
      )}
    </div>
  );
};

export default HeartRateCards;
