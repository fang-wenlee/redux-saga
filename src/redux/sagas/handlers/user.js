import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/user"; //reducer
import { requestGetUser } from "../requests/user"; //api

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser); //get data from api
    const { data } = response;
    console.log("user ob from saga handler:", data);
    yield put(setUser(data)); //save data to redux store
  } catch (error) {
    console.log(new Error("hi"));
  }
}
