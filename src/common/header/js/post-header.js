import React, { Component } from 'react';
import '../css/post.scss'
import * as actionCreators from "../store/actionCreators";
import {connect} from "react-redux";

class PostHeader extends Component{
    render() {
        const id = this.props.id?this.props.id:1;
        const {author, location, authorIcon} = this.props.timeline.get(id);
        return (
            <div>
                <header className={'post-header'}>
                    <div>
                        <a className={'user-pic-wrapper'}><img src={authorIcon}/></a>
                    </div>
                    <div className={'post-user-info'}>
                        <div>
                            <strong>{author}</strong>
                        </div>
                        <div >
                            <a className={'post-user-desc'}>{location}</a>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        timeline: state.get('timeline')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PostHeader);