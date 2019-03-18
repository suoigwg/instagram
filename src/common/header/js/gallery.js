import React, { Component } from 'react';
import '../css/gallery.scss';
import Picture from './picture';
import {connect} from "react-redux";
import * as actionCreators from "../store/actionCreators";

class Gallery extends Component{
    constructor(props) {
        super(props);
        this.zoomIn = this.zoomIn.bind(this);
    }

    render() {
        return (
            <div className={'gallery'}>
                <div className={'gallery-row'}>
                    <div className={'gallery-pic'} onClick={(event)=>{this.zoomIn(event)}}>
                        <img  src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                    </div>
                    <div className={'gallery-pic'} onClick={(event)=>{this.zoomIn(event)}}>
                        <img src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                    </div>
                    <div className={'gallery-pic'} onClick={(event)=>{this.zoomIn(event)}}>
                        <img src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                    </div>
                </div>

                <div className={'gallery-row'}>
                    <div className={'gallery-pic'} onClick={(event)=>{this.zoomIn(event)}}>
                        <img  src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                    </div>
                    <div className={'gallery-pic'} onClick={(event)=>{this.zoomIn(event)}}>
                        <img src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                    </div>
                    <div className={'gallery-pic'} onClick={(event)=>{this.zoomIn(event)}}>
                        <img src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                    </div>
                </div>

            </div>
        );
    }



    zoomIn(event){
        this.props.updateImage(event.target.src);
        console.log(event.target.src);
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        zoomImage: state.zoomImage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateImage(imgUrl){
            dispatch(actionCreators.updateZoomImage(imgUrl));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);