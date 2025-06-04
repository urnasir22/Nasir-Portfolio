import React from "react";
import "./EducationCard.css";

const EducationCard = ({ degree, theme }) => {
  return (
    <div className="education-card" style={{ backgroundColor: theme.card }}>
      <div className="education-card-left">
        <img 
          src={degree.logo_path ? require(`../../../public/images/${degree.logo_path}`) : ""} 
          alt={degree.alt_name} 
          className="education-logo"
        />
      </div>
      <div className="education-card-right">
        <h3 className="education-title" style={{ color: theme.text }}>
          {degree.title}
        </h3>
        <p className="education-subtitle" style={{ color: theme.secondaryText }}>
          {degree.subtitle}
        </p>
        <p className="education-duration" style={{ color: theme.secondaryText }}>
          {degree.duration}
        </p>
        <p className="education-description" style={{ color: theme.text }}>
          {degree.descriptions.join(" ")}
        </p>
        {degree.website_link && (
          <a
            href={degree.website_link}
            target="_blank"
            rel="noopener noreferrer"
            className="education-link"
            style={{ color: theme.accentColor }}
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

export default EducationCard;