import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getWeather, getCurrentIpAdress, getGeolocation } from "../Api";
import { SearchBar } from "./SearchBar";
import { LeftSideBar } from "./LeftSideBar";
import { Content } from "./Content";

const Main = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [weatherData, setWeatherData] = useState<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  const getCurrentLocationWeather = useCallback(async () => {
    const userIp = await getCurrentIpAdress();
    const userGeoLocation = await getGeolocation(userIp.ip);
    const weatherData = await getWeather(userGeoLocation.geoplugin_countryName);
    const action = {
      type: "SET_WEATHER",
      payload: weatherData,
    };
    dispatch(action);
  }, []);

  return (
    <div>
      {isSearchOpen ? (
        <SearchBar
          setIsSearchOpen={setIsSearchOpen}
          isSearchOpen={isSearchOpen}
        />
      ) : (
        <LeftSideBar
          setIsSearchOpen={setIsSearchOpen}
          isSearchOpen={isSearchOpen}
          getCurrentLocationWeather={getCurrentLocationWeather}
          setWeatherData={setWeatherData}
          weatherData={weatherData}
        />
      )}
      <Content />
    </div>
  );
};
export default Main;
