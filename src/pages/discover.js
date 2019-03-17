import React, { Component } from 'react';
import './discover.scss'
import Gallery from '../common/header/js/gallery'
import UserList from '../common/header/js/suggested-users';

class Discover extends Component{

    render() {
        return (
            <div className={'discover-wrapper'}>
                <div >
                    <span className={'gray-text'}>发现用户</span>
                    <span className={'blue-text'} style={{float:'right'}}>查看全部</span>
                </div>
                <UserList/>
                <div><span className={'gray-text'}>探索</span></div>
                <Gallery/>
            </div>
        );
    }

}

export default Discover;