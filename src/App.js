import React, { useState, useEffect } from 'react';
import SplashScreen from './containers/SplashScreen';
import MainBody from './containers/mainBody/MainBody';
import { settings } from './portfolio';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500); // Splash screen duration
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {settings.isSplash && showSplash ? <SplashScreen /> : <MainBody />}
    </div>
  );
}

export default App;