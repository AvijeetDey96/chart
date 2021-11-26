import * as actions from "./chart.actions";
const INITIAL_STATE = {
  loading: false,
  chartSuccessData: '',
  chartErrorData: ''
};

const useReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.GET_CHART_DATA:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CHART_DATA_SUCCESS:
      return {
        ...state,
        chartSuccessData: action.chartSuccessData,
        loading: false,
      };
    case actions.GET_CHART_DATA_ERROR:
      return {
        ...state,
        chartErrorData: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default useReducer;
