import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { WeatherDataType } from "../Types/weather";

interface Props {
  weatherData: WeatherDataType;
  isTempC: boolean;
  text: string;
  date: string;
  locName: string;
  icon: string;
  tempF: number;
  tempC: number;
}

const TodaysWeatherData = styled.div`
  background: linear-gradient(
      rgba(30, 33, 58, 0.95) 100%,
      rgba(30, 33, 58, 0.95) 0
    ),
    url(/img/Cloud-background.343e2b41.png);
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: 150%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a09fb1;
`;

const WeatherImage = styled.img`
  width: 190px;
  margin-top: 10px;
`;

const Weather = styled.div`
  color: #e7e7eb;
  font-size: 65px;
  margin-top: 10px;
`;

const Condition = styled.div`
  color: #a09fb1;
  font-size: 22px;
  margin: 40px 0;
`;

const CurrentLoc = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-top: 40px;
  color: #88869d;
`;

const TodaysWeathersData: React.FC<Props> = ({
  isTempC,
  text,
  date,
  locName,
  icon,
  tempF,
  tempC,
}) => {
  return (
    <TodaysWeatherData>
      <WeatherImage src={icon} />
      {isTempC ? (
        <Weather>
          {tempF}
          <span>°F</span>
        </Weather>
      ) : (
        <Weather>
          {tempC}
          <span>°C</span>
        </Weather>
      )}
      <Condition>{text}</Condition>
      <div>
        <span>Today • </span>
        {date}
      </div>
      <CurrentLoc>
        <GoLocation /> {locName}
      </CurrentLoc>
    </TodaysWeatherData>
  );
};

export default TodaysWeathersData;
