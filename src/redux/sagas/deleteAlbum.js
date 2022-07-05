import { takeEvery, call, put } from 'redux-saga/effects'
import { remove } from '../../services/services'
import actionTypes from '../actions/actionTypes'


export default function* deleteAlbumSaga() {
    yield takeEvery(actionTypes.DELETE_ALBUM, deleteAlbum)
}

function* deleteAlbum(action) {
    try {
        const resp = yield call(remove, action.payload)
        if (resp?.status === 200) {
            yield put({ type: actionTypes.DELETED_ALBUM, payload: action.payload })
        }
        // console.log(resp)

    } catch (err) {
        console.log(err)
    }
}