import React from "react";
import styled from "styled-components";

interface Props {
  wind_dir: string;
}

interface WindDir {
  getWindDirection: any;
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
  transform: rotate(${(props) => props.getWindDirection});
`;

export const WindDirection: React.FC<Props> = ({ wind_dir }) => {
  const getWindDirection = (wind_dir: string, WindDirectionIndex: number, degre: number) => {
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
    for (let i = 0; i < DirectionsArr.length; i++) {
      if (DirectionsArr[i] === wind_dir) {
        WindDirectionIndex = i;
      }
    }
    return degre = WindDirectionIndex * 22.5;
  };

  return (
    <>
      <WindDir getWindDirection={getWindDirection}> navigation </WindDir>
      <span>{wind_dir}</span>
    </>
  );
};
