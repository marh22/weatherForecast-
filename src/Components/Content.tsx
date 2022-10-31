import React from "react";
import { ForecastEachDay } from "../Types/weather";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { HightlightsList } from "./HightlightsList";
import { WindDirection } from "./WindDirection";
import { HumidityPercent } from "./HumidityPercent";
import { TemperatureUnitSelector } from "./TemperatureUnitSelector";
import { DaysCard } from "./DaysCard";

interface Props {
  todaysForecast?: ForecastEachDay;
}

const Container = styled.div`
  position: absolute;
  width: 70%;
  right: 0;
  top: 0;
  background: #100e1d;
  min-height: 100vh;
  color: white;
`;

const HightlightsDetails = styled.div`
  width: 80%;
  text-align: left;
  margin: 25px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const DaysContent = styled.div`
  width: 80%;
  margin: 30px auto;
  min-height: 177px;
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  gap: 12px;
`;

const HightlightsTitle = styled.div`
  font-weight: 600;
  font-size: 21px;
  color: #e7e7eb;
  margin-left: 120px;
`;

export const Content: React.FC<Props> = () => {
  const [weatherData, setWeatherData] = React.useState<any>(null);
  const weatherDataList = useSelector<any>((state) => state.weatherData);
  const unitTemp = useSelector<any>((state) => state.unit);

  React.useEffect(() => {
    if (weatherDataList !== null) {
      setWeatherData(weatherDataList);
    }
  }, [weatherDataList]);

  const todaysHightlights = weatherData?.forecast.forecastday[0].hour[0];
  const newForecastDay = weatherData?.forecast.forecastday.slice(1, 6);

  return (
    <Container>
      <TemperatureUnitSelector />

      <DaysContent>
        {weatherData !== null &&
          newForecastDay?.map((item: ForecastEachDay, id: number) => (
            <DaysCard
              key={id}
              date={item.date}
              icon={item.day.condition.icon}
              maxTemp={
                unitTemp === "C" ? item.day.maxtemp_c : item.day.maxtemp_f
              }
              minTemp={
                unitTemp === "C" ? item.day.mintemp_c : item.day.mintemp_f
              }
            />
          ))}
      </DaysContent>

      <HightlightsTitle>Today's Hightlights</HightlightsTitle>
      <HightlightsDetails>
        <HightlightsList
          title="Wind Status"
          data={todaysHightlights?.wind_mph}
          unit="mph"
          customElement={
            <WindDirection windDirectionData={todaysHightlights?.wind_dir} />
          }
        />
        <HightlightsList
          title="Humidity"
          data={todaysHightlights?.humidity}
          unit="%"
          customElement={
            <HumidityPercent humidity={todaysHightlights?.humidity} />
          }
        />
        <HightlightsList
          title="Visibility"
          data={todaysHightlights?.vis_miles}
          unit="miles"
        />
        <HightlightsList
          title="Air Pressure"
          data={todaysHightlights?.pressure_mb}
          unit="mb"
        />
      </HightlightsDetails>
    </Container>
  );
};
