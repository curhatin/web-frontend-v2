import {
   FECTH_DATA_COMMENT_BY_ID
} from "./types"
import axios from "axios";

export const fetchDataCommentsByPostId = (token,id) => (dispatch) => {
    console.log('people', id)

    axios.get(`https://curhatin.herokuapp.com/comment/${id}`,{headers: {
        authorization: `Bearer ${token}`
        }})
    .then(res => 
     {  console.log(res.data)
        dispatch({
        type: FECTH_DATA_COMMENT_BY_ID,
        payload: res.data
    })})
    .catch(err => console.log(err))
    
}