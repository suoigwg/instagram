import * as constants from './constants'
import axios from 'axios';
export const updateZoomImage = (img)=>{
    return {
        type:constants.ZOOM_IMAGE_ACTION,
        img,
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

export const fetchTimeline = ()=>{
    return (dispatch, getState)=>{
        axios.get("/api/timeline.json").then((resp)=>{
                let timeline = resp.data.data;
                dispatch(setTimeline(timeline));
            }
        )
    }
};