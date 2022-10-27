import { createStore } from "redux";
import { WeatherDataType } from "../Types/weather";

interface StoreInterface {
  weatherData: WeatherDataType | null;
  citiesList: any[];
}

const initialState: StoreInterface = {
  weatherData: null,
  citiesList: [],
};

const store = createStore(handleState);

function handleState(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "SET_WEATHER":
      return {
        ...state,
        weatherData: action.payload,
      };
    case "SET_CITIES":
      return {
        ...state,
        citiesList: [...state.citiesList, action.payload],
      };
    default:
      return state;
  }
}

export default store;
