// using redux with @redux/toolkit

import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementByFive(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

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
