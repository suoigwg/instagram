import React, {Component} from 'react';
import '../css/picture.scss'
import PostInfo from './post-info';
import PostHeader from './post-header';
import * as actionCreators from "../store/actionCreators";
import {connect} from "react-redux";

class Picture extends Component{

    constructor(props) {
        super(props);
        this.closeWindow = this.closeWindow.bind(this);
        this.nextPic = this.nextPic.bind(this);
        this.lastPic = this.lastPic.bind(this);

    }


    render() {
        if(!this.props.visible) return (
            <div></div>
        );
        const {gallery, currentDisplay, picID} = this.props;
        const jsGallery = gallery.toJS();
        const imgUrl = jsGallery[picID.get(currentDisplay)]['imgUrl'];
        return (
            <div className={'picture-window'}>
                <span id={'close-picture-window'} className={'iconfont'} onClick={this.closeWindow}>&#xe6df;</span>
                <span id={'next'} className={'iconfont'} onClick={this.lastPic}>&#xe676;</span>
                <span id={'last'} className={'iconfont'} onClick={this.nextPic}>&#xe611;</span>

                    <article className={'picture-wrapper'}>
                        <div id={'picture'}><img src={imgUrl}/></div>
                        <div id={'info'}>
                            <PostHeader/>
                            <ul>
                            </ul>
                            <PostInfo/>
                        </div>
                    </article>
            </div>
        );
    }

    closeWindow(){
        this.props.hideImage();
    }

    lastPic() {
        const {currentDisplay, picID} = this.props;
        const nextIndex = currentDisplay - 1 >= 0 ? currentDisplay - 1 : picID.size - 1;
        this.props.setCurrentPic(nextIndex);
    }

    nextPic() {
        const {currentDisplay, picID} = this.props;
        const nextIndex = currentDisplay + 1 >= picID.size ? 0 : currentDisplay + 1;
        this.props.setCurrentPic(nextIndex);
    }

    componentDidMount() {
        this.props.fetchTimeline();
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        currentDisplay: state.get('currentDisplay'),
        visible: state.get('showImage'),
        timeline: state.get('timeline'),
        gallery: state.get('gallery'),
        picID: state.get('picID'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideImage(){
            dispatch(actionCreators.hideImage());
        },
        fetchTimeline(){
            dispatch(actionCreators.fetchTimeline())
        },
        setCurrentPic(idx) {
            dispatch(actionCreators.setCurrentPic(idx))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Picture);