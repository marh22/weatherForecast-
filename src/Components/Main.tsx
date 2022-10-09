import React, { useEffect, useState } from "react";
import { getWeather, getLocation } from '../Api';
import SearchBar from "./SearchBar";
import { WeatherDataType as TypesWeatherData, LocationType } from "../Types/weather";
import LeftSideBar from "./LeftSideBar";

const Main = () => {
    const [weatherData, setWeatherData] = useState<TypesWeatherData>();
    const [location, setLocation] = useState<LocationType>();
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

    useEffect(() => {
        getCurrentLocationWeather();
    }, []);

    useEffect(() => {
        console.log(location);
    }, [location]);

    const getCurrentLocationWeather = async () => {
        fetch('https://api.ipify.org/?format=json')
            .then(response => response.json())
            .then((userIp) => {
                // console.log(userIp, '34567898765434567')
                fetch(`http://www.geoplugin.net/json.gp?ip=${userIp.ip}`).then((response) => {
                    return response.json();
                })
                    .then(async (data) => {
                        console.log('data', data)
                        const weatherData = await getWeather(data.geoplugin_countryName);
                        setWeatherData(weatherData)
                        console.log(weatherData);
                    }).catch(e => {
                        console.error('Unable get data from ip-api', e)
                    });
            })
        await position();
    }

    const position = async () => {
        await navigator.geolocation.getCurrentPosition(
            position => setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            err => console.log(err)
        );
    }

    return (
        <>
            <div>
                {isSearchOpen ? <SearchBar getCurrentLocationWeather={getCurrentLocationWeather} 
                                           setIsSearchOpen = {setIsSearchOpen}/> : 
                                <LeftSideBar getCurrentLocationWeather={getCurrentLocationWeather}
                                             setIsSearchOpen = {setIsSearchOpen} 
                                             todaysForecast = {weatherData?.forecast.forecastday[0]}
                                             currentLocation = {weatherData?.location}
                                             />}
            </div>
        </>
    )
}
export default Main;