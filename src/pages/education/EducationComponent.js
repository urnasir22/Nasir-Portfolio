import React from "react";
import EducationCard from "../../components/educationCard/EducationCard";
import { degrees, certifications } from "../../portfolio";
import "./EducationComponent.css";

const EducationComponent = ({ theme }) => {
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <h1 className="educations-header" style={{ color: theme.text }}>
          Education & Certifications
        </h1>
      </div>
      <div className="educations-body-div">
        {degrees.degrees && degrees.degrees.length > 0 && (
          <div className="degrees-container">
            <h2 style={{ color: theme.text }}>Education</h2>
            {degrees.degrees.map((degree, index) => (
              <EducationCard key={index} degree={degree} theme={theme} />
            ))}
          </div>
        )}
        
        {certifications.certifications && certifications.certifications.length > 0 && (
          <div className="certifications-container">
            <h2 style={{ color: theme.text }}>Certifications</h2>
            <div className="certifications-list">
              {certifications.certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <h3>{cert.title}</h3>
                  <p>{cert.subtitle}</p>
                  <a 
                    href={cert.certificate_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: theme.accentColor }}
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationComponent;