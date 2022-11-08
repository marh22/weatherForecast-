import React from "react";
import styled from "styled-components";
import { ProgressBar } from "./ProgressBar";

interface Props {
  humidity: number;
}

const Bar = styled.div`
  width: 80%;
  margin: 0 auto;
  div {
    font-weight: 700;
    font-size: 12px;
    width: 100%;
    text-align: right;
    margin-top: 3px;
    color: #a09fb1;
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

export const HumidityPercent: React.FC<Props> = ({ humidity }) => {
  return (
    <Bar>
      <Percent>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </Percent>
      <ProgressBar value={humidity} />
      <div>%</div>
    </Bar>
  );
};
