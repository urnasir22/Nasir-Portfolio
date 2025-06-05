import React from 'react';
import './SplashScreen.css';

const SplashScreen = ({ theme }) => {
  return (
    <div className="splash-container" style={{ backgroundColor: theme.splashColor }}>
      <div className="splash-content">
        <h1 className="splash-text" style={{ color: theme.text }}>
          Md Nasir
        </h1>
        <h2 className="splash-subtitle" style={{ color: theme.secondaryText }}>
          Senior Software Quality Analyst
        </h2>
      </div>
    </div>
  );
};

export default SplashScreen;