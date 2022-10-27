import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  humidity: number;
}

const Bar = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ProgresBar = styled.div`
  height: 8px;
  background: #fff;
  border-radius: 50px;
  div {
    height: 8px;
    background: #ffec65;
    width: 81%;
    border-radius: 50px;
  }
`;

const Percent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;
  font-size: 12px;
  color: #a09fb1;
  margin-bottom: 3px;
`;

const PercentSimbol = styled.div`
  font-weight: 700;
  font-size: 12px;
  width: 100%;
  text-align: right;
  margin-top: 3px;
  color: #a09fb1;
`;

export const HumidityPercent: React.FC<Props> = ({ humidity }) => {

  return (
    <Bar>
      <Percent>
        <div>0</div>
        <div>50</div>
        <div>100</div>
      </Percent>
      <ProgresBar>
        <div style={{ width: `${humidity}%`}} ></div>
      </ProgresBar>
      <PercentSimbol>%</PercentSimbol>
    </Bar>
  );
};
