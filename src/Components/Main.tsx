import { useEffect, useState } from "react";
import { useDispatch} from 'react-redux';
import { getWeather, getApiAdress, getGeolocation } from '../Api';
import { WeatherDataType as TypesWeatherData } from "../Types/weather";
import SearchBar from "./SearchBar";
import LeftSideBar from "./LeftSideBar";
import Content from "./Content";

const Main = () => {
    const [weatherData, setWeatherData] = useState<TypesWeatherData>();
    const [isTempC, setIsTempC] = useState<boolean>(false);
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        getCurrentLocationWeather();
    }, []);

    const getCurrentLocationWeather = async () => {
        const userIp = await getApiAdress();
        const userGeoLocation = await getGeolocation(userIp.ip);
        const weatherData = await getWeather(userGeoLocation.geoplugin_countryName);
        const action = {
            type: 'SET_WEATHER',
            payload: weatherData,

        }
        dispatch(action);
        setWeatherData(weatherData);
    }

    return (
            <div>
                {isSearchOpen ? <SearchBar setIsSearchOpen={setIsSearchOpen} /> :
                    <LeftSideBar setIsSearchOpen={setIsSearchOpen} 
                        getCurrentLocationWeather={getCurrentLocationWeather}
                        isTempC={isTempC} 
                    />
                }
                <Content setIsTempC={setIsTempC} isTempC={isTempC} />
            </div>
    )
}
export default Main;