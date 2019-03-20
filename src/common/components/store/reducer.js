import * as constants from './constants'
import * as immutable from 'immutable';
import {fromJS} from "immutable";
const defaultState = immutable.fromJS({
    zoomImage: '',
    showImage: false,
    timeline: new Map(),
    gallery: new Map(),
    currentDisplay: -1,
    picID: [],
    users: [],
    username: 'instagram',
    profile: {}
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.ZOOM_IMAGE_ACTION:
            return state.merge(
                {
                    currentDisplay: action.imgID,
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
            let picID = immutable.List()
            action.timeline.forEach(item=>{
                timeline = timeline.set(item.id, item);
                picID = picID.push(item.id)
            });
            return state.set(
                'timeline', timeline
            ).set(
                'picID', picID
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
        case constants.SET_CURRENT_IMG:
            return state.set(
                'currentDisplay', action.idx
            );
        case constants.ADD_COMMENT:
            let newComments = [...state.getIn(['timeline', action.id, 'comments'])];
            newComments.push(
                {
                    author: state.get('username'),
                    comment: action.comment,
                }
            );
            return state.setIn(['timeline', action.id, 'comments'],
                newComments);
        case constants.LOAD_USERS:
            return state.set('users', action.data);
        case constants.LOAD_USER_PROFILE:
            return state.set('profile', action.data);
        default:
            return state;
    }
}