import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import OnBoardingPage from "./pages/OnBoardingPage";
import HomePage from './pages/HomePage';
import MapPage from "./pages/MapPage";
import MarketPage from "./pages/MarketPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />}/> 
        <Route path="/onboarding" element={<OnBoardingPage />}/> 
        <Route path="/home" element={<HomePage />}/> 
        <Route path="/map" element={<MapPage />}/> 
        <Route path="/market/:marketIndex" element={<MarketPage />}/> 
      </Routes>
    </BrowserRouter>
  );
};
export default App;