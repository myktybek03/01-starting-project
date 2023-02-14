import { createStore } from "redux"

export const calculaterActionTypes = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  DIVIDE: "DIVIDE",
  MULTIPLY: "MULTIPLY",
}

const initialState = {
  result: 0,
}

export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case calculaterActionTypes.ADD:
      return {
        ...state,
        result: state.result + action.payload,
      }
    case calculaterActionTypes.SUBTRACT:
      return {
        ...state,
        result: state.result - action.payload,
      }
    case calculaterActionTypes.DIVIDE:
      return {
        ...state,
        result: state.result / action.payload,
      }
    case calculaterActionTypes.MULTIPLY:
      return {
        ...state,
        result: state.result * action.payload,
      }
    default:
      return state
  }
}
