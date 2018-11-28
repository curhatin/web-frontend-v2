import {
    ADD_CURHAT,
    FETCH_DATA_POST,
    FETCH_DATA_POST_BY_ID,
    FETCH_DATA_POST_USER_BY_ID,
    FETCH_POST_BY_POST_ID
} from "./types"
import axios from "axios";



export const createCurhat = data => dispatch => {
    axios.post("https://curhatin.herokuapp.com/post",{ 
        tagId: data.tagId,
        post: data.post,
        topic: data.topic
    },{headers: {
    authorization: `Bearer ${data.token}`
    }})
    .then(res => {
        console.log(res)
        dispatch({
        type: ADD_CURHAT,
        payload: data
    })})
    .catch(err => console.log(err))
}


export const fetchDataPost = token => (dispatch) => {
    axios.get('https://curhatin.herokuapp.com/post',{headers: {
        authorization: `Bearer ${token}`
        }})
    .then(res => 
     {  console.log(res.data)
        dispatch({
        type: FETCH_DATA_POST,
        payload: res.data
    })})
    .catch(err => console.log(err))
    
}

export const fetchDataPostById = (token) => (dispatch) => {
    axios.get(`https://curhatin.herokuapp.com/post/account-id`,{headers: {
        authorization: `Bearer ${token}`
        }})
    .then(res => 
     {  console.log(res.data)
        dispatch({
        type: FETCH_DATA_POST_USER_BY_ID,
        payload: res.data
    })})
    .catch(err => console.log(err))
    
}

export const fetchDataPostUserById = (token, id) => (dispatch) => {
    axios.get(`https://curhatin.herokuapp.com/post/${id}`,{headers: {
        authorization: `Bearer ${token}`
        }})
    .then(res => 
     {  console.log(res.data)
        dispatch({
        type: FETCH_POST_BY_POST_ID,
        payload: res.data
    })})
    .catch(err => console.log(err))
    
}