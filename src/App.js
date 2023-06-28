import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SplashPage from "./pages/SplashPage";
import OnBoardingPage from "./pages/OnBoardingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />}/> 
        <Route path="/onBoarding" element={<OnBoardingPage />}/> 
        <Route path="/main" element={<MainPage />}/> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;