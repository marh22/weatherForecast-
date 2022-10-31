import React from "react";
import styled from "styled-components";

interface Props {
  windDirectionData: string;
}

interface WindDir {
  getWindDirection: number;
}

export const WindDir = styled.div<WindDir>`
  color: #e7e7eb;
  border-radius: 100%;
  padding: 5px;
  background: hsla(0, 0%, 100%, 0.3);
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  font-family: "Material Icons";
  font-size: 24px;
  transform: rotate(${(props) => props.getWindDirection}deg);
`;

const getWindDirection = (windDirectionData: string) => {
  const DirectionsArr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  let WindDirectionIndex: number = 0;
  for (let i = 0; i < DirectionsArr.length; i++) {
    if (DirectionsArr[i] === windDirectionData) {
      WindDirectionIndex = i;
    }
  }
  return WindDirectionIndex * 22.5;
};

export const WindDirection: React.FC<Props> = ({ windDirectionData }) => {
  return (
    <>
      <WindDir getWindDirection={getWindDirection(windDirectionData)}>
        {" "}
        navigation{" "}
      </WindDir>
      <span>{windDirectionData}</span>
    </>
  );
};
