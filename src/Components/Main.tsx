import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getWeather, getApiAdress, getGeolocation } from "../Api";
import { SearchBar } from "./SearchBar";
import { LeftSideBar } from "./LeftSideBar";
import { Content } from "./Content";

const Main = () => {
  const [isTempC, setIsTempC] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [weatherData, setWeatherData] = useState<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  const getCurrentLocationWeather = useCallback ( async () => {
    const userIp = await getApiAdress();
    const userGeoLocation = await getGeolocation(userIp.ip);
    const weatherData = await getWeather(userGeoLocation.geoplugin_countryName);
    const action = {
      type: "SET_WEATHER",
      payload: weatherData,
    };
    dispatch(action);
  },[]);

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
          isTempC={isTempC}
          setWeatherData={setWeatherData}
          weatherData={weatherData}
        />
      )}
      <Content setIsTempC={setIsTempC} isTempC={isTempC} />
    </div>
  );
};
export default Main;
