// using redux with @redux/toolkit

import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

export default store;

// redux using the standard redux without @reduxjs/toolkit

/* import { createStore } from "redux";

const intialState = { counter: 0, showCounter: true };

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const INCREMENT_BY_FIVE = "increment_by_five";
export const TOGGLE_COUNTER = "toggle_counter";

const counterReducer = (state = intialState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === INCREMENT_BY_FIVE) {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }

  if (action.type === TOGGLE_COUNTER) {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer); */
