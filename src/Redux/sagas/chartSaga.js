import { call, put, takeEvery } from "redux-saga/effects";
import * as actions from "../chart/chart.actions";
 let baseUrl ='https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json'
function* getChartDetails() {
   try {
    const endpoint = baseUrl;
    const parameters = {
      method: "GET",
      // headers: {
      //   Authorization: `${localStorage.getItem("token")}`,
      // },
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

// function* addProfileDetails(payload) {
//    const {designation,lastName,name,profileImg} = payload.payload;
//    let formData = new FormData();
//    let statusCode;
//   try {
//     const endpoint = baseUrl.concat("account/addProfile");
//     console.log('hehehe',designation,lastName,name,profileImg);
//     if(profileImg != null){
//       formData.append("profileImg", profileImg);
//       formData.append("name", name);
//       formData.append("lastName", lastName);
//       formData.append("designation", designation);
//     }
//     if(profileImg == null){
//       formData.append("name", name);
//       formData.append("lastName", lastName);
//       formData.append("designation", designation);
//     }
    
//     const parameters = {
//       method: "PATCH",
//       headers: {
//         Authorization: `${localStorage.getItem("token")}`,
//       },
//       body: formData,
//     };
//     const response = yield call(fetch, endpoint, parameters);
//     statusCode = response.status;
//     const data = yield call([response, "json"]);
//     if (response.status === 200) {
//       yield put({
//         type: actions.ADD_PROFILE_DETAILS_SUCCESS,
//         data: data,
//       });
//     }
//     else{
//       yield put({
//         type: actions.ADD_PROFILE_DETAILS_ERROR,
//         error: data.message,
//       });
//     }
   
//   } catch (e) {
//     if (statusCode === 401) {
//       yield put({
//         type: actions.UNAUTHORIZED_LOGOUT,
//       });
//     }
//     yield put({ type: actions.ADD_PROFILE_DETAILS_ERROR, error: e });
//   }
// }

 

function* chartSaga() {
  yield takeEvery(actions.GET_CHART_DATA, getChartDetails);
  // yield takeEvery(actions.ADD_PROFILE_DETAILS, addProfileDetails);
 }
export default chartSaga;
