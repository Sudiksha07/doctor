import React, { useEffect, useState } from 'react';
import '../LabResult/index.css';
import { fetchData } from '../../Service/api';
import download from '../../assets/images/download.png';


const LabResults = () => {
  const [labResults, setLabResults] = useState([]);

  useEffect(() => {
   
    const getLabResults = async () => {
      try {
        const response = await fetchData(); // Fetch lab results


        if (response && response[0].lab_results) {
          setLabResults(response[0].lab_results);
          console.log("lab result found")
        } else {
          console.log("No lab results found.");
        }
      } catch (error) {
        console.error("Error fetching lab results:", error);
      }
    };
    
    getLabResults(); // Call the function to fetch lab results
  }, []);

  return (
<div className="lab-results-container">
      <h2 className="heading">Lab Results</h2>
      <div className="lab-results-list">
        {labResults.length > 0 ? (
          labResults.map((result, index) => (
            <div key={index} className="lab-result-item">
              <span className="result-name">{result}</span>
              <img
                src={download} // Sample download icon, replace it with your actual image URL
                alt="Download"
                className="download-icon"
              />
            </div>
          ))
        ) : (
          <div>No results available</div>
        )}
      </div>
    </div>
  );
};

export default LabResults;

