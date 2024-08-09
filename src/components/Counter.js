import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

// import {
//   INCREMENT,
//   DECREMENT,
//   INCREMENT_BY_FIVE,
//   TOGGLE_COUNTER,
// } from "../store/index";

import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementByFiveHandler = () => {
    dispatch(counterActions.incrementByFive(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={incrementByFiveHandler}>INCREMENT BY 5</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// using class based components to connect to the store
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>INCREMENT</button>
//           <button onClick={this.decrementHandler.bind(this)}>DECREMENT</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // class based selector and dispatch function
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
