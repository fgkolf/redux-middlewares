import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ value, onIncrement, onDecrement, onReset }) => (
  <div id="counter-app">
    <div id="display-container" className="container">
      <p id="display">{JSON.stringify(value)}</p>
    </div>
    <div id="buttons-container" className="container">
      <button id="increment-button" className="button" onClick={onIncrement}>
        +
      </button>
      <button id="decrement-button" className="button" onClick={onDecrement}>
        -
      </button>
      <button id="reset-button" className="button" onClick={onReset}>
        &#x21bb;
      </button>
    </div>
  </div>
)

const MyCounter = ({ value, onIncrement, onDecrement, onReset }) => (
    <Counter
      value={value}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onReset={onReset}
    />)

const mapStateToProps = state => ({
  value: state.counter
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    dispatch({ type: 'INCREMENT' });
  },
  onDecrement: () => {
    dispatch({ type: 'DECREMENT' });
  },
  onReset: () => {
    dispatch({ type: 'RESET' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyCounter);
