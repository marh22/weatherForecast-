import React from "react";
import { ForecastEachDay } from "../Types/weather";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { HightlightsList } from "./HightlightsList";
import { WindDirection } from "./WindDirection";
import { HumidityPercent } from "./HumidityPercent";
import { TemperatureUnit } from "./TemperatureUnit";
import { DaysCard } from "./DaysCard";

interface Props {
  todaysForecast?: ForecastEachDay;
  setIsTempC: (isTempC: boolean) => void;
  isTempC: boolean;
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

export const Content: React.FC<Props> = ({ setIsTempC, isTempC }) => {
  const [weatherData, setWeatherData] = React.useState<any>(null);
  const weatherDataList = useSelector<any>((state) => state.weatherData);

  React.useEffect(() => {
    if (weatherDataList !== null) {
      setWeatherData(weatherDataList);
    }
  }, [weatherDataList]);

  const todaysHightlights = weatherData?.forecast.forecastday[0].hour[0];
  const newForecastDay = weatherData?.forecast.forecastday.slice(1, 6);

  return (
    <Container>
      <TemperatureUnit setIsTempC={setIsTempC} isTempC={isTempC}/>

      <DaysContent>
        {weatherData !== null &&
          newForecastDay.map((item: ForecastEachDay, index: number) => (
            <DaysCard
              key={index}
              date={item.date}
              icon={item.day.condition.icon}
              {...(isTempC
                ? {
                    maxTemp: item.day.maxtemp_c,
                    minTemp: item.day.mintemp_c,
                    tempUnit: "°C",
                  }
                : {
                    maxTemp: item.day.maxtemp_f,
                    minTemp: item.day.mintemp_f,
                    tempUnit: "°F",
                  })}
            />
          ))}
      </DaysContent>

      <HightlightsTitle>Today's Hightlights</HightlightsTitle>
      <HightlightsDetails>
        <HightlightsList
          title={"Wind Status"}
          data={todaysHightlights?.wind_mph}
          unit={"mph"}
          customElement={
            <WindDirection wind_dir={todaysHightlights?.wind_dir} />
          }
        />
        <HightlightsList
          title={"Humidity"}
          data={todaysHightlights?.humidity}
          unit={"%"}
          customElement={
            <HumidityPercent humidity={todaysHightlights?.humidity} />
          }
        />
        <HightlightsList
          title={"Visibility"}
          data={todaysHightlights?.vis_miles}
          unit={"miles"}
        />
        <HightlightsList
          title={"Air Pressure"}
          data={todaysHightlights?.pressure_mb}
          unit={"mb"}
        />
      </HightlightsDetails>
    </Container>
  );
};
