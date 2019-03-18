import * as constants from './constants'

const defaultState = {
    zoomImage: '',
    showImage: false,
};
export default (state = defaultState, action) => {

    switch (action.type) {
        case constants.ZOOM_IMAGE_ACTION:
            const newState = {
                zoomImage: action.img,
                showImage:true,
            };
            return newState;
        case constants.HIDE_IMAGE:
            return{
                zoomImage: '',
                showImage:false
            };
        default:
            return state;
    }
}