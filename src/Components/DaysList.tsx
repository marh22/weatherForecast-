import React from "react";
import styled from "styled-components";
import { ForecastEachDay, WeatherDataType } from "../Types/weather";

interface Props {
  isTempC: boolean;
  weatherData: WeatherDataType;
}

const DaysContent = styled.div`
  width: 80%;
  margin: 30px auto;
  min-height: 177px;
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  gap: 12px;
`;

const Minicard = styled.div`
  min-width: 140px;
  min-height: 170px;
  background: #1e213a;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.div`
  font-size: 16px;
  text-align: center;
  color: #e7e7eb;
  padding-top: 18px;
`;

const Temp = styled.div`
  padding: 25px;
  font-size: 14px;
`;

const DaysList: React.FunctionComponent<Props> = ({ weatherData, isTempC }) => {
  const NewForecastDay = weatherData?.forecast.forecastday.slice(1, 6);

  return (
    <DaysContent>
      {weatherData != null &&
        NewForecastDay.map((item: ForecastEachDay, index: number) => (
          <div key={index}>
            <Minicard>
              <Date>{item.date} </Date>
              <img src={item.day.condition.icon} />
              {isTempC ? (
                <Temp>
                  {item.day.maxtemp_f}
                  <span>°F</span>
                  {item.day.mintemp_f}
                  <span>°F</span>
                </Temp>
              ) : (
                <Temp>
                  {item.day.maxtemp_c}
                  <span>°C</span>
                  {item.day.mintemp_c}
                  <span>°C</span>
                </Temp>
              )}
            </Minicard>
          </div>
        ))}
    </DaysContent>
  );
};

export default DaysList;