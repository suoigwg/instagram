import React, { Component } from 'react';
import './discover.scss'
import Gallery from '../common/components/js/gallery'
import UserList from '../common/components/js/suggested-users';
import {connect} from "react-redux";

class Discover extends Component{

    render() {
        return (
            <div className={'discover-wrapper'}>
                <div >
                    <span className={'gray-text'}>发现用户</span>
                    <span className={'blue-text'} style={{float:'right'}}>查看全部</span>
                </div>
                <UserList/>
                <div style={{marginBottom:'18px'}}><span className={'gray-text'} >探索</span></div>
                <Gallery/>
            </div>
        );
    }

}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);