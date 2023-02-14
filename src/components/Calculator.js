import { useDispatch, useSelector } from "react-redux"
import { calculaterActionTypes } from "../store/calculator/calculatorReducer"
import classes from "./Counter.module.css"

const Calculator = () => {
  const result = useSelector((state) => state.calculator.result)
  const dispatch = useDispatch()

  const addHandler = () => {
    dispatch({ type: calculaterActionTypes.ADD, payload: 5 })
  }
  const subtrackHandler = () => {
    dispatch({ type: calculaterActionTypes.SUBTRACT, payload: 10 })
  }
  const multiplayHandler = () => {
    dispatch({ type: calculaterActionTypes.MULTIPLY, payload: 2 })
  }
  const divideHandler = () => {
    dispatch({ type: calculaterActionTypes.DIVIDE, payload: 4 })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Calculator</h1>
      <div className={classes.value}>Result:{result}</div>
      <button onClick={addHandler}>+5</button>
      <button onClick={subtrackHandler}>-10</button>
      <button onClick={multiplayHandler}>*2</button>
      <button onClick={divideHandler}>/4</button>
    </main>
  )
}

export default Calculator
