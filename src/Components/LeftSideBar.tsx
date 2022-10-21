import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import TodaysWeathersData from "./TodaysWeathersData";

interface Props {
  getCurrentLocationWeather: () => Promise<void>;
  setIsSearchOpen: (isOpen: boolean) => void;
  isSearchOpen: boolean;
  isTempC: boolean;
}

const Main = styled.div`
  position: fixed;
  width: 30%;
  height: 100vh;
  background: #1e213a;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SearchLoc = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  margin-top: -40%;
`;

const SearchBtn = styled.button`
  padding: 10px 18px;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  color: #e7e7eb;
  background: #6e707a;
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

const CurrentLocationBtn = styled.button`
  background: hsla(0, 0%, 100%, 0.2);
  border-radius: 100%;
  padding: 7px 8px;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  color: #e7e7eb;
  cursor: pointer;
`;

const LeftSideBar: React.FunctionComponent<Props> = ({
  isSearchOpen,
  setIsSearchOpen,
  getCurrentLocationWeather,
  isTempC,
}) => {
  const weatherDataList = useSelector<any>((state) => state.weatherData);
  const [weatherData, setWeatherData] = useState<any>(null);

  const IsOpen = useCallback(() => {
    setIsSearchOpen(true);
  }, [isSearchOpen]);

  React.useEffect(() => {
    if (weatherDataList != null) {
      setWeatherData(weatherDataList);
    }
  }, [weatherDataList]);

  return (
    <Main>
      <SearchLoc>
        <SearchBtn onClick={IsOpen}>Search for places</SearchBtn>
        <CurrentLocationBtn
          className="btn-icon material-icons"
          onClick={getCurrentLocationWeather}
        >
          gps_fixed
        </CurrentLocationBtn>
      </SearchLoc>
      <TodaysWeathersData weatherData={weatherData} isTempC={isTempC} />
    </Main>
  );
};

export default LeftSideBar;
