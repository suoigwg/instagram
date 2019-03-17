import React, { Component } from 'react';
import '../css/header.scss'
import {Link} from "react-router-dom";

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showNotification:false,
        };
        this.toggleNotification = this.toggleNotification.bind(this);
    }

    renderNotification(){
        return (
            <div className={'header-notification'}>
                获得点赞或评论的帖子会显示在这里。
            </div>
        )
    }

    render() {
        return (
            <header className={'header'}>
                <div className={'header-wrapper'}>
                    <div className={'logoWrapper'}>
                        <Link to={'/'} style={{textDecoration:'none'}}>
                                <div>
                                    <span className={'iconfont'}>&#xe87f;</span>
                                    <span className={'iconfont'}>&#xe610;</span>
                                    <span className={'iconfont'}>&#xea10;</span>
                                </div>
                        </Link>
                    </div>
                    <div className={'header-search'}>
                        <span className={'iconfont'}>&#xe60b;</span>
                        <input className={'searchInput'} placeholder={'搜索'}></input>
                        <span className={'iconfont'}>&#xe6df;</span>
                    </div>
                    <div className={'header-icon-wrapper'}>
                        <Link to={'/discover'} style={{textDecoration:'none'}}>
                            <div className={'header-icon'}><span className={'iconfont'}>&#xe6dc;</span></div>
                        </Link>
                            <div className={'header-icon'} onClick={this.toggleNotification}>
                                <span className={'iconfont'}>&#xe64b;</span>
                                {this.state.showNotification?this.renderNotification():''}
                            </div>
                        <Link to={'/user/1'} style={{textDecoration:'none'}}>
                            <div className={'header-icon'}><span className={'iconfont'}>&#xe622;</span></div>
                        </Link>
                    </div>
                </div>
            </header>
        )
    }

    toggleNotification(){
        this.setState({
            showNotification:!this.state.showNotification,
        })
    }
}

export default Header;