import React from "react";
import styled from "styled-components";

interface Props {
  date: string;
  icon: string;
  isTempC: boolean;
  maxTempC: number;
  minTempC: number;
  tempUnitC: string;
  maxTempF: number;
  minTempF: number;
  tempUnitF: string;
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

const DaysCard: React.FC<Props> = ({
  date,
  icon,
  isTempC,
  maxTempC,
  minTempC,
  tempUnitC,
  maxTempF,
  minTempF,
  tempUnitF,
}) => {
  return (
    <Minicard>
      <div>{date}</div>
      <img src={icon} />
      {isTempC ? (
        <Temp>
          <span>{maxTempF}</span>
          <span>{tempUnitF}</span>
          <span>{minTempF}</span>
          <span>{tempUnitF}</span>
        </Temp>
      ) : (
        <Temp>
          <span>{maxTempC}</span>
          <span>{tempUnitC}</span>
          <span>{minTempC}</span>
          <span>{tempUnitC}</span>
        </Temp>
      )}
    </Minicard>
  );
};

export default DaysCard;
