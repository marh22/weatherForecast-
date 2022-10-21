import React, { useCallback } from "react";
import { ForecastEachDay } from "../Types/weather";
import styled from "styled-components";
import { useSelector } from "react-redux";
import DaysList from "./DaysList";
import HightlightsList from "./HightlightsList";

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

const TopBtns = styled.div`
  margin-top: 42px;
  margin-right: 100px;
  display: flex;
  flex-direction: row-reverse;
`;

const Btn = styled.div`
  border-radius: 100%;
  padding: 15px;
  font-weight: 700;
  font-size: 14px;
  margin-right: 15px;
  color: #110e3c;
  text-align: center;
  background: #585676;
  cursor: pointer;
`;

const HightlightsTitle = styled.div`
  font-weight: 600;
  font-size: 21px;
  color: #e7e7eb;
  margin-left: 120px;
`;

const Content: React.FunctionComponent<Props> = ({ setIsTempC, isTempC }) => {
  const [weatherData, setWeatherData] = React.useState<any>(null);
  const weatherDataList = useSelector<any>((state) => state.weatherData);
  const [isC, setIsC] = React.useState<boolean>(true);
  const [isF, setIsF] = React.useState<boolean>(false);

  const handleOnClickC = useCallback(() => {
    setIsC(true);
    setIsF(false);
    setIsTempC(false);
  }, []);

  const handleOnClickF = useCallback(() => {
    setIsC(false);
    setIsF(true);
    setIsTempC(true);
  }, []);

  React.useEffect(() => {
    if (weatherDataList != null) {
      setWeatherData(weatherDataList);
    }
  }, [weatherDataList]);

  return (
    <Container>
      <TopBtns>
        <Btn
          style={{ backgroundColor: isF ? "#FFF" : "#585676" }}
          onClick={handleOnClickF}
        >
          °F
        </Btn>
        <Btn
          style={{ backgroundColor: isC ? "#FFF" : "#585676" }}
          onClick={handleOnClickC}
        >
          °C
        </Btn>
      </TopBtns>
      <DaysList weatherData={weatherData} isTempC={isTempC} />
      <HightlightsTitle>Today's Hightlights</HightlightsTitle>
      <HightlightsList weatherData={weatherData} />
    </Container>
  );
};

export default Content;
