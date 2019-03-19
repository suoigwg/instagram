import * as constants from './constants'

const defaultState = {
    zoomImage: '',
    showImage: false,
    timeline: []
};
export default (state = defaultState, action) => {

    switch (action.type) {
        case constants.ZOOM_IMAGE_ACTION:
            return Object.assign({}, state,{
                zoomImage: action.img,
                showImage:true,
            });
        case constants.HIDE_IMAGE:
            return Object.assign({}, state,{
                zoomImage: '',
                showImage:false,
            });
        case constants.SET_TIMELINE:
            return Object.assign({}, state, {
                timeline: action.timeline
            });
        default:
            return state;
    }
}