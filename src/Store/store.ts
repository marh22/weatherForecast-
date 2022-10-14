import { createStore } from 'redux';

const initialState = {
    weatherData: null
}

 const store = createStore(handleState);

function handleState (state = initialState, action:{type: string, payload: any}) {
    switch (action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                weatherData: action.payload
            }
        default: 
            return state;
    }
}

export default store;