import React from 'react';
import '../DiagnosHistory/Card.css'; 

const Card = ({ image, subHeading, background,heading,cardname }) => {
  return (
    <div className="card"   style={{
        background: background || 'transparent', // Apply background if passed, else transparent
      }}>
      {image && <img src={image} alt="Card Image" className="card-image" />}
      {cardname && <h4 className="card-subheading">{cardname}</h4>}
      {heading && <h2 className="card-heading">{heading}</h2>}
      
      {subHeading && <h4 className="card-subheading">{subHeading}</h4>}
    </div>
  );
};

export default Card;
