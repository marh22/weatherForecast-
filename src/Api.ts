import { WEATHER_API_URL, CURRENT_LOCATION_API_URL } from "./config";

export const getWeather = async (country: string): Promise<any> => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5817bed704msh8572f54f12ddaefp1db5e2jsn887f87e72c7d',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    try {
        const weather = await fetch(WEATHER_API_URL + `{${country}}&days=6&aqi=no&alerts=no`, options)
        return weather.json();
    }
    catch(err) {
        console.log(err);
    }
}

export const getLocation = async (): Promise<any> => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5817bed704msh8572f54f12ddaefp1db5e2jsn887f87e72c7d',
            'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
        }
    };
    try {
        const location = await fetch(CURRENT_LOCATION_API_URL, options)
        return location.json();
    }
    catch(err) {
        console.log(err);
    }
}
