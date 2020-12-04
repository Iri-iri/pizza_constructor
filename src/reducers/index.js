import { actionTypes } from '../actions';

const initialState = { counter: 0 };

const countOfCheckbox = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLUS: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case actionTypes.MINUS: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default:
      return state;
  }
};

export default countOfCheckbox;

