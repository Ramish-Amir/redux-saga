import axios from "axios";

const rootURL = 'https://jsonplaceholder.typicode.com/albums'

export const getAll = async () => {
    const resp = await axios.get(rootURL)
    return resp.data
}

export const add = async (album) => {
    const resp = await axios.post(`${rootURL}`, album)
    return resp.data
}

export const remove = async (album) => {
    const resp = await axios.delete(`${rootURL}/${album.id}`)
    // console.log(resp)
    return resp
}

export const update = async (album) => {
    const resp = await axios.patch(`${rootURL}/${album.id}`, album)
    return resp.data
}