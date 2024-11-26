import React, { useEffect, useState } from 'react';
import Card from '../DiagnosHistory/card';  // Import the Card component
import { fetchData } from '../../Service/api';
import respiratory from '../../assets/images/respiratory.png';
const RespiratoryCards = () => {
  const [respiratoryData, setRespiratoryData] = useState([]);

  
  useEffect(() => {
   
    const fetchRespiratoryData = async () => {
      try {
        const response = await fetchData(); // Fetch lab results
           console.log(response[0].diagnosis_history[0].respiratory_rate);

        if (response && response[0].diagnosis_history[0].respiratory_rate) {
          setRespiratoryData(response[0].diagnosis_history[0].respiratory_rate);
          console.log("lab result found")
        } else {
          console.log("No lab results found.");
        }
      } catch (error) {
        console.error("Error fetching lab results:", error);
      }
    };
    
    

    fetchRespiratoryData();
  }, []); // Empty dependency array means this will run once on mount

  return (
    <div className="respiratory-cards-container">
        
  {respiratoryData ? (
        <>
        <Card
        cardname="Respiratory Rate"
        background="#E0F3FA "
        image={respiratory}
          heading={`${respiratoryData.value}bpm`}
          subHeading={respiratoryData.levels}
        />
        {console.log(respiratoryData.levels)} {/* Log outside JSX */}
      </>
      ) : (
        <p>No respiratory data available</p>
      )}
    </div>
  );
};

export default RespiratoryCards;
