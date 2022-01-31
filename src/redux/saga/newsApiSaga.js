import {takeLatest, call, put} from 'redux-saga/effects'
import { newsApi } from '../../apis/newsApi';
import { FETCH_API, FETCH_API_FAILER, FETCH_API_SUCSESS } from '../actions/types'

export default function* newsApiSaga() {
    yield takeLatest(FETCH_API, workerSaga);
}

function* workerSaga(action){
    try{
        const response = yield call(newsApi, action.payload);

        if (response.data.status === 'ok') {
            yield put({type: FETCH_API_SUCSESS, payload: response.data})
        }else{
            yield put({type: FETCH_API_FAILER, payload: response.data})
        }
    }catch(err){
        console.log(err)
    }
}

