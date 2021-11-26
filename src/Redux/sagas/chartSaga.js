import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../chart/chart.actions";
 let baseUrl ='https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json'
function* getChartDetails() {
   try {
    const endpoint = baseUrl;
    const parameters = {
      method: "GET",
  
    };
     const response = yield call(fetch, endpoint, parameters);
     const data = yield call([response, "json"]);
   
    if (response.status === 200) {
      yield put({
        type: actions.GET_CHART_DATA_SUCCESS,
        chartSuccessData: data,
      });
    } 
    else {
      yield put({
        type: actions.GET_CHART_DATA_ERROR,
        error: data.message,
      });
    }
  } catch (e) {
    yield put({ type: actions.GET_CHART_DATA_ERROR, error: e.message });
  }
}

 
function* chartSaga() {
  yield takeEvery(actions.GET_CHART_DATA, getChartDetails);
  }
export default chartSaga;
