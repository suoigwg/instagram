import React, { Component } from 'react';
import '../css/header.scss'
import {Link} from "react-router-dom";

class Header extends Component{

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
                            <div className={'header-icon'}><span className={'iconfont'}>&#xe6dc;</span></div>
                            <div className={'header-icon'}><span className={'iconfont'}>&#xe64b;</span></div>
                            <div className={'header-icon'}><span className={'iconfont'}>&#xe622;</span></div>
                    </div>
                </div>
            </header>
        )
    }

}

export default Header;