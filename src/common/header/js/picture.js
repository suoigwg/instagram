import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../css/picture.scss'
import PostInfo from './post-info';
import PostHeader from './post-header';
import * as actionCreators from "../store/actionCreators";
import {connect} from "react-redux";
class Picture extends Component{

    constructor(props) {
        super(props);
        this.closeWindow = this.closeWindow.bind(this);
    }


    render() {
        if(!this.props.visible) return (
            <div></div>
        );
        return (
            <div className={'picture-window'}>
                <span id={'close-picture-window'} className={'iconfont'} onClick={this.closeWindow}>&#xe6df;</span>
                    <article className={'picture-wrapper'}>
                        <div id={'picture'}><img src={this.props.zoomImage} /></div>
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

    componentDidMount() {
        this.props.fetchTimeline();
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        zoomImage: state.get('zoomImage'),
        visible: state.get('showImage'),
        timeline: state.get('timeline'),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideImage(){
            dispatch(actionCreators.hideImage());
        },
        fetchTimeline(){
            dispatch(actionCreators.fetchTimeline())
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Picture);