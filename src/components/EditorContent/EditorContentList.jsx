import React from "react";
import { styled } from "styled-components";
import Carousel from "react-multi-carousel";

const EditorContentList = () => {

  // 캐러셀을 위한 반응형
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile_430: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 170
    },
    mobile_390: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
      partialVisibilityGutter: 140
    },
    mobile_360: {
      breakpoint: { max: 370, min: 0 },
      items: 1,
      partialVisibilityGutter: 110
    },
  };

  return (
    <Wrapper>
      <Carousel
        responsive={responsive}
        draggable={true}
        swipeable={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        infinite={true}
        partialVisbile={true}
        arrows={false}
      >
        <ContentContainer>
          <ContentTitle>
            갈현동할머니 떡볶이
          </ContentTitle>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>
            갈현동할머니 떡볶이
          </ContentTitle>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>
            갈현동할머니 떡볶이
          </ContentTitle>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>
            갈현동할머니 떡볶이
          </ContentTitle>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>
            갈현동할머니 떡볶이
          </ContentTitle>
        </ContentContainer>
      </Carousel>
    </Wrapper>
  );
};

export default EditorContentList;

// styled
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
`;

const ContentContainer = styled.div`
  margin-left: 20px;
  width: 225px;
  height: 225px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: #696969;
`;

const ContentTitle = styled.h2`
  color: #fff;
  font-size: 1.0625rem;
  font-weight: 500;
  letter-spacing: -0.34px;
  word-break: keep-all;
`;