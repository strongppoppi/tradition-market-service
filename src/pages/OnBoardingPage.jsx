import React from 'react';
import PageWrapper from "../components/PageWrapper/PageWrapper";
import OnBoarding from "../components/OnBoarding/OnBoarding";
import LongButton from "../components/Button/LongButton";

const OnBoardingPage = () => {
  return (
    <PageWrapper>
      <OnBoarding />
      <LongButton
        text="알겠어요!"
        navigationPath="/map"
      />
    </PageWrapper>
  );
};

export default OnBoardingPage;