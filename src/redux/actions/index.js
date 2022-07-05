import actionTypes from "./actionTypes";

export const getAlbums = () => {
    return {
        type: actionTypes.GET_ALBUMS
    }
}

export const addAlbum = (payload) => {
    return {
        type: actionTypes.ADD_ALBUM,
        payload
    }
}
export const deleteAlbum = (payload) => {
    return {
        type: actionTypes.DELETE_ALBUM,
        payload
    }
}
export const updateAlbum = (payload) => {
    return {
        type: actionTypes.UPDATE_ALBUM,
        payload
    }
}
