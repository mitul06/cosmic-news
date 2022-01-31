import { FETCH_API, FETCH_API_FAILER, FETCH_API_SUCSESS } from "./types"

const fetchNews = (payload) => {
    return {
        type: FETCH_API,
        payload: payload

    }
}

const fetchNewsSucess = () => {
    return {
        type: FETCH_API_SUCSESS,
    }
}

const fetchNewsFailer = () => {
    return {
        type: FETCH_API_FAILER,
    }
}

export default{
    fetchNews,
    fetchNewsSucess,
    fetchNewsFailer
}
