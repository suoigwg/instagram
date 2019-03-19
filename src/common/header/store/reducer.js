import * as constants from './constants'
import * as immutable from 'immutable';
const defaultState = immutable.fromJS({
    zoomImage: '',
    showImage: false,
    timeline: new Map(),
    gallery: new Map()
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.ZOOM_IMAGE_ACTION:
            return state.merge(
                {
                    zoomImage: action.img,
                    showImage:true,
                }
            );
        case constants.HIDE_IMAGE:
            return state.merge(
                {
                    zoomImage:'',
                    showImage:false,
                }
            );
        case constants.FETCH_TIMELINE:
            let timeline = immutable.Map();
            action.timeline.forEach(item=>{
                timeline = timeline.set(item.id, item);
            });
            return state.set(
                'timeline', timeline
            );

        case constants.FETCH_GALLERY:
            let gallery = immutable.Map();
            action.gallery.forEach(item=>{
                gallery = gallery.set(item.id, item);
            });
            return state.set(
                'gallery', gallery
            );
        case constants.TOGGLE_LIKE:
            let liked = state.getIn(['timeline', action.idx, 'liked']);
            return state.update(
                'timeline', value=>value.setIn([action.idx, 'liked'], !liked)
            );
        case constants.TOGGLE_BOOKMARK:
            let bookmarked = state.getIn(['timeline', action.idx, 'bookmarked']);
            return state.update(
                'timeline', value=>value.setIn([action.idx, 'bookmarked'], !bookmarked)
            );

        default:
            return state;
    }
}