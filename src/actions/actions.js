export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const incrementAction = () => ({
  type: INCREMENT
});

export const decrementAction = () => ({
  type: DECREMENT
});

export const resetAction = () => ({
  type: RESET
});