import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";

const Festival = () => {
  const FESTIVAL_KEY = process.env.REACT_APP_FESTIVAL_ID;
  const FESTIVAL_API_URL = `http://openapi.seoul.go.kr:8088/${FESTIVAL_KEY}/json/culturalEventInfo/1/15/축제-문화/예술/`;
  const [festivalData, setFestivalData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();

  const handleChange = (index) => {
    setCurrentIndex(index);
  }
  
  const loadData = async () => {
    try {
      await axios
        .get(FESTIVAL_API_URL)
        .then((res) => {
          const data = res.data.culturalEventInfo.row;
          setFestivalData(data);
        })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
    console.log(festivalData);
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 100
    }
  };

  return (
    <Wrapper>
      {festivalData.length > 0 && (
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1000}
          infinite={true}
          partialVisbile={true}
        >
          {festivalData.map((fest) => (
            <ContentContainer key={fest.TITLE}>
              <Image src={fest.MAIN_IMG} />
            </ContentContainer>
          ))}
        </Carousel>
      )}
    </Wrapper>
  );
};

export default Festival;

// styled
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 270px;
  height: 270px;
  object-fit: cover;
  border-radius: 40px;
`;