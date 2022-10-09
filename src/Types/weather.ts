export interface WeatherDataType {
    forecast: ForcastDayType;
    location: Location; 
}

export interface ForcastDayType {
    forecastday: ForecastEachDay[];
}

export interface ForecastEachDay {
    date: string,
    day: {
        avgtemp_c: number,
        avgtemp_f: number,
        temp: string,
        condition: {
            text: string,
            icon: string,
            code: number
        }

    }
}

export interface Location {
    name: string;
}

export interface LocationType {
    latitude: number,
    longitude: number
}