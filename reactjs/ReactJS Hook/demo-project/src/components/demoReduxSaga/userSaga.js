// userSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import userService from './userService';
import { fetchUsersSuccess, fetchUsersFailure } from './userActions';

// Worker Saga: thực thi tác vụ bất đồng bộ để lấy danh sách người dùng
function* fetchUsersSaga() {
  try {
    const response = yield call(userService.getUsers);
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

// Watcher Saga: lắng nghe action FETCH_USERS và gọi fetchUsersSaga
function* userSaga() {
  yield takeLatest('FETCH_USERS', fetchUsersSaga);
}

export default userSaga;
