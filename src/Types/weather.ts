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
        maxtemp_c: number,
        maxtemp_f: number,
        mintemp_c: number,
        mintemp_f: number,
        condition: {
            text: string,
            icon: string,
            code: number
        }
    }
    hour: ForecastHour[];
}

export interface  ForecastHour{
    humidity: number;
    wind_mph: number;
    wind_dir: string;
    vis_miles: number;
    pressure_mb: number;
}

export interface Location {
    location: Location; 
    name: string;
}

export interface LocationType {
    latitude: number,
    longitude: number
}