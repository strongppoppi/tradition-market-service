import React from 'react';
import { styled } from "styled-components";

const Margin = ({size}) => {
  return (
    <MarginContainer
      size={size}
    />
  );
};

export default Margin;

// styled
const MarginContainer = styled.div`
  width: 100%;
  height: ${(props) => props.size};
`;