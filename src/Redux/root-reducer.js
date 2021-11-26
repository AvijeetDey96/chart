import { combineReducers } from "redux";
import chartReducer from "./chart/chart.reducer";

const appReducer = combineReducers({
  chart: chartReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "CLEAR_ALL") {
    return appReducer(undefined, action)
  }

  return appReducer(state, action);
};
export default rootReducer;
