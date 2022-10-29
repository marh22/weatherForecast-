import React from "react";
import styled from "styled-components";
import { ProgresBar } from "./ProgresBar";

interface Props {
  humidity: number;
}

const Bar = styled.div`
  width: 80%;
  margin: 0 auto;
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
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </Percent>
      <ProgresBar humidity={humidity} />
      <PercentSimbol>%</PercentSimbol>
    </Bar>
  );
};
