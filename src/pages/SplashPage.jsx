import React from 'react';
import PageWrapper from "../components/PageWrapper/PageWrapper";
import SplashBody from "../components/Splash/SplashBody";
import LongButton from "../components/Button/LongButton";

const SplashPage = () => {
  return (
    <PageWrapper>
      <SplashBody />
      <LongButton
        text="시장 가장!"
        navigationPath="/onBoarding"
      />
    </PageWrapper>
  );
};

export default SplashPage;