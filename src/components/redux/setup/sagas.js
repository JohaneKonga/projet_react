import { all } from 'redux-saga/effects';
import LoginSaga from 'redux/login/saga';

/**
 * @description combine sagas
 */
export default function* Sagas() {
  yield all([
    LoginSaga()
  ]);
}
