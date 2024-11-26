import React, { useEffect, useState } from 'react';
import '../PersonalDetails/index.css';
import { fetchData } from '../../Service/api';

import BirthIcon from '../../assets/images/BirthIcon.png'; 
import FemaleIcon from '../../assets/images/FemaleIcon.png';
import InsuranceIcon from '../../assets/images/InsuranceIcon.png';
import PhoneIcon from '../../assets/images/PhoneIcon.png';
import Profile from '../../assets/images/Layer 2.png';
const Index = () => {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const getPatientDetails = async () => {
      try {
        const data = await fetchData();
        if (data && data.length > 0) {
          setPatient(data[0]);
        } else {
          console.log("No data found for Jessica Taylor.");
        }
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    getPatientDetails();
  }, []);

  return (
    <div className="outer-div">
      {patient ? (
        <>
          <div className="image-container">
            <img src={Profile} alt="patient" className="patient-image" />
            <div className="patient-name">{patient.name}</div>
          </div>

          <div className="patient-details">
            {/* Date of Birth Section */}
            <div className="detail-item">
              <div className="icon-container">
                <img src={BirthIcon} className="icon" />
              </div>
              <div className="detail-text">
                <div className="heading">Date of Birth</div>
                <div className="response">{patient.date_of_birth}</div>
              </div>
            </div>

            {/* Gender Section */}
            <div className="detail-item">
              <div className="icon-container">
                <img src={FemaleIcon} className="icon" />
              </div>
              <div className="detail-text">
                <div className="heading">Gender</div>
                <div className="response">{patient.gender}</div>
              </div>
            </div>

            {/* Contact Number Section */}
            <div className="detail-item">
              <div className="icon-container">
                <img src={PhoneIcon} className="icon" />
              </div>
              <div className="detail-text">
                <div className="heading">Contact Number</div>
                <div className="response">{patient.phone_number}</div>
              </div>
            </div>

            {/* Emergency Contact Section */}
            <div className="detail-item">
              <div className="icon-container">
                <img src={PhoneIcon}  className="icon" />
              </div>
              <div className="detail-text">
                <div className="heading">Emergency Contact</div>
                <div className="response">{patient.emergency_contact}</div>
              </div>
            </div>

            {/* Insurance Type Section */}
            <div className="detail-item">
              <div className="icon-container">
                <img src={InsuranceIcon}  className="icon" />
              </div>
              <div className="detail-text">
                <div className="heading">Insurance Type</div>
                <div className="response">{patient.insurance_type}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Index;
