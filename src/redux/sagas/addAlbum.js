import { call, put, takeEvery } from 'redux-saga/effects'
import { add } from '../../services/services'
import actionTypes from '../actions/actionTypes'


export default function* addAlbumSaga() {
    yield takeEvery(actionTypes.ADD_ALBUM, addAlbum)
}

function* addAlbum(action) {
    try {
        yield put({type: actionTypes.SET_LOADING})
        const resp = yield call(add, action.payload)
        yield put({ type: actionTypes.ADDED_ALBUM, payload: resp })
    } catch (err) {
        console.log(err)
    }
}

