import React, { Component } from 'react';
import '../css/header.scss'

class Header extends Component{

    render() {
        return (
            <header className={'header'}>
                <div className={'header-wrapper'}>
                    <div className={'logoWrapper'}>
                        <a className={'linkLogoWrapper'}>
                            <div>
                                <span className={'iconfont'}>&#xe87f;</span>
                                <span className={'iconfont'}>&#xe610;</span>
                                <span className={'iconfont'}>&#xea10;</span>
                            </div>
                        </a>
                    </div>
                    <div className={'search'}>
                        {/*<span className={'iconfont'}>&#xe60b;</span>*/}
                        <input className={'searchInput'} placeholder={'搜索'}></input>
                        {/*<span className={'iconfont'}>&#xe6df;</span>*/}
                    </div>
                    <div className={'header-icon-wrapper-outer'}>
                        <div className={'header-icon-wrapper-inner'}>
                            <div className={'header-icon'}><span className={'iconfont'}>&#xe6dc;</span></div>
                            <div className={'header-icon'}><span className={'iconfont'}>&#xe64b;</span></div>
                            <div className={'header-icon'}><span className={'iconfont'}>&#xe622;</span></div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}

export default Header;