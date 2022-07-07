import { combineReducers } from "redux";
import { getAlbums } from "./albumsReducer";

const rootReducer = combineReducers(
    {
        getAlbums,
    }
)

export default rootReducer