// const LOAD_FLIGHT = 'LOAD_FLIGHT';
const SET_FLIGHT = 'SET_FLIGHT';

let initialState = {
  flights: ['LONDON', 'MOSCOW'],
};

export default function flightsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FLIGHT:
      return {
        // ...state,
        flights: action.flight,
      };
    default:
      return state;
  }
}
