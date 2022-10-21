import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { WeatherDataType } from "../Types/weather";

interface Props {
  weatherData: WeatherDataType;
  isTempC: boolean;
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

const TodaysWeathersData: React.FunctionComponent<Props> = ({
  weatherData,
  isTempC,
}) => {
  const todaysForecast = weatherData?.forecast.forecastday[0];

  return (
    <TodaysWeatherData>
      <WeatherImage src={todaysForecast?.day.condition.icon} />
      {isTempC ? (
        <Weather>
          {todaysForecast?.day.avgtemp_f}
          <span>°F</span>
        </Weather>
      ) : (
        <Weather>
          {todaysForecast?.day.avgtemp_c}
          <span>°C</span>
        </Weather>
      )}
      <Condition>{todaysForecast?.day.condition.text}</Condition>
      <div>
        <span>Today • </span>
        {todaysForecast?.date}
      </div>
      <CurrentLoc>
        <GoLocation /> {weatherData?.location.name}
      </CurrentLoc>
    </TodaysWeatherData>
  );
};

export default TodaysWeathersData;