import React from "react";
import styled from "styled-components";

interface Props {
  date: string;
  icon: string;
  maxTemp: number;
  minTemp: number;
  tempUnit: string;
}

const Minicard = styled.div`
  min-width: 140px;
  min-height: 170px;
  background: #1e213a;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  div {
    padding-top: 12px;
  }
`;

const Temp = styled.div`
  padding: 0 10px 17px;
  font-size: 14px;
  span {
    padding-left: 4px;
  }
`;

export const DaysCard: React.FC<Props> = ({
  date,
  icon,
  maxTemp,
  minTemp,
  tempUnit,
}) => {
  return (
    <Minicard>
      <div>{date}</div>
      <img src={icon} />
      <Temp>
        <span>{maxTemp}</span>
        <span>{tempUnit}</span>
        <span>{minTemp}</span>
        <span>{tempUnit}</span>
      </Temp>
    </Minicard>
  );
};
