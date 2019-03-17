import React, { Component } from 'react';
import './profile.scss'
function Profile(props) {
    return(
        <div className={'user-profile-wrapper'}>
            <header className={'user-header'}>
                <div style={{margin:'0 30px 0 0', flex:'1 0 0', padding:'30px 0 0 0'}}>
                    <div className={'user-img-wrapper'}>
                    </div>
                </div>
                <section className={'user-info'}>
                    <div><h1>ysyang</h1></div>
                    <ul className={'user-connection'}>
                        <li>1帖子</li>
                        <li>1粉丝</li>
                        <li>正在关注2</li>
                    </ul>
                    <div>描述文字</div>
                </section>
            </header>
            <div className={'user-toggle-wrapper'}>
                <a>帖子</a>
                <a>IGTV</a>
            </div>
            <div className={'gallery'}>
                <div className={'gallery-row'}>
                    <div className={'gallery-pic'}>
                        <img sizes="267px" src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                    </div>
                    <div className={'gallery-pic'}>
                        <img sizes="267px" src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                    </div>
                    <div className={'gallery-pic'}>
                        <img sizes="267px" src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                    </div>
                </div>
                <div className={'gallery-row'}>
                    <div className={'gallery-pic'}>
                        <img sizes="267px" src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                    </div>
                    <div className={'gallery-pic'}>
                        <img sizes="267px" src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                    </div>
                    <div className={'gallery-pic'}>
                        <img sizes="267px" src={'http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;