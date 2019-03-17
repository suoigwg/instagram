import React, { Component } from 'react';
import './discover.scss'
import Gallery from '../common/header/js/gallery'

class Discover extends Component{

    render() {
        return (
            <div className={'discover-wrapper'}>
                <div id={'discover'}><span>探索</span></div>
                <Gallery/>
            </div>
        );
    }

}

export default Discover;