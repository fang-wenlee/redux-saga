import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { GET_USER } from "../ducks/user";

export function* watcherSaga() {
  //watch saga takeLates two args
  yield takeLatest(GET_USER, handleGetUser);
}
