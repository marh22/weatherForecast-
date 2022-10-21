import React from "react";
import styled from "styled-components";
import { WeatherDataType } from "../Types/weather";

interface Props {
  weatherData: WeatherDataType;
}

const HightlightsDetails = styled.div`
  width: 80%;
  text-align: left;
  margin: 24px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const HightlightsCard = styled.div`
  min-width: 330px;
  background: #1e213a;
  text-align: center;
  margin: 10px 0;
  padding-bottom: 10px;
  h3 {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    padding-top: 15px;
    color: #e7e7eb;
  }
`;

const Data = styled.div`
  font-weight: 700;
  font-size: 44px;
  color: #e7e7eb;
  span {
    font-weight: 400;
    font-size: 25px;
    color: #e7e7eb;
  }
`;

const Bar = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const ProgresBar = styled.div`
  width: 100%;
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

const WindDirection = styled.div`
  color: #e7e7eb;
  border-radius: 100%;
  padding: 5px;
  background: hsla(0, 0%, 100%, 0.3);
  display: inline-block;
  margin-right: 5px;
  transform: rotate(276deg);
  font-family: "Material Icons";
  font-size: 24px;
`;

const HightlightsList: React.FunctionComponent<Props> = ({ weatherData }) => {
  const todaysHightlights = weatherData?.forecast.forecastday[0].hour[0];

  return (
    <HightlightsDetails>
      <HightlightsCard>
        <h3> Wind status </h3>
        <Data>
          {todaysHightlights?.wind_mph}
          <span>mph</span>
        </Data>
        <WindDirection>navigation</WindDirection>
        <span>{todaysHightlights?.wind_dir}</span>
      </HightlightsCard>

      <HightlightsCard>
        <h3>Humidity</h3>
        <Data>
          {todaysHightlights?.humidity}
          <span>%</span>
          <Bar>
            <Percent>
              <div>0</div>
              <div>50</div>
              <div>100</div>
            </Percent>
            <ProgresBar>
              <div></div>
            </ProgresBar>
            <PercentSimbol>%</PercentSimbol>
          </Bar>
        </Data>
      </HightlightsCard>

      <HightlightsCard>
        <h3>Visibility</h3>
        <Data>
          {todaysHightlights?.vis_miles}
          <span>miles</span>
        </Data>
      </HightlightsCard>

      <HightlightsCard>
        <h3>Air Pressure </h3>
        <Data>
          {todaysHightlights?.pressure_mb}
          <span>hPa</span>
        </Data>
      </HightlightsCard>
    </HightlightsDetails>
  );
};

export default HightlightsList;