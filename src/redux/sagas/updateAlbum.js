import { call, put, takeEvery } from 'redux-saga/effects'
import { update } from '../../services/services'
import actionTypes from '../actions/actionTypes'

export default function* updateAlbumSaga() {
    yield takeEvery(actionTypes.UPDATE_ALBUM, updateAlbum)
}

function* updateAlbum(action) {
    try {
        const resp = yield call(update, action.payload)
        yield put({ type: actionTypes.UPDATED_ALBUM, payload: resp })

    } catch (err) {
        console.log(err)
    }
}