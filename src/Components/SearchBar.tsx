import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../Api";

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
  margin: auto;
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
    padding: 16px 20px;
    background: #3c47e9;
    margin-left: 10px;
    cursor: pointer;
    border: none;
  }
`;

const CitiesList = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 30px;
  color: #e7e7eb;
`;

const City = styled.div`
  font-size: 17px;
  &:hover {
    border: 1px solid #e7e7eb;
    padding: 15px;
    width: 80%;
    cursor: pointer;
  }
`;

const SearchBar: React.FunctionComponent<Props> = ({
  isSearchOpen,
  setIsSearchOpen
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();
  const citiesDataList: any = useSelector<any>((state) => state.citiesList);

  const getCitiesData = ( name: string) => {
    const newCitiesDataList = citiesDataList.filter(
      (item: any) => item.location.name === name
    );
    const action = {
      type: "SET_WEATHER",
      payload: newCitiesDataList.item,
    };
    dispatch(action);
  };

  const handleOnClick = async () => {
    const weatherData = await getWeather(inputValue);
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

  const handleOnChange = useCallback((searchtext: string) => {
    setInputValue(searchtext);
  }, []);

  const IsOpen = useCallback(() => {
    setIsSearchOpen(false);
  }, [isSearchOpen]);

  return (
    <SearchMenu>
      <CloseBtn onClick={IsOpen}> x </CloseBtn>
      <SearchForm>
        <input
          placeholder="search for places"
          onChange={(event) => handleOnChange(event?.target.value)}
          value={inputValue}
        />
        <button onClick={handleOnClick}>search</button>
      </SearchForm>
      {citiesDataList.map((item: any, index: number) => (
        <CitiesList key={index}>
          <City onClick={() => getCitiesData(item.location.name )}>
            {item.location.name}
          </City>
        </CitiesList>
      ))}
    </SearchMenu>
  );
};

export default SearchBar;
