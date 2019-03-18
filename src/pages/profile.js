import React, { Component } from 'react';
import './profile.scss'
import Gallery from '../common/header/js/gallery'
function Profile(props) {
    return(
        <div className={'user-profile-wrapper'}>
            <header className={'user-header'}>
                <div style={{margin:'0 30px 0 0', flex:'1 0 0', padding:'30px 0 0 0'}}>
                    <div className={'user-img-wrapper'}>
                    </div>
                </div>
                <section className={'user-info'}>
                    <div><p style={{fontSize:'28px'}}>instagram</p></div>
                    <ul className={'user-connection'}>
                        <li>1 帖子</li>
                        <li>1 粉丝</li>
                        <li>正在关注 2</li>
                    </ul>
                    <div>Instagram
                        Bringing you closer to the people and things you love. ❤️
                        help.instagram.com
                    </div>
                </section>
            </header>
            <div className={'user-toggle-wrapper'}>
                <a>帖子</a>
                <a>IGTV</a>
            </div>
            <Gallery/>
        </div>
    )
}

export default Profile;