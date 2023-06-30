import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";

const Festival = () => {
  const FESTIVAL_KEY = process.env.REACT_APP_FESTIVAL_ID;
  const FESTIVAL_API_URL = `https://proxy.cors.sh/http://openapi.seoul.go.kr:8088/${FESTIVAL_KEY}/json/culturalEventInfo/1/15/축제-문화/예술/`;
  const [festivalData, setFestivalData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  const loadData = async () => {
    try {
      await axios
        .get(FESTIVAL_API_URL, {
          headers: {
            'x-cors-api-key': 'temp_8897981b5a3c25edbe0d8d042cf0b42d'
          }
        })
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
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 140
    }
  };

  return (
    <Wrapper>
      {festivalData.length > 0 && (
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
          {festivalData.map((fest) => (
            <ContentContainer key={fest.TITLE} bgUrl={fest.MAIN_IMG}>
              <FestivalTitle>
                {fest.TITLE}
              </FestivalTitle>
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
  margin-left: 20px;
  width: 225px;
  height: 225px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
  padding: 10px 15px;
  background-image: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${(props) => props.bgUrl});
  background-size: cover;
  border-radius: 8px;
`;

const FestivalTitle = styled.h2`
  color: #fff;
  font-size: 1.0625rem;
  font-weight: 500;
  letter-spacing: -0.34px;
  word-break: keep-all;
`;