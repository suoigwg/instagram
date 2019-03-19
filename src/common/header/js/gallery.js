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
    
    renderGallery(){
        const {gallery} = this.props;
        let idx = 1;
        let div = [];
        let row = [];
        gallery.forEach((value, key)=>{
            row.push(
                <div className={'gallery-pic'} onClick={(event)=>{this.zoomIn(event)}}>
                    <img src={value.imgUrl} />
                </div>);
            if(idx % 3 === 0){
                div.push(row);
                row = [];
            }
            idx++;
        });
        if (((idx-1) % 3) !== 0) {
            while ((((idx-1) % 3) !== 0)){
                row.push(<div className={'gallery-pic'} onClick={(event)=>{this.zoomIn(event)}}>
                </div>);
                idx++;
            }
            div.push(row);
        }

        return div.map(item=>{
            return <div className={'gallery-row'}>{item}</div>
        });
    }

    render() {
        return (
            <div className={'gallery'}>
                {this.renderGallery()}
            </div>
        );
    }

    componentDidMount() {
        const api = this.props.api?this.props.api:'discover';
        this.props.fetchGallery(api);
    }

    zoomIn(event){
        this.props.updateImage(event.target.src);
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        zoomImage: state.get('zoomImage'),
        gallery: state.get('gallery')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateImage(imgUrl){
            dispatch(actionCreators.updateZoomImage(imgUrl));
        },
        fetchGallery(api){
            dispatch(actionCreators.fetchGallery(api));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);