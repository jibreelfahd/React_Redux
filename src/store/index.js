import { createStore } from "redux";

const intialState = { counter: 0, showCounter: true };

const counterReducer = (state = intialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "INCREMENT BY FIVE") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "TOGGLE_COUNTER") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
