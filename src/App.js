import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashPage from "./pages/SplashPage";
import OnBoardingPage from "./pages/OnBoardingPage";
import MapPage from "./pages/MapPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />}/> 
        <Route path="/onboarding" element={<OnBoardingPage />}/> 
        <Route path="/map" element={<MapPage />}/> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;