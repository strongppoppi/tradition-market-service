import React from 'react';
import PageWrapper from "../components/PageWrapper/PageWrapper";
import LongButton from "../components/Button/LongButton";

const SplashPage = () => {
  return (
    <PageWrapper>
      <LongButton
        text="시장 가장!"
        navigationPath="/main"
      />
    </PageWrapper>
  );
};

export default SplashPage;
