import * as constants from './constants'
import axios from 'axios';

export const updateZoomImage = (imgID) => {
    return {
        type:constants.ZOOM_IMAGE_ACTION,
        imgID,
    }
};

export const hideImage = ()=>{
    return {
        type:constants.HIDE_IMAGE,
    }
};

export const toggleLike = (idx)=>{
    return {
        type:constants.TOGGLE_LIKE,
        idx
    }
};

export const toggleBookmark= (idx)=>{
    return {
        type:constants.TOGGLE_BOOKMARK,
        idx
    }
};

const setTimeline = timeline =>{
    return{
        type:constants.FETCH_TIMELINE,
        timeline
    }
};

const setGallery = gallery =>{
    return{
        type:constants.FETCH_GALLERY,
        gallery
    }
};

export const setCurrentPic = (idx) => {
    return {
        type: constants.SET_CURRENT_IMG,
        idx
    }
};

export const fetchTimeline = ()=>{
    return (dispatch, getState)=>{
        axios.get("/api/timeline.json").then((resp)=>{
                let timeline = resp.data.data;
                dispatch(setTimeline(timeline));
            }
        )
    }
};

export const fetchGallery = (endpoint)=>{
    return (dispatch, getState)=>{
        axios.get('/api/'+endpoint+'.json').then((resp)=>{
                let gallery = resp.data.data;
            console.log('gallery api', gallery);
                dispatch(setGallery(gallery));
            }
        )
    }
};

export const addComment = (id, comment) => {
    return {
        type: constants.ADD_COMMENT,
        id,
        comment,
    }
};

export const loadUser = () => {
    return (dispatch, getState) => {
        axios.get('/api/users.json').then((resp) => {
                let data = resp.data.data;
                dispatch({
                    type: constants.LOAD_USERS,
                    data,
                });
            }
        )
    }
};