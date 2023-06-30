import React from "react";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import Festival from "../components/Festival/Festival";
import BottomTab from "../components/BottomTab/BottomTab";

const HomePage = () => {
  return (
    <PageWrapper>
      <Festival />
      <BottomTab
        currentPath="home"
      />
    </PageWrapper>
  );
};

export default HomePage;