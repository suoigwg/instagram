import * as constants from './constants'

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