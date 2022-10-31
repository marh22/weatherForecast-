import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../Api";
import { Location, WeatherDataType } from "../Types/weather";
import { SearchedCity } from "./SearchedCity";

interface Props {
  setIsSearchOpen: (isOpen: boolean) => void;
  isSearchOpen: boolean;
}

const SearchMenu = styled.div`
  width: 30%;
  height: 100vh;
  background: #1e213a;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 15px;
`;

const CloseBtn = styled.div`
  margin-top: 20px;
  margin-right: 53px;
  color: white;
  font-size: 24px;
  cursor: pointer;
  text-align: right;
`;

const SearchForm = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  input {
    width: 60%;
    margin: 40px 0px;
    height: 48px;
    background: transparent;
    border: 1px solid #e7e7eb;
    color: #fff;
    padding-left: 30px;
    font-size: 16px;
  }
  button {
    font-size: 16px;
    color: #e7e7eb;
    padding: 16px 30px;
    background: #3c47e9;
    margin-left: 10px;
    cursor: pointer;
    border: none;
  }
`;

export const SearchBar: React.FC<Props> = ({
  isSearchOpen,
  setIsSearchOpen,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();
  const citiesDataList: any = useSelector<any>((state) => state.citiesList);

  const getCitiesData = useCallback((name: string) => {
    const newCitiesDataList = citiesDataList.filter(
      (item: Location) => item.location.name === name
    );
    const action = {
      type: "SET_WEATHER",
      payload: newCitiesDataList[0],
    };
    dispatch(action);
  }, []);

  const handleSearchClick = async () => {
    const weatherData = await getWeather(inputValue);
    if (inputValue === "") {
      return;
    }
    if (
      citiesDataList.filter(
        (element: WeatherDataType) =>
          element.location.name.toUpperCase() === inputValue.toUpperCase()
      ).length > 0
    ) {
      setInputValue("");
      return;
    }
    const action = {
      type: "SET_WEATHER",
      payload: weatherData,
    };
    dispatch(action);
    const actn = {
      type: "SET_CITIES",
      payload: weatherData,
    };
    dispatch(actn);
    setInputValue("");
  };

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event?.target.value);
    },
    []
  );

  const openLeftSideBar = useCallback(() => {
    setIsSearchOpen(false);
  }, [isSearchOpen]);

  return (
    <SearchMenu>
      <CloseBtn onClick={openLeftSideBar}> x </CloseBtn>
      <SearchForm>
        <input
          placeholder="search for places"
          onChange={handleSearchChange}
          value={inputValue}
        />
        <button onClick={handleSearchClick}>search</button>
      </SearchForm>
      <div>
        {citiesDataList.map((item: Location, id: number) => (
          <SearchedCity
            key={id}
            locationName={item.location.name}
            getCitiesData={getCitiesData}
          />
        ))}
      </div>
    </SearchMenu>
  );
};
