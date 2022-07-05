import { takeEvery, call, put } from 'redux-saga/effects'
import actionTypes from '../actions/actionTypes'
import { getAll } from '../../services/services'
import { albumsReducer } from '../reducers/albumsReducer'

export default function* getAlbumsSaga() {
    yield takeEvery(actionTypes.GET_ALBUMS, fetchAlbums)
}

function* fetchAlbums() {
    try {
        const resp = yield call(getAll)
        yield put({ type: actionTypes.GOT_ALBUMS, payload: resp })
    } catch (err) {
        console.log(err)
    }
}