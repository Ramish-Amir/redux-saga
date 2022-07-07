import actionTypes from "../actions/actionTypes"


const initialState = {
    albums: [],
    isLoading: false,
    error: null
}

export function getAlbums(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ALBUMS:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.GOT_ALBUMS:
            return {
                ...state,
                albums: action.payload,
                isLoading: false
            }
        case actionTypes.ADDED_ALBUM: {
            const newAlbums = [action.payload, ...state.albums]
            return {
                ...state,
                albums: newAlbums,
                isLoading: false
            }
        }
        case actionTypes.DELETED_ALBUM: {
            const newAlbums = [...state.albums]
            const index = newAlbums.findIndex(item => item.id === action.payload.id)
            newAlbums.splice(index, 1)
            return {
                ...state,
                albums: newAlbums,
                isLoading: false
            }
        }
        case actionTypes.UPDATED_ALBUM: {
            const newAlbums = [...state.albums]
            const index = newAlbums.findIndex(item => item.id === action.payload.id)
            newAlbums[index] = { ...action.payload }

            return {
                ...state,
                albums: newAlbums,
                isLoading: false
            }
        }

        default:
            return { ...state }

    }
}